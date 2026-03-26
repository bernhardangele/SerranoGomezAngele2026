# syntax=docker/dockerfile:1

# 1. Start from the arm64-compatible tidyverse image.
FROM rocker/tidyverse:4.5.3

# 2. Consolidate ENV variables into a single layer to reduce image bloat.
ENV CTAN_REPO="https://mirror.ctan.org/systems/texlive/tlnet" \
    PATH="/opt/datalad-env/bin:$PATH:/usr/local/texlive/bin/linux" \
    CMDSTAN=/opt/cmdstan/cmdstan-2.38.0

# 3. Run the verse installation script.
RUN /rocker_scripts/install_verse.sh

# 4. Install system dependencies.
# Added `pari-gp` to satisfy pak's underlying requirements without triggering apt conflicts.
RUN apt-get update && apt-get install -y --no-install-recommends \
    libcurl4-openssl-dev \
    libssl-dev \
    libxml2-dev \
    libcairo2-dev \
    latexdiff \
    python3 \
    python3-pip \
    python3-venv \
    curl \
    git-annex \
    pari-gp \
    && rm -rf /var/lib/apt/lists/*

# 5. Install Node.js (Using NodeSource for Node 20 LTS).
# Essential for OpenCode / OpenVSCode Server environments.
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y --no-install-recommends nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# 6. Install DataLad and the OSF extension in an isolated virtual environment.
RUN python3 -m venv /opt/datalad-env && \
    /opt/datalad-env/bin/pip install --no-cache-dir datalad datalad-osf

# 7. Set CRAN snapshot for reproducible builds.
ARG CRAN_SNAPSHOT=https://packagemanager.posit.co/cran/2026-03-25	

# Update pre-installed base image packages and install pak.
RUN Rscript -e "options(repos = c(CRAN = '${CRAN_SNAPSHOT}')); update.packages(ask = FALSE)" && \
    Rscript -e 'install.packages("pak", repos = sprintf("https://r-lib.github.io/p/pak/stable/%s/%s/%s", .Platform$pkgType, R.Version()$os, R.Version()$arch))'

# 8. Install R packages via pak.
# System requirements are explicitly disabled to prevent apt conflicts with NodeSource.
# Forced static V8 library download.
RUN Rscript -e "Sys.setenv(PKG_SYSREQS = 'false', DOWNLOAD_STATIC_LIBV8 = '1'); \
    options(repos = c(CRAN = '${CRAN_SNAPSHOT}')); \
    pak::pkg_install(c(\
    'brms', 'lme4', 'furrr', 'future.callr', 'qs2', 'MASS', 'ggpubr', \
    'readr', 'stringr', 'performance', 'lmerTest', 'remotes', 'gt', \
    'gtsummary', 'broom.mixed', 'kableExtra', 'papaja', 'simr', \
    'broom.helpers', 'ftExtra', 'here', 'ggpp', 'beanplot', 'ggrain', \
    'katex', 'tidybayes', 'BayesFactor', 'sjPlot', 'marginaleffects', \
    'collapse', 'emmeans', 'modelsummary', 'buildmer', 'Rcpp', 'RWiener', \
    'patchwork', 'DT', 'plotly', 'crosstalk', 'jtools', 'rstan', 'ggmcmc', \
    'effects', 'bayesplot', 'bayestestR', 'see', 'plyr', 'afex', 'survey', \
    'sjmisc', 'foreign', 'Hmisc', 'reshape2', 'ggeffects', 'cowplot' \
))"

# 9. Install cmdstanr from a specific release tag.
RUN Rscript -e 'remotes::install_github("stan-dev/cmdstanr@v0.9.0")'

# 10. Install missing tinytex packages.
RUN Rscript -e 'tinytex::tlmgr_install(c("scalerel", "was", "listings", "listingsutf8", "ulem", "oberdiek", "fontawesome5", "colortbl", "newtx", "fontaxes", "carlisle", "xstring", "wrapfig", "pdflscape", "tabu", "makecell", "anyfontsize", "apa7", "pbalance", "lbtabptch"))'

# 11. Create directory, install CmdStan, and set permissions in a single layer.
RUN mkdir -p /opt/cmdstan && \
    R -e 'cmdstanr::install_cmdstan(dir = "/opt/cmdstan", version = "2.38.0", cores = parallel::detectCores())' && \
    chmod -R 777 /opt/cmdstan

# Switch back to the non-root user (Uncomment if needed)
# USER ${NB_USER}