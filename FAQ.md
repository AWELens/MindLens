# MindLens Installation FAQ

Common questions and solutions for installing and running MindLens.

## 🔧 Installation Issues

### Q: "pnpm: command not found" after installing Node.js

**A: Install pnpm globally**
```bash
npm install -g pnpm

# Verify installation
pnpm --version
```

If still not working:
- Restart your terminal
- Check if npm works: `npm --version`
- Try alternative installation: `curl -fsSL https://get.pnpm.io/install.sh | sh -`

### Q: "rustc: command not found" after installing Rust

**A: Reload your shell environment**
```bash
# Linux/macOS
source ~/.cargo/env

# Windows PowerShell
$env:PATH += ";$env:USERPROFILE\.cargo\bin"

# Or restart your terminal completely
```

### Q: Installation fails with permission errors

**A: Platform-specific solutions**

**Linux/macOS:**
```bash
# Fix npm permissions
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

**Windows:**
```powershell
# Run PowerShell as Administrator, then:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine
```

### Q: "failed to get 'tauri' as a dependency of package" error

**A: Update Rust and Tauri CLI**
```bash
# Update Rust
rustup update

# Clear Cargo cache
cargo clean

# Reinstall dependencies
pnpm clean
pnpm install
```

## 🖥️ Platform-Specific Issues

### Windows

**Q: "MSVC build tools not found"**

**A: Install Visual Studio Build Tools**
1. Download [Visual Studio Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/)
2. Install with "C++ build tools" workload
3. Restart terminal and try again

**Q: "WebView2 not found"**

**A: Install WebView2 Runtime**
1. Download from [Microsoft Edge WebView2](https://developer.microsoft.com/en-us/microsoft-edge/webview2/)
2. Install the runtime
3. Restart your application

**Q: PowerShell execution policy errors**

**A: Update execution policy**
```powershell
# Run as Administrator
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine

# Or for current user only
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### macOS

**Q: "xcode-select: error: invalid developer directory"**

**A: Install/update Xcode Command Line Tools**
```bash
# Remove old installation
sudo rm -rf /Library/Developer/CommandLineTools

# Install fresh copy
xcode-select --install

# Accept license
sudo xcodebuild -license accept
```

**Q: "permission denied" when installing global packages**

**A: Use a Node version manager**
```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart terminal, then:
nvm install 18
nvm use 18
npm install -g pnpm
```

### Linux

**Q: "webkit2gtk-4.0 not found"**

**A: Install system dependencies**
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install -y libwebkit2gtk-4.0-dev build-essential

# Fedora
sudo dnf install webkit2gtk3-devel

# Arch Linux
sudo pacman -S webkit2gtk
```

**Q: "failed to run custom build command for 'openssl-sys'"**

**A: Install OpenSSL development package**
```bash
# Ubuntu/Debian
sudo apt install -y libssl-dev pkg-config

# Fedora
sudo dnf install openssl-devel pkg-config

# Arch Linux
sudo pacman -S openssl pkg-config
```

## 🚀 Runtime Issues

### Q: Application starts but shows blank/white screen

**A: Check browser compatibility and clear cache**
1. Open browser developer tools (F12)
2. Check for JavaScript errors in console
3. Clear browser cache and cookies
4. Try different browser or incognito mode
5. Restart the development server

### Q: "Port 5173 is already in use"

**A: Free the port or use a different one**
```bash
# Kill process using port 5173
npx kill-port 5173

# Or use a different port
PORT=3000 pnpm dev

# Find what's using the port (Linux/macOS)
lsof -ti:5173

# Find what's using the port (Windows)
netstat -ano | findstr :5173
```

### Q: Hot reload not working

**A: Troubleshoot development server**
1. Check terminal for errors
2. Restart development server: `Ctrl+C` then `pnpm dev:desktop`
3. Clear browser cache
4. Check if files are being watched:
   ```bash
   # Check if file watcher limits are reached (Linux)
   cat /proc/sys/fs/inotify/max_user_watches
   
   # Increase limit if needed
   echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
   sudo sysctl -p
   ```

### Q: Tauri app builds but won't start

**A: Debug the Tauri application**
```bash
# Enable debug logging
RUST_LOG=debug pnpm dev:desktop

