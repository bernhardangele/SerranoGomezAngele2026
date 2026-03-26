# Reproducible Analysis and Manuscript Environment using Docker

This directory contains a `Dockerfile` to build a Docker image that includes all necessary software dependencies to run the analyses and render the manuscript associated with this project. It ensures a consistent and reproducible environment across different machines.

The image is based on the `glcr.b-data.ch/jupyterlab/r/verse` image, which provides a robust foundation with R, JupyterLab, RStudio Server, the Tidyverse, and common development tools. For more details on the base image features and usage, please refer to its documentation: [b-data/jupyterlab-r-docker-stack](https://github.com/b-data/jupyterlab-r-docker-stack).

## Prerequisites

* **Docker Engine:** You need to have Docker installed and running on your system.
    * Install Docker Desktop (Windows, macOS): [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)
    * Install Docker Engine (Linux): [https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/)
* **Docker Compose (Optional but Recommended):** Using `docker-compose.yml` simplifies configuration. Ensure you have Docker Compose available. It is included with Docker Desktop. For Linux, it's typically installed as a plugin or separately (`docker-compose-plugin`). We recommend using Compose V2 (invoked via `docker compose ...`).

## Building the Docker Image

1.  **Navigate to this directory:** Open your terminal or command prompt and change to the directory containing the `Dockerfile`.
2.  **Build the image:** Run the following command. Replace `<your-image-name>` with a suitable name for your image (e.g., `my-project-env`, `analysis-reproducibility`).

    ```bash
    docker build -t <your-image-name> .
    ```

    * `-t <your-image-name>`: Tags the image with the specified name.
    * `.`: Specifies the build context is the current directory.

    **Note:** This build process might take a significant amount of time, especially the first time.

## Running the Container (using `docker run`)

This method is simpler for quick tests but lacks the configuration management and persistence features easily achieved with Docker Compose (see next section).

1.  **Navigate to the project root:** Ensure your terminal is in the main directory of your project repository.
2.  **Run the container:** Execute the command below, replacing `<your-image-name>`. Note this command does *not* persist user settings within the container's home directory between runs due to `--rm`.

    ```bash
    # On Linux/macOS/Git Bash:
    docker run -it --rm \
      -p 8888:8888 \
      -v "${PWD}":/home/jovyan/work \
      <your-image-name>

    # On Windows Command Prompt (cmd.exe):
    docker run -it --rm ^
      -p 8888:8888 ^
      -v "%cd%":/home/jovyan/work ^
      <your-image-name>

    # On Windows PowerShell:
    docker run -it --rm `
      -p 8888:8888 `
      -v "${pwd}:/home/jovyan/work" `
      <your-image-name>
    ```
    * `-v "...":/home/jovyan/work`: Mounts your project directory into the container.

## Running the Container (using Docker Compose - Recommended)

Using Docker Compose is recommended as it allows for better configuration and crucially enables persistence of the user's home directory inside the container.

**Setup:**

1.  **Create Host Home Directory:** In your project's root directory (where you will place the `docker-compose.yml` file), create a **new, empty directory** named `jupyterlab-jovyan-home`.
    ```bash
    mkdir jupyterlab-jovyan-home
    ```
    This directory will be mounted into the container and store persistent settings, command history, R packages installed interactively, etc., across container sessions.
2.  **Create `docker-compose.yml`:** Create a file named `docker-compose.yml` in your project's root directory with the following content:

    ```yaml
    # docker-compose.yml
    version: '3.8'

    services:
      analysis-env:
        image: bangele1/analysis-in-a-box:serranocarotetal2025 
        # container_name: my_project_container # Optional: Give the container a fixed name
        stdin_open: true # Equivalent to -i
        tty: true        # Equivalent to -t
        ports:
          - "8888:8888" # Map port for JupyterLab
          # - "8787:8787" # Optional: Uncomment to map port for RStudio Server

        working_dir: /home/jovyan/work # Default directory inside the container

        volumes:
          # Mount the persistent host directory to the container's home directory
          # Ensures settings, history, etc., persist across runs.
          - ./jupyterlab-jovyan-home:/home/jovyan

          # Mount the project directory (containing this file) into the work subdirectory
          - .:/home/jovyan/work

          # --- Optional: Mount SSH keys for Git operations ---
          # Uncomment and update paths if needed. Ensure host key permissions are secure.
          # - ${HOME}/.ssh/id_ed25519:/home/jovyan/.ssh/id_ed25519:ro
          # - ${HOME}/.ssh/id_ed25519.pub:/home/jovyan/.ssh/id_ed25519.pub:ro
          # - ${HOME}/.ssh/known_hosts:/home/jovyan/.ssh/known_hosts:ro

        environment:
          # Match container UID/GID to host user to avoid permission issues on volumes.
          # On Linux/macOS, run 'UID=$(id -u) GID=$(id -g) docker compose up'
          # Defaults (1000/100) are used if host UID/GID aren't passed.
          - NB_UID=${UID:-1000}
          - NB_GID=${GID:-100}
          # Attempt to fix permissions on mounted home and work directories on startup.
          - CHOWN_HOME=yes
          - CHOWN_EXTRA=/home/jovyan/work

          # --- Optional Environment Variables ---
          # - JUPYTER_TOKEN=your_super_secret_token # Set a fixed Jupyter token
          # - GRANT_SUDO=yes # Grant passwordless sudo (use with caution)

        # --- Optional Resource Limits ---
        # resources:
        #   limits:
        #     cpus: '4.0'
        #     memory: 16G
        #   reservations:
        #     cpus: '1.0'
        #     memory: 4G
    ```

**Explanation of `docker-compose.yml`:**

* **`image: <your-image-name>`**: **Replace this** with the name you used in `docker build`.
* **`volumes:`**:
    * `./jupyterlab-jovyan-home:/home/jovyan`: **Crucial.** Mounts the host directory you created (`jupyterlab-jovyan-home`) to `/home/jovyan` inside the container.
    * `.:/home/jovyan/work`: Mounts your project code (the current directory `.`) into the `/home/jovyan/work` subdirectory.
* **`environment: NB_UID/NB_GID`**: Essential for ensuring correct file ownership in mounted volumes. Requires passing `UID` and `GID` from the host (see "How to Use" below).
* **Other Options:** Configure ports, resource limits, SSH keys, etc., as needed.

**How to Use Docker Compose:**

1.  Ensure you have created `./jupyterlab-jovyan-home` and `docker-compose.yml` (with your image name) in your project root.
2.  Open a terminal in your project root directory.
3.  **Start the service:**
    ```bash
    # On Linux/macOS (Recommended: Pass host UID/GID):
    UID=$(id -u) GID=$(id -g) docker compose up

    # On Windows or if not passing UID/GID (relies on defaults 1000/100):
    docker compose up
    ```
    This starts the container. You'll see the JupyterLab access URL in the terminal.
4.  **Stop the service:** Press `Ctrl+C`. To stop and remove the container (but *not* the persistent `./jupyterlab-jovyan-home`), use `docker compose down`.

## Using the Environment

*(This applies whether you started the container using `docker run` or `docker compose up`)*

1.  **Access JupyterLab:** Use the URL from the terminal output (e.g., `http://127.0.0.1:8888/lab?token=...`) in your browser.
2.  **Navigate and Work:** Your project files are in the `work` directory. Use the available tools (terminal, RStudio, notebooks). Settings persist if using Compose with the `/home/jovyan` mount.
3.  **Run Analyses and Render Manuscript:** Execute scripts and render documents from the `work` directory.

## Adding Extra LaTeX Packages (If Needed)

The image includes TinyTeX and many common LaTeX packages. If rendering fails due to a missing `.sty` file:

1.  **Open an R Console** inside the running container.
2.  **Try to Install:** Run `tinytex::tlmgr_install("packagename")` (replace `packagename`).
3.  **Retry Rendering.**

**Troubleshooting & Persistence:**

* **Permissions Problems:** If `tinytex::tlmgr_install()` fails inside the container (e.g., due to permissions issues accessing the TinyTeX directory), the most reliable solution is to add the required package directly to the `Dockerfile`.
* **Making it Permanent (Recommended):** Edit the `Dockerfile` and add your package name to the list within the `RUN Rscript -e 'tinytex::tlmgr_install(c(...))'` command. Then, rebuild the Docker image (`docker build -t <your-image-name> .`). This ensures the package is installed correctly during the build process and is permanently available in all containers created from the updated image.
* **Compose Persistence:** If using `docker compose` with the `/home/jovyan` mount, packages successfully installed *inside* the container via `tinytex::tlmgr_install()` might persist in the `./jupyterlab-jovyan-home` directory. However, modifying the `Dockerfile` is the cleaner and more reproducible approach for required dependencies.

## Included Software Highlights

* **Base:** R, JupyterLab, RStudio Server, Tidyverse (`b-data/jupyterlab-r-docker-stack:verse`).
* **R Packages:** `brms`, `lme4`, `cmdstanr`, `papaja`, `gt`, `gtsummary`, `pak`, parallel processing tools, etc. (see Dockerfile).
* **Other:** CmdStan, TinyTeX (with `apa7`, `fontawesome5`, etc.), `latexdiff`, system libraries.

## Notes

* **Resource Usage:** Bayesian models (`brms`) can be resource-intensive. Adjust Docker resources via Docker Desktop settings or the `resources` key in `docker-compose.yml`.
* **Permissions:** Using `NB_UID`/`NB_GID` with Docker Compose is recommended for volume permissions. `/opt/cmdstan` and `/opt/TinyTeX` inside the image allow user writing.