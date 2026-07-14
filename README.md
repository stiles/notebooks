# Jupyter Notebooks Collection

This repository contains 742 Jupyter notebooks across 186 topics. 
These notebooks are a mix of experiments, drafts and useful scripts for data analysis, visualization and storytelling.

> **Note:** This is a personal sandbox for learning and experimenting. Some notebooks may be incomplete or outdated.

## Setup

This repository uses [uv](https://github.com/astral-sh/uv) to manage Python 3.13 and its dependencies, which are defined in `pyproject.toml` and pinned in `uv.lock`.

### Install uv

```bash
brew install uv
```

### Install dependencies

This creates a `.venv` directory with Python 3.13 and everything in the lockfile:

```bash
uv sync
```

### Run JupyterLab

```bash
uv run jupyter lab
```

### Add a package

```bash
uv add some-package
```