# Check for missing system dependencies
# Windows: Ensure WebView2 is installed
# Linux: Check webkit2gtk installation
# macOS: Verify Xcode tools are properly installed
```

## 📦 Dependency Issues

### Q: "Package not found" or dependency resolution errors

**A: Clean and reinstall**
```bash
# Clear all caches
pnpm clean
rm -rf node_modules
rm pnpm-lock.yaml

# Clear npm cache
npm cache clean --force

# Clear Cargo cache
cargo clean

# Reinstall everything
pnpm install
```

### Q: Version conflicts between packages

**A: Update and resolve conflicts**
```bash
# Update all dependencies
pnpm update

# Check for outdated packages
pnpm outdated

# Force resolution (if needed)
pnpm install --force
```

### Q: "Cannot find module" errors in TypeScript

**A: Fix TypeScript configuration**
1. Check `tsconfig.json` paths are correct
2. Restart TypeScript server in VS Code: `Ctrl+Shift+P` → "TypeScript: Restart TS Server"
3. Clear TypeScript cache:
   ```bash
   # Remove TypeScript build cache
   rm -rf apps/frontend/.tsbuildinfo
   rm -rf apps/frontend/dist
   ```

## 🧰 Development Environment

### Q: VS Code extensions not working properly

**A: Reinstall and configure extensions**
1. Disable all extensions
2. Restart VS Code
3. Install essential extensions one by one:
   ```bash
   code --install-extension rust-lang.rust-analyzer
   code --install-extension tauri-apps.tauri-vscode
   code --install-extension esbenp.prettier-vscode
   ```
4. Restart VS Code again

### Q: Rust Analyzer not finding Rust installation

**A: Configure Rust Analyzer**
1. Open VS Code settings (`Ctrl+,`)
2. Search for "rust-analyzer"
3. Set "Rust-analyzer: Server Path" to your Rust installation:
   - Windows: `C:\Users\{username}\.cargo\bin\rust-analyzer.exe`
   - Linux/macOS: `~/.cargo/bin/rust-analyzer`

### Q: Git hooks or pre-commit scripts failing

**A: Set up Git hooks properly**
```bash
# Make sure Git hooks are executable
chmod +x .git/hooks/*

# Install Git hooks (if using husky or similar)
npx husky install

# Verify Git configuration
git config --list
```

## 🔍 Debugging Tips

### Enable Verbose Logging

```bash
# Enable all debug output
DEBUG=* RUST_LOG=debug pnpm dev:desktop

# Enable only specific components
RUST_LOG=tauri=debug pnpm dev:desktop
DEBUG=vite:* pnpm dev
```

### Check System Information

```bash
# Verify all tools are installed correctly
echo "Node.js: $(node --version)"
echo "pnpm: $(pnpm --version)"
echo "Rust: $(rustc --version)"
echo "Cargo: $(cargo --version)"
echo "Git: $(git --version)"

# Check system resources
# Linux/macOS
free -h
df -h

# Windows
Get-ComputerInfo | Select TotalPhysicalMemory
Get-PSDrive -PSProvider FileSystem
```

### Common Log Locations

- **Frontend errors**: Browser Developer Console (F12)
- **Tauri logs**: Terminal output where you ran `pnpm dev:desktop`
- **Build errors**: Terminal output during build process
- **System logs**:
  - Windows: Event Viewer
  - macOS: Console.app or `log show`
  - Linux: `journalctl` or `/var/log/`

## 🆘 Getting Help

If your issue isn't covered here:

1. **Search existing issues**: [GitHub Issues](https://github.com/your-repo/mindlens/issues)
2. **Check discussions**: [GitHub Discussions](https://github.com/your-repo/mindlens/discussions)
3. **Create a new issue** with:
   - Operating system and version
   - Node.js, pnpm, and Rust versions
   - Complete error message
   - Steps to reproduce
   - What you've already tried

## 📚 Additional Resources

- [Main README](README.md) - Project overview
- [Installation Guide](INSTALLATION.md) - Detailed setup instructions
- [Quick Start Guide](QUICKSTART.md) - Get running fast
- [Architecture Documentation](docs/ARCHITECTURE.md) - Technical details
- [Contributing Guide](docs/CONTRIBUTING.md) - Development guidelines

---

**Still stuck?** Don't hesitate to [ask for help](https://github.com/your-repo/mindlens/discussions/new)! 🤝
