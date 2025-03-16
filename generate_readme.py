import os
import json
from collections import defaultdict
import sys

# Change the working directory to the script's directory
script_dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(script_dir)

print("Current working directory:", os.getcwd())

# Define the path to your notebooks directory
NOTEBOOKS_DIR = os.getcwd()

def count_notebooks(directory):
    """Recursively scans the directory and counts Jupyter notebooks by topic."""
    topic_counts = defaultdict(int)
    total_notebooks = 0

    for root, _, files in os.walk(directory):
        notebooks = [f for f in files if f.endswith(".ipynb")]
        if notebooks:
            topic = os.path.basename(root)  # Assume directory name is the topic
            topic_counts[topic] += len(notebooks)
            total_notebooks += len(notebooks)

    return topic_counts, total_notebooks

def generate_readme(topic_counts, total_notebooks):
    """Generates a README.md file with repo details and setup instructions."""
    readme_content = f"""# Jupyter Notebooks Collection

This repository contains {total_notebooks} Jupyter notebooks across {len(topic_counts)} topics. 
These notebooks are a mix of experiments, drafts, and useful scripts for data analysis, visualization, and storytelling.

> **Note:** This is a personal sandbox for learning and experimenting. Some notebooks may be incomplete or outdated.

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
"""

    return readme_content

if __name__ == "__main__":
    topic_counts, total_notebooks = count_notebooks(NOTEBOOKS_DIR)
    readme_text = generate_readme(topic_counts, total_notebooks)
    
    with open("README.md", "w", encoding="utf-8") as f:
        f.write(readme_text)

    print(f"README.md generated with {total_notebooks} notebooks across {len(topic_counts)} topics.")
