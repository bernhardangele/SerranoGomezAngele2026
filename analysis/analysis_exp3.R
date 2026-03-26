library(lme4)
library(here)
library(MASS)
library(tidyverse)
library(brms)
library(beanplot)
library(ggpp)
library(xfun)
library(ggrain)
library(qs2)

# use "here" package to make all paths refer to the project root

# Load data

# Read all PsychoJS trial data
exp3_all_csv_content <- fs::dir_ls(path = here("data", "semantic_categorization_flanker"), glob = "*.csv") %>%
  map_dfr(read_csv, .id = "source", col_type = cols(
    .default = col_character(), rt = col_double(), corr = col_integer(), TrialID = col_integer()))

exp3_all_participants <- exp3_all_csv_content |>
  # for each subject, set the first value of counterbalancing condition as the value for all of the data
  # the key assignment is given by the image used in the instruction (3rd row of each data file) 
  group_by(PROLIFIC_PID) |>
  mutate(counterbalancing_condition = as.numeric(counterbalancing_condition[1]),
         key_assignment = if_else("keyboardresponseAN.png" %in% instruct_image, "animal_left", "animal_right"),
         counterbalancing_condition_full = if_else(key_assignment == "animal_left", counterbalancing_condition, counterbalancing_condition + 2)) %>%
  ungroup() |>
  # remove rows that are not trials (e.g., instructions) and practice trials
  filter(!is.na(TrialID) & TrialID < 2000) %>%
  # fix some misleading variable names and add response key counterbalancing information (female left vs. male left)
  mutate(Target = Prime, 
         FlankerDuration = PrimeDuration) |>
  select(source, PROLIFIC_PID, date, OS, frameRate, rt, corr, TrialID, StimulusType, IsAnimal, Condition, FlankerDuration, Target, Flanker, counterbalancing_condition_full, counterbalancing_condition)

participant_list <- exp3_all_participants |> group_by(PROLIFIC_PID, counterbalancing_condition_full) |> summarise(
  mean_rt = mean(rt, na.rm = TRUE),
  mean_acc = mean(corr[corr != -1]),
  mean_correct = mean(corr == 1),
  time_out = sum(corr == -1),
  N = n()
  )

low_acc_participants <- participant_list %>% filter(mean_correct < .8)

exp3 <- exp3_all_participants %>% filter(!(PROLIFIC_PID %in% low_acc_participants$PROLIFIC_PID))

# check counterbalancing for counterbalancing_condition and response_key_condition
# how many participants in each condition?

exp3 |> group_by(counterbalancing_condition_full) |> summarise(
  N = n(),
  mean_rt = mean(rt, na.rm = TRUE),
  mean_acc = mean(corr[corr != -1]),
  mean_correct = mean(corr == 1),
  time_out = sum(corr == -1)
)


# rain cloud plot for rt

exp3 %>% filter(rt > .15 & rt < 1.8 & corr == 1) %>% ggplot(aes(x = Condition, y = rt, color = Condition, fill = Condition)) +
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
  labs(x = "Condition", y = "RT (s)", title = "RT by Condition and Animal/Not Animal") +
  facet_wrap(~IsAnimal)


exp3$Condition <- factor(exp3$Condition, levels = c("AGR", "DIS"))

exp3$StimulusType <- factor(exp3$StimulusType, levels = c("FEM", "MAS"))

exp3$IsAnimal <- factor(exp3$IsAnimal, levels = c("0", "1"), labels = c("Not Animal", "Animal"))

# contrasts: AGR vs DIS

contrasts(exp3$Condition) <- contr.sum


# contrasts: FEM vs MAS

contrasts(exp3$StimulusType) <- contr.sum

# contrasts: Animal vs Not Animal

contrasts(exp3$IsAnimal) <- contr.sum


exp3$subject <- as.factor(exp3$PROLIFIC_PID) %>% as.numeric() %>% as.factor()


exp3$item <- as.factor(exp3$Target) %>% as.numeric() %>% as.factor()

exp3 %>% filter(rt > .15 & rt < 1.8 & corr == 1) %>% ggplot(aes(x = Condition, y = rt, color = Condition, fill = Condition)) +
  geom_rain(alpha = .5,
            boxplot.args = list(color = "black", outlier.shape = NA),
            boxplot.args.pos = list(
              position = position_dodgenudge(x = .25, width = 0.2), width = 0.1),
            violin.args.pos = list(
              side = "r",
              width = 0.7, position = position_nudge(x = 0.4)),
            point.args = list(size = 0.2, alpha = .1),
            point.args.pos = list(position = position_jitter(width = 0.1))) +
  theme_minimal() +
  labs(x = "Condition", y = "RT (s)", title = "RT by Condition and Animal/Not Animal") +
  facet_wrap(~IsAnimal,labeller = labeller(IsAnimal = c("Not Animal" = "Not Animal", "Animal" = "Animal")))

priors_gaussian <- c(set_prior("normal(0,1)", class = "b"))


priors_beta <- c(set_prior("normal(0,1)", class = "b"),
                 set_prior("normal(0,1)", class = "b", dpar = "beta"))


#bm1 <- brm(rt ~ Condition + (Condition|PROLIFIC_PID) + (Condition|Target), data = exp2 %>% filter(rt > .25 & corr == 1 & StimulusType == "WORD") , family = exgaussian(), prior = priors_gaussian, chains = 4, iter = 2000, warmup = 1000, cores = 4)

blmm_exp3_rt_dist_no_int <-
  brm(
    data = exp3 %>% filter(rt > .25 & rt < 1.8 & corr == 1 & IsAnimal == "Not Animal"),
    formula = bf(
      rt ~ Condition + (Condition | PROLIFIC_PID) + (Condition | Target),
      beta ~ Condition + (Condition | PROLIFIC_PID) + (Condition | Target)),
    warmup = 1000,
    iter = 5000,
    chains = 4,
    sample_prior = "yes",
    prior = priors_beta,
    family = exgaussian(),
    init = "0",
    control = list(adapt_delta = 0.8),#, max_treedepth = 15),
    cores = 4,
    backend = "cmdstanr",
    threads = threading(2),
    silent = 0
  )

qs_save(blmm_exp3_rt_dist_no_int, file = here("analysis", "blmm_exp3_rt_dist_no_int.qs"))



blmm_exp3_rt_dist <-
  brm(
    data = exp3 %>% filter(rt > .25 & rt < 1.8 & corr == 1 & IsAnimal == "Not Animal"),
    formula = bf(
      rt ~ Condition*StimulusType  + (Condition*StimulusType | PROLIFIC_PID) + (Condition  | Target),
      beta ~ Condition*StimulusType + (Condition*StimulusType  | PROLIFIC_PID) + (Condition  | Target) ),
    warmup = 1000,
    iter = 5000,
    chains = 4,
    sample_prior = "yes",
    prior = priors_beta,
    family = exgaussian(),
    init = "0",
    control = list(adapt_delta = 0.8),#, max_treedepth = 15),
    cores = 4,
    backend = "cmdstanr",
    threads = threading(2),
    silent = 0
  )

qs_save(blmm_exp3_rt_dist, file = here("analysis", "blmm_exp3_rt_dist.qs"))

blmm_acc_exp3 <-
  brm(
    data = exp3 |> filter(rt > .25 & rt < 1.8 & corr != -1 & IsAnimal == "Not Animal"),
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

qs_save(blmm_acc_exp3, file = here("analysis", "blmm_acc_exp3.qs"))

