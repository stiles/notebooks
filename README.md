# Jupyter Notebooks Collection

This repository contains 771 Jupyter notebooks across 187 topics. 
These notebooks are a mix of experiments, drafts, and useful scripts for data analysis, visualization, and storytelling.

> **Note:** This is an older personal sandbox for learning and experimenting. Some notebooks may be incomplete or outdated. 

## 🛠️ Setting Up the Environment

This repository uses [`uv`](https://github.com/astral-sh/uv) for dependency management.

### Install `uv`
brew install uv

### Set up a Virtual Environment
export UV_VENV_PATH=".venv"
uv venv
source .venv/bin/activate

### Install Dependencies
If you have a `requirements.txt` file:
uv pip install -r requirements.txt

For individual package installation:
uv add pandas numpy matplotlib jupyterlab

### Run JupyterLab
uv run jupyter lab

### Lock Dependencies for Reproducibility
uv lock

### Sync Dependencies in a New Environment
uv sync
