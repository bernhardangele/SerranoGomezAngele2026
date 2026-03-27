library(lme4)
library(here)
library(MASS)
library(tidyverse)
library(brms)
library(cmdstanr)
library(beanplot)
library(xfun)
library(ggrain)
library(qs2)

# use "here" package to make all paths refer to the project root

# Load data

# Read all PsychoJS trial data
exp1_all_csv_content <- fs::dir_ls(path = here("data", "gender_decision_flanker"), glob = "*.csv") %>%
  map_dfr(read_csv, .id = "source", col_type = cols(
    .default = col_character(), rt = col_double(), corr = col_integer(), TrialID = col_integer()))

# Load file with transparent/opaque information

stimuli <- read_csv(here("exp1_grammatical_gender_categorization_flanker/", "trials_list0_transparency.csv")
)


exp1_all_participants <- exp1_all_csv_content |>
  # for each subject, set the first value of counterbalancing condition as the value for all of the data
  # the key assignment is given by the image used in the instruction (3rd row of each data file) 
  group_by(PROLIFIC_PID) |>
  mutate(counterbalancing_condition = counterbalancing_condition[1],
         response_key_condition = if_else(instruct_image[3] == "keyboardresponseFM.png", "FM", "MF")) |>
  ungroup() |>
  # remove rows that are not trials (e.g., instructions) and practice trials
  filter(!is.na(TrialID) & TrialID < 2000) %>%
  # fix some misleading variable names and add response key counterbalancing information (female left vs. male left)
  # join with stimuli data frame
  left_join(stimuli |> select(Prime, Transparency)) |>
  mutate(Target = Prime, 
         FlankerDuration = PrimeDuration) |>
  select(source, PROLIFIC_PID, date, OS, frameRate, rt, corr, TrialID, StimulusType, Condition, FlankerDuration, Target, Flanker, Transparency, response_key_condition, counterbalancing_condition)

participant_list <- exp1_all_participants |> group_by(PROLIFIC_PID, counterbalancing_condition, response_key_condition) |> summarise(
  mean_rt = mean(rt),
  mean_acc = mean(corr[corr != -1]),
  mean_correct = mean(corr == 1),
  time_out = sum(corr == -1),
  N = n()
  )

low_acc_participants <- participant_list %>% filter(mean_correct < .8)

# this is the participant who confirmed on Prolific that they were over 18 and then entered 12 as their age on the survey
# they are also a low-accuracy participant, so excluded anyway
exclude_for_inconsistent_information <- "0d828a45ab54823a65f9fca4"

exp1 <- exp1_all_participants %>% filter(!(PROLIFIC_PID %in% low_acc_participants$PROLIFIC_PID)) %>% 
  filter(!(PROLIFIC_PID %in% exclude_for_inconsistent_information))

exp1$Condition <- factor(exp1$Condition, levels = c("CON", "AGR", "DIS"))

exp1$StimulusType <- factor(exp1$StimulusType, levels = c("MAS", "FEM"))

# contrasts: CON vs AGR, CON and AGR vs DIS

# Define the custom contrast matrix
contr_matrix <- matrix(c(
  1, -1,  0,  # Contrast for CON vs AGR
  0.5, 0.5, -1  # Contrast for (CON + AGR) vs DIS
), 
nrow = 3, 
dimnames = list(c("CON", "AGR", "DIS"), c("CON_vs_AGR", "CON_AGR_vs_DIS")))

contr_matrix_inv <- zapsmall(t(ginv(contr_matrix))) %>% matrix(nrow = 3, dimnames = list(c("CON", "AGR", "DIS"), c("CON_vs_AGR", "CON_AGR_vs_DIS")))


contrasts(exp1$Condition) <- contr_matrix_inv

contrasts(exp1$StimulusType) <- contr.sum

exp1 |> filter(corr != -1) |>
  group_by(corr, StimulusType) |> 
  summarise(
    N = n(),
    mean_rt = mean(rt, na.rm = TRUE),
    mean_acc = mean(corr[corr != -1]),
    mean_correct = mean(corr == 1),
    time_out = sum(corr == -1)
  )

exp1$subject <- as.factor(exp1$PROLIFIC_PID) %>% as.numeric() %>% as.factor()

exp1$Transparency <- factor(exp1$Transparency, levels = c("Opaque", "Transparent"))

contrasts(exp1$Transparency) <- contr.sum

exp1 %>% filter(corr == 1) %>% ggplot(aes(x = Condition, y = rt, color = Condition, fill = Condition)) +
  geom_rain(alpha = .5,
            boxplot.args = list(color = "black", outlier.shape = NA),
            boxplot.args.pos = list(
              position = ggpp::position_dodgenudge(x = .25, width = 0.2), width = 0.1),
            violin.args.pos = list(
              side = "r",
              width = 0.7, position = position_nudge(x = 0.4)),
            point.args = list(size = 0.2, alpha = .1),
            point.args.pos = list(position = position_jitter(width = 0.1))) +
  theme_minimal() +
  labs(x = "Condition", y = "RT (ms)", title = "RT by Condition and Stimulus Type") +
  facet_grid(~StimulusType + Transparency)

write_csv(file = here("analysis", "exp1_data_for_analysis_transparency.csv"), x = exp1)

# brms LMM for rt

priors_gaussian <- c(set_prior("normal(0,1)", class = "b"))


priors_beta <- c(set_prior("normal(0,1)", class = "b"),
                 set_prior("normal(0,1)", class = "b", dpar = "beta"))

m1 <- lmer(rt ~ Condition*StimulusType*Transparency + (1|subject) + (1|Target), data = exp1 %>% filter(rt > .25 & corr == 1 & rt < 1.8))



blmm_rt_dist_transparent <-
  brm(
    data = exp1 |> filter(rt > .25 & rt < 1.8 & corr == 1 & Transparency == "Transparent"),
    formula = bf(
      rt ~ Condition*StimulusType  + (Condition*StimulusType | PROLIFIC_PID) + (Condition  | Target),
      beta ~ Condition*StimulusType + (Condition*StimulusType  | PROLIFIC_PID) + (Condition  | Target) ),
    warmup = 1000,
    iter = 5000,
    chains = 4,
    prior = priors_beta,
    sample_prior = "yes",
    family = exgaussian(),
    init = "0",
    control = list(adapt_delta = 0.8),#, max_treedepth = 15),
    cores = 4,
    backend = "cmdstanr",
    threads = threading(2),
    silent = 0
  )

qs_save(blmm_rt_dist_transparent, file = here("analysis", "blmm_exp1_rt_dist_transparent.qs"))



blmm_acc_exp1_transparent <-
  brm(
    data = exp1 |> filter(rt > .25 & rt < 1.8 & corr != -1 & Transparency == "Transparent"),
    formula = bf(corr ~ Condition*StimulusType  + (Condition*StimulusType | PROLIFIC_PID) + (Condition  | Target)),
    warmup = 1000,
    iter = 5000,
    chains = 4,
    prior = priors_gaussian,
    sample_prior = "yes",
    family = bernoulli(),
    #init = "0",
    control = list(adapt_delta = 0.8),#, max_treedepth = 15),
    cores = 4,
    backend = "cmdstanr",
    threads = threading(2),
    silent = 0
  )

qs_save(blmm_acc_exp1_transparent, file = here("analysis", "blmm_acc_exp1_transparent.qs"))
