# Jupyter Notebooks Collection

This repository contains 930 Jupyter notebooks across 188 topics. 
These notebooks are a mix of experiments, drafts, and useful scripts for data analysis, visualization and storytelling.

> **Note:** This is a personal sandbox for learning and experimenting. Some notebooks may be incomplete or outdated.

## 🛠️ Setting Up the Environment

This repository uses [`uv`](https://github.com/astral-sh/uv) for dependency management.

### Install `uv`
`uv` is a package manager for Python that simplifies the setup of virtual environments and dependency management.
To install `uv`, follow the instructions on the [official website](https://astral.sh/uv/).

```bash
brew install uv
```

### Set up a Virtual Environment
```bash
export UV_VENV_PATH=".venv"
uv venv
source .venv/bin/activate
```

### Install Dependencies
If you have a `requirements.txt` file:
```bash
uv pip install -r requirements.txt
```

For individual package installation:
```bash
uv add pandas numpy matplotlib jupyterlab
```

### Run JupyterLab
```bash
uv run jupyter lab
```

### Lock Dependencies for Reproducibility
```bash
uv lock
```

### Sync Dependencies in a New Environment
```bash
uv sync
```
