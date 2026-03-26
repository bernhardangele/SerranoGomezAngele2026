# --- Your existing code ---
library(tidyverse)
library(here) # Assuming 'here' is installed and project is set up
# library(stringr) # Part of tidyverse, but good to be explicit if needed
# library(purrr)   # Part of tidyverse, needed for map_chr

# Set the base path correctly if needed, otherwise 'here' should work
# data_path <- here("data") # Or the specific path to your 'data' folder

exp1_all_csv_content <- fs::dir_ls(path = here("data", "gender_decision_flanker"), glob = "*.csv") %>%
  map_dfr(read_csv, .id = "source", col_types = cols(
    .default = col_character(), rt = col_double(), corr = col_integer(), TrialID = col_integer()))

exp2_all_csv_content <- fs::dir_ls(path = here("data", "lexical_decision_flanker"), glob = "*.csv") %>%
  map_dfr(read_csv, .id = "source", col_types = cols(
    .default = col_character(), rt = col_double(), corr = col_integer(), TrialID = col_integer()))

exp3_all_csv_content <- fs::dir_ls(path = here("data", "semantic_categorization_flanker"), glob = "*.csv") %>%
  map_dfr(read_csv, .id = "source", col_types = cols(
    .default = col_character(), rt = col_double(), corr = col_integer(), TrialID = col_integer()))

# --- Continuation and Modification of the script ---

# Define the demographic columns to avoid repetition and typos
demographic_cols <- c(
  "PROLIFIC_PID",
  "consent_prescreening.block_1/age_years",
  "consent_prescreening.block_1/gender",
  "consent_prescreening.block_1/first_language"
)

# Extract unique participant demographics for Experiment 1
# Need to use backticks `` because column names contain special characters like '/'
demographics_exp1 <- exp1_all_csv_content %>%
  # Select only unique combinations of participant ID and their demographic info
  distinct(across(all_of(demographic_cols))) %>%
  mutate(Experiment = "Exp1") %>%
  # Filter out rows where any of these key demographics are NA
  filter(
    !is.na(PROLIFIC_PID),
    !is.na(`consent_prescreening.block_1/age_years`),
    !is.na(`consent_prescreening.block_1/gender`),
    !is.na(`consent_prescreening.block_1/first_language`), # Also filter NA language if desired
    as.numeric(`consent_prescreening.block_1/age_years`) < 18 # remove participant who stated their age was 12
  )

# Extract unique participant demographics for Experiment 2
demographics_exp2 <- exp2_all_csv_content %>%
  distinct(across(all_of(demographic_cols))) %>%
  mutate(Experiment = "Exp2") %>%
  filter(
    !is.na(PROLIFIC_PID),
    !is.na(`consent_prescreening.block_1/age_years`),
    !is.na(`consent_prescreening.block_1/gender`),
    !is.na(`consent_prescreening.block_1/first_language`)
  )

# Extract unique participant demographics for Experiment 3
demographics_exp3 <- exp3_all_csv_content %>%
  distinct(across(all_of(demographic_cols))) %>%
  mutate(Experiment = "Exp3") %>%
  filter(
    !is.na(PROLIFIC_PID),
    !is.na(`consent_prescreening.block_1/age_years`),
    !is.na(`consent_prescreening.block_1/gender`),
    !is.na(`consent_prescreening.block_1/first_language`)
  )

# Combine demographics from all experiments into one tibble
all_demographics <- bind_rows(demographics_exp1, demographics_exp2, demographics_exp3)

# Rename columns, convert age, and process the first_language string
final_demographics <- all_demographics %>%
  rename(
    participant = PROLIFIC_PID,
    age = `consent_prescreening.block_1/age_years`,
    gender = `consent_prescreening.block_1/gender`,
    first_language = `consent_prescreening.block_1/first_language` # Rename language column
  ) %>%
  mutate(
    # Convert age to numeric type
    age = as.numeric(age),
    
    # Process the first_language column:
    # 1. Remove brackets and quotes
    first_language = str_replace_all(first_language, pattern = "\\[|\\]|\"", replacement = ""),
    # 2. Replace comma with slash
    first_language = str_replace_all(first_language, pattern = ",", replacement = "/"),
    # 3. Capitalize each language listed (handles single and multiple languages)
    first_language = map_chr(str_split(first_language, "/"), ~ paste(str_to_title(.), collapse = "/"))
  ) %>%
  # Select and order the final columns
  select(Experiment, participant, age, gender, first_language)

write_csv(
  final_demographics,
  here("analysis", "all_exp_demographics.csv"),
  na = "",
  col_names = TRUE
)
