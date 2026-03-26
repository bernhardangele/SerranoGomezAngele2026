# Docker Container for Reproducible Analysis

This directory contains the `Dockerfile` used to build a Docker image with all software dependencies needed to run the analyses and render the manuscript. The pre-built image is available on Docker Hub.

## Pre-built image

The image is published at:

```
bangele1/analysis-in-a-box-rocker:SerranoGomezAngele2026
```

You do **not** need to build it yourself unless you want to modify the environment. See the [root README](../README.md) for how to use it with `docker compose` or GitHub Codespaces.

## Building the image from source

If you need to modify the software environment, you can rebuild the image:

```bash
# From this directory (docker_container/)
docker build -t bangele1/analysis-in-a-box-rocker:SerranoGomezAngele2026 .
```

This will take a long time (30+ minutes) because it installs R packages, CmdStan, TinyTeX, and many system libraries.

After building, update the image name in `docker-compose.yml` if you changed the tag.

## Using docker compose (recommended)

The repository root contains a `docker-compose.yml` file that is ready to use with the pre-built image. From the repository root:

```bash
docker compose up
```

Then open <http://localhost:8787> in your browser (username and password: `rstudio`).

To stop: press `Ctrl+C`, then run `docker compose down`.

## Using docker run (alternative)

If you prefer not to use Docker Compose:

```bash
docker run -it \
  -p 8787:8787 \
  -v "${PWD}:/home/rstudio/project" \
  -e PASSWORD=rstudio \
  -e CMDSTAN=/opt/cmdstan/cmdstan-2.38.0 \
  bangele1/analysis-in-a-box-rocker:SerranoGomezAngele2026
```

Then open <http://localhost:8787> (username: `rstudio`, password: `rstudio`).

## Adding extra LaTeX packages

If Quarto rendering fails due to a missing LaTeX package (a `.sty` file not found error):

1. Open the `Dockerfile` in this directory.
2. Find the line with `tinytex::tlmgr_install(...)` and add the package name to the list.
3. Rebuild the image (see above).

For a quick test without rebuilding, you can install a package inside a running container:

```r
tinytex::tlmgr_install("packagename")
```

However, this will not persist if you recreate the container. Modifying the Dockerfile is the recommended approach.

## What is included

**Base image**: `rocker/tidyverse:4.5.3` (R, RStudio Server, Tidyverse)

**System software**:
- DataLad and git-annex (for data retrieval from GIN)
- CmdStan 2.38.0 (Bayesian model compilation backend)
- TinyTeX with APA and common LaTeX packages
- latexdiff
- Python 3 with DataLad in an isolated virtual environment

**R packages** (selected):
- Bayesian modeling: `brms`, `cmdstanr`, `rstan`, `bayesplot`, `bayestestR`
- Mixed-effects models: `lme4`, `lmerTest`, `afex`, `buildmer`
- Data manipulation: `tidyverse`, `dplyr`, `readr`, `stringr`, `collapse`
- Tables: `gt`, `gtsummary`, `kableExtra`, `flextable`, `ftExtra`, `papaja`
- Visualization: `ggpubr`, `tidybayes`, `patchwork`, `cowplot`, `ggrain`
- Parallel processing: `furrr`, `future.callr`
- Other: `here`, `qs2`, `emmeans`, `marginaleffects`, `modelsummary`, `simr`

See the `Dockerfile` in this directory for the complete list.

## GitHub Codespaces

The `.devcontainer/` configuration at the repository root references the same Docker image via `docker-compose.yml`. When you create a GitHub Codespace, it automatically uses this container — no local Docker installation needed.
