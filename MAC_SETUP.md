# **Set Up Your Mac for Data & Development Work (2025 Edition)**

This guide will help you set up your Mac for Python, data science, and development work using modern tools.

---

## **1. Keep macOS Up-to-Date**
Keeping your system updated ensures security and compatibility.

1. Open **System Settings** → **General** → **Software Update**  
2. Install any available updates.  
3. Enable **"Automatically keep my Mac up to date"**  
4. Update apps via the **App Store** (Open App Store → Click **Updates**)  

---

## **2. Open the Terminal**
The Terminal is your command-line interface. Open it by pressing **Cmd + Space** and searching for **"Terminal"**.  

If you prefer, install [**iTerm2**](https://iterm2.com/) for a more feature-rich terminal.

---

## **3. Install Xcode Command Line Tools**
Xcode Command Line Tools are required for compiling packages, running Git, and using Homebrew.

### **Installation Steps:**

1. Run the following command in the terminal:

   ```bash
   xcode-select --install
   ```

2. A pop-up window should appear prompting you to install the tools. Click **"Install"** and follow the prompts.
3. Wait for the installation to complete (this may take a few minutes).
4. Verify the installation:

   ```bash
   xcode-select --version
   ```

5. Check if essential developer tools like `git` are available:

   ```bash
   git --version
   ```

If you don’t see a pop-up or the command hangs, you can manually install Xcode Command Line Tools from **System Settings** → **Software Update**.

---

## **4. Install Homebrew (Package Manager)**
Homebrew simplifies installing development tools.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

After installation, verify:

```bash
brew doctor
brew update
```

### **Add Homebrew to Your PATH**
Run these commands in your terminal to ensure Homebrew is accessible:

```bash
echo >> ~/.zprofile
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

> **Note:** Environment variables such as API keys should be stored in your `~/.zshrc` or a separate `.env` file for security. Avoid adding sensitive information directly to `~/.zprofile` or `~/.bash_profile`.

---

## **5. Install a Code Editor**
**Recommended:** [**Visual Studio Code (VSCode)**](https://code.visualstudio.com/)

To enable VSCode from the Terminal:

1. Open VSCode  
2. **Cmd + Shift + P** → Type **"Shell Command: Install 'code' command in PATH"**  

---

## **6. Set Up Git**
1. Install Git:

```bash
brew install git
```

2. Configure your identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

3. Authenticate GitHub with a **Personal Access Token (PAT)**:  
   - Follow GitHub's [guide](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

## **7. Install Node.js with NVM (Node Version Manager)**
**NVM** allows easy version switching.

1. Install NVM:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

2. Add NVM to your shell config (`~/.zshrc` or `~/.bashrc`):

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

3. Restart your terminal or run:

```bash
source ~/.zshrc
```

4. Verify installation:

```bash
nvm --version
```

5. Install and use the latest LTS version of Node.js:

```bash
nvm install --lts
nvm alias default lts
```

---

## **8. Install Python and Version Manager**
Since macOS ships with a system Python, it's best to use **pyenv** to manage versions.

1. Install `pyenv`:

```bash
brew install pyenv
```

2. Set up `pyenv` by adding this to your shell config (`~/.zshrc` or `~/.bashrc`):

```bash
export PYENV_ROOT="$HOME/.pyenv"
command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init --path)"
```

3. Restart your terminal or run:

```bash
source ~/.zshrc
```

4. Install the latest Python version:

```bash
pyenv install 3.12.2
pyenv global 3.12.2
```

5. Verify Python installation:

```bash
python --version
```

> **Note:** Store environment variables such as API keys in `~/.zshrc` or a `.env` file and use `export VAR_NAME=value` to set them. To load them automatically, add `source ~/.zshrc` at the end of your shell startup script.

---

## **9. Python Dependency Management: Choose Your Tool**
There are several options for managing Python dependencies. **Pick one:**

### **Option 1: Native Python venv (Simple, Built-in)**
For basic virtual environments:

```bash
python -m venv my_project
source my_project/bin/activate
pip install -U pip
```

### **Option 2: uv (Fast Alternative to Pip)**
[`uv`](https://github.com/astral-sh/uv) is a modern, faster replacement for pip.

```bash
brew install uv
uv venv create
uv pip install numpy pandas matplotlib
```