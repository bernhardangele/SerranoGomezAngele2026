#!/bin/bash

echo "Connecting to GIN to fetch data and model files..."

# 1. Configure Git (required by DataLad)
git config --global user.name "Docker User"
git config --global user.email "docker@example.com"
git config --global --add safe.directory /home/rstudio/project

# 2. Tell DataLad where the GIN data repository lives
# NOTE: Using HTTPS so readers do not need SSH keys.
# FIX: Removed the .git extension from the URL
datalad siblings add --name gin --url https://gin.g-node.org/bangele/Serrano_Carot_Gomez_Angele_2026

# 3. Fetch the actual data and model files from GIN
datalad get .

echo "Files downloaded. You can now render the manuscript with:"
echo "  cd final_manuscript && quarto render SerranoGomezAngele2026.qmd"