# Detailed Installation Guide

This guide provides comprehensive installation instructions for MindLens across different operating systems and development environments.

## 📋 Table of Contents

- [System Requirements](#system-requirements)
- [Platform-Specific Installation](#platform-specific-installation)
  - [Windows](#windows)
  - [macOS](#macos)
  - [Linux](#linux)
- [Development Environment Setup](#development-environment-setup)
- [Docker Setup](#docker-setup-alternative)
- [IDE Configuration](#ide-configuration)
- [Verification](#verification)

## System Requirements

### Minimum System Requirements

| Component | Requirement |
|-----------|-------------|
| **OS** | Windows 10 (1903+), macOS 10.15+, Ubuntu 18.04+ |
| **CPU** | 64-bit processor, 2+ cores |
| **RAM** | 4 GB (8 GB recommended) |
| **Storage** | 2 GB free space |
| **Network** | Internet connection for setup |

### Development Requirements

| Tool | Version | Purpose |
|------|---------|---------|
| **Node.js** | 18.x - 20.x | JavaScript runtime |
| **pnpm** | 8.x+ | Package manager |
| **Rust** | 1.77.2+ | Tauri backend |
| **Git** | 2.30+ | Version control |

## Platform-Specific Installation

### Windows

#### 1. Prerequisites Installation

**Option A: Using Package Managers (Recommended)**

```powershell
# Install Chocolatey (if not installed)
Set-ExecutionPolicy Bypass -Scope Process -Force
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# Install dependencies
choco install nodejs git rust-ms
```

**Option B: Manual Installation**

1. **Node.js**:
   - Download from [nodejs.org](https://nodejs.org/)
   - Install LTS version (18.x or 20.x)
   - Verify: `node --version` && `npm --version`

2. **Git**:
   - Download from [git-scm.com](https://git-scm.com/)
   - Use default settings during installation

3. **Rust**:
   - Download from [rustup.rs](https://rustup.rs/)
   - Run installer and follow instructions
   - Restart terminal after installation

4. **Visual Studio Build Tools**:
   ```powershell
   # Download and install Visual Studio Build Tools
   # From: https://visualstudio.microsoft.com/visual-cpp-build-tools/
   # Select "C++ build tools" workload
   ```

5. **WebView2** (usually pre-installed on Windows 11):
   - Download from [Microsoft Edge WebView2](https://developer.microsoft.com/en-us/microsoft-edge/webview2/)

#### 2. pnpm Installation

```powershell
# Install pnpm globally
npm install -g pnpm

# Verify installation
pnpm --version
```

#### 3. Windows-Specific Configuration

```powershell
# Enable long paths (run as Administrator)
New-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\FileSystem" -Name "LongPathsEnabled" -Value 1 -PropertyType DWORD -Force

# Set execution policy for PowerShell scripts
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### macOS

#### 1. Prerequisites Installation

**Option A: Using Homebrew (Recommended)**

```bash
# Install Homebrew (if not installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install dependencies
brew install node git rust
```

**Option B: Manual Installation**

1. **Xcode Command Line Tools**:
   ```bash
   xcode-select --install
   ```

2. **Node.js**:
   ```bash
   # Using nvm (recommended)
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   source ~/.bashrc
   nvm install 18
   nvm use 18
   ```

3. **Rust**:
   ```bash
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   source ~/.cargo/env
   ```

#### 2. pnpm Installation

```bash
# Install pnpm
npm install -g pnpm

# Or using Homebrew
brew install pnpm
```

### Linux

#### Ubuntu/Debian

```bash
# Update package list
sudo apt update

# Install system dependencies
sudo apt install -y \
  curl \
  wget \
  file \
  build-essential \
  libssl-dev \
  libgtk-3-dev \
  libwebkit2gtk-4.0-dev \
  libayatana-appindicator3-dev \
  librsvg2-dev \
  pkg-config

# Install Node.js (using NodeSource repository)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source ~/.cargo/env

# Install pnpm
npm install -g pnpm
```

#### Fedora/RHEL/CentOS

```bash
# Install system dependencies
sudo dnf groupinstall "Development Tools"
sudo dnf install -y \
  openssl-devel \
  gtk3-devel \
  webkit2gtk3-devel \
  libappindicator-gtk3-devel \
  librsvg2-devel \
  pkg-config

# Install Node.js
sudo dnf install -y nodejs npm

# Install Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source ~/.cargo/env

# Install pnpm
npm install -g pnpm
```

#### Arch Linux

```bash
# Install dependencies
sudo pacman -S --needed \
  base-devel \
  curl \
  wget \
  file \
  openssl \
  gtk3 \
  webkit2gtk \
  libappindicator-gtk3 \
  librsvg \
  nodejs \
  npm

# Install Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source ~/.cargo/env

# Install pnpm
npm install -g pnpm
```

## Development Environment Setup

### 1. Clone and Setup Project

```bash
# Clone repository
git clone https://github.com/your-repo/mindlens.git
cd mindlens

# Install dependencies
pnpm install

# Verify installation
pnpm --version
node --version
cargo --version
```

### 2. Environment Configuration

```bash
# Copy environment template (if exists)
cp .env.example .env

# Edit configuration
# nano .env  # or your preferred editor
```

### 3. First Build Test

```bash
# Test frontend build
pnpm --filter frontend build

# Test desktop build (this will take longer on first run)
pnpm --filter @mindlens/desktop build
```

## Docker Setup (Alternative)

For developers who prefer containerized development:

### Prerequisites
- Docker Desktop or Docker Engine
- Docker Compose

### Setup

```bash
# Clone repository
git clone https://github.com/your-repo/mindlens.git
cd mindlens

# Build development container
docker-compose -f docker-compose.dev.yml build

# Start development environment
docker-compose -f docker-compose.dev.yml up -d

# Access the application
# Frontend: http://localhost:5173
# Desktop: Use VNC or X11 forwarding
```

### Docker Configuration

Create `docker-compose.dev.yml`:

```yaml
version: '3.8'
services:
  mindlens-dev:
    build:
      context: .
      dockerfile: Dockerfile.dev
    volumes:
      - .:/workspace
      - /tmp/.X11-unix:/tmp/.X11-unix:rw
    environment:
      - DISPLAY=${DISPLAY}
    ports:
      - "5173:5173"
      - "3000:3000"
    working_dir: /workspace
```

## IDE Configuration

### Visual Studio Code (Recommended)

#### 1. Install Extensions

```bash
# Essential extensions
code --install-extension rust-lang.rust-analyzer
code --install-extension tauri-apps.tauri-vscode
code --install-extension bradlc.vscode-tailwindcss
code --install-extension esbenp.prettier-vscode
code --install-extension ms-vscode.vscode-eslint
```

#### 2. Workspace Settings

Create `.vscode/settings.json`:

```json
{
  "rust-analyzer.checkOnSave.command": "clippy",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "files.associations": {
    "*.conf.json": "json"
  }
}
```

#### 3. Launch Configuration

Create `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Tauri",
      "type": "node",
      "request": "launch",
      "cwd": "${workspaceFolder}/apps/desktop",
      "program": "${workspaceFolder}/apps/desktop/node_modules/.bin/tauri",
      "args": ["dev"]
    }
  ]
}
```

### Other IDEs

#### JetBrains IDEs (WebStorm, IntelliJ)
- Install Rust plugin
- Install Tauri plugin (if available)
- Configure Node.js interpreter
- Set up Prettier and ESLint

#### Vim/Neovim
- Install rust.vim
- Configure LSP with rust-analyzer
- Set up TypeScript support

## Verification

### System Verification

```bash
# Check all required tools
echo "Node.js: $(node --version)"
echo "pnpm: $(pnpm --version)"
echo "Rust: $(rustc --version)"
echo "Cargo: $(cargo --version)"
echo "Git: $(git --version)"

# Check platform-specific requirements
# Windows: Check WebView2
# macOS: Check Xcode tools
# Linux: Check system libraries
```

### Project Verification

```bash
# Navigate to project directory
cd mindlens

# Install dependencies
pnpm install

# Run development build
pnpm dev:desktop

# In another terminal, test frontend only
pnpm dev
```

### Expected Results

- ✅ Desktop application launches successfully
- ✅ Frontend accessible at `http://localhost:5173`
- ✅ Hot reload works when editing files
- ✅ No compilation errors in terminal
- ✅ Browser console shows no critical errors

## Troubleshooting Installation

### Common Issues and Solutions

#### "Permission denied" errors
```bash
# Linux/macOS: Fix npm permissions
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

#### "Command not found" after installation
```bash
# Reload shell environment
# Bash/Zsh
source ~/.bashrc  # or ~/.zshrc

# Windows PowerShell
refreshenv

# Or restart your terminal
```

#### Rust compilation errors on Windows
```powershell
# Install missing Windows SDK components
# Download from: https://developer.microsoft.com/en-us/windows/downloads/windows-sdk/

# Or install Visual Studio Community with C++ workload
```

#### WebView2 issues on Windows
```powershell
# Download and install WebView2 Runtime
# From: https://developer.microsoft.com/en-us/microsoft-edge/webview2/

# Check if installed
Get-ItemProperty HKLM:\SOFTWARE\WOW6432Node\Microsoft\EdgeUpdate\Clients\{F3017226-FE2A-4295-8BDF-00C3A9A7E4C5}
```

#### Linux dependency issues
```bash
# Ubuntu/Debian: Install missing dependencies
sudo apt-get install -y libwebkit2gtk-4.0-dev build-essential

# If still failing, check specific error and install missing packages
sudo apt-cache search webkit2gtk
```

### Getting Help

If you encounter issues not covered here:

1. Check [GitHub Issues](https://github.com/your-repo/mindlens/issues)
2. Search existing solutions
3. Create a new issue with:
   - Operating system and version
   - Node.js, Rust, and pnpm versions
   - Complete error message
   - Steps to reproduce

---

**Installation complete! 🎉**

Next steps:
- Read the [main README](README.md) for usage instructions
- Check out the [development guide](docs/CONTRIBUTING.md)
- Join our [community discussions](https://github.com/your-repo/mindlens/discussions)
