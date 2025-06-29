# Quick Start Guide

Get MindLens up and running in 5 minutes! This guide covers the essentials for developers who want to start working with MindLens immediately.

## ⚡ 30-Second Setup

```bash
# Prerequisites: Node.js 18+, pnpm, Rust 1.77.2+
git clone https://github.com/your-repo/mindlens.git
cd mindlens
pnpm install
pnpm dev:desktop
```

## 🚀 Step-by-Step Quick Start

### 1. Check Prerequisites

```bash
node --version    # Should be 18.x or higher
pnpm --version    # Should be 8.x or higher  
rustc --version   # Should be 1.77.2 or higher
```

**Missing tools?** See [detailed installation guide](INSTALLATION.md).

### 2. Clone and Install

```bash
# Clone repository
git clone https://github.com/your-repo/mindlens.git
cd mindlens

# Install all dependencies (this may take a few minutes)
pnpm install
```

### 3. Start Development

Choose your preferred development mode:

**Desktop Application (Recommended)**:
```bash
pnpm dev:desktop
```
- Launches Tauri desktop app with hot reload
- Best for full feature development
- Auto-reloads on code changes

**Web Frontend Only**:
```bash
pnpm dev
```
- Launches at `http://localhost:5173`
- Faster startup for UI-only development
- Good for styling and component work

**Advanced Development**:
```bash
pnpm dev:watch
```
- Desktop app with Tauri devtools
- Additional debugging capabilities

## 🎯 Development Workflow

### Typical Development Session

1. **Start the application**:
   ```bash
   pnpm dev:desktop
   ```

2. **Make changes** to files in:
   - `apps/frontend/src/` - React components and UI
   - `apps/desktop/src/` - Rust backend and Tauri commands

3. **See changes instantly** - hot reload is enabled

4. **Build for production**:
   ```bash
   pnpm build:desktop
   ```

### Available Commands

| Command | Purpose | When to Use |
|---------|---------|-------------|
| `pnpm dev` | Web frontend only | UI development, styling |
| `pnpm dev:desktop` | Desktop app with hot reload | Full-stack development |
| `pnpm dev:watch` | Desktop + devtools | Debugging, advanced development |
| `pnpm build` | Build web app | Deploy web version |
| `pnpm build:desktop` | Build desktop app | Create distribution |
| `pnpm clean` | Clean build cache | Fix build issues |

## 🗂️ Project Structure Overview

```
mindlens/
├── apps/
│   ├── frontend/         # React + TypeScript + Vite
│   │   ├── src/
│   │   │   ├── App.tsx          # Main app component
│   │   │   ├── main.tsx         # Entry point
│   │   │   ├── screens/         # Application screens
│   │   │   ├── shared/          # Shared components
│   │   │   └── lib/             # Utilities and helpers
│   │   ├── package.json
│   │   └── vite.config.ts
│   └── desktop/          # Tauri + Rust
│       ├── src/
│       │   ├── main.rs          # Rust entry point
│       │   ├── lib.rs           # Library exports
│       │   └── commands/        # Tauri commands
│       ├── Cargo.toml
│       └── tauri.*.json         # Tauri configuration
├── package.json          # Workspace configuration
└── pnpm-workspace.yaml   # pnpm workspace setup
```

## 🛠️ Common Development Tasks

### Adding a New Frontend Component

1. Create component file:
   ```bash
   # apps/frontend/src/components/MyComponent.tsx
   ```

2. Export from index:
   ```typescript
   // apps/frontend/src/components/index.ts
   export { MyComponent } from './MyComponent';
   ```

3. Use in your app:
   ```typescript
   // apps/frontend/src/App.tsx
   import { MyComponent } from './components';
   ```

### Adding a New Tauri Command

1. Define command in Rust:
   ```rust
   // apps/desktop/src/commands/my_commands.rs
   #[tauri::command]
   pub fn my_command(input: String) -> String {
       format!("Hello, {}", input)
   }
   ```

2. Register command:
   ```rust
   // apps/desktop/src/lib.rs
   mod commands;
   use commands::my_commands::my_command;

   #[cfg_attr(mobile, tauri::mobile_entry_point)]
   pub fn run() {
       tauri::Builder::default()
           .invoke_handler(tauri::generate_handler![my_command])
           .run(tauri::generate_context!())
           .expect("error while running tauri application");
   }
   ```

3. Use from frontend:
   ```typescript
   // apps/frontend/src/App.tsx
   import { invoke } from '@tauri-apps/api/tauri';

   const result = await invoke('my_command', { input: 'World' });
   ```

### Working with Styles

MindLens uses CSS modules and modern CSS:

```typescript
// Component.module.css
.container {
  display: flex;
  padding: 1rem;
}

// Component.tsx
import styles from './Component.module.css';

export const Component = () => (
  <div className={styles.container}>
    Content here
  </div>
);
```

## 🔧 IDE Setup (Quick)

### VS Code (Recommended)

Install essential extensions:
```bash
code --install-extension rust-lang.rust-analyzer
code --install-extension tauri-apps.tauri-vscode
code --install-extension esbenp.prettier-vscode
code --install-extension ms-vscode.vscode-eslint
```

Use VS Code tasks:
- `Ctrl+Shift+P` → "Tasks: Run Task"
- Select "🚀 Tauri Dev (Hot Reload)"

### Other Editors

- **WebStorm**: Install Rust plugin
- **Vim/Neovim**: Configure rust-analyzer LSP
- **Emacs**: Use rust-mode with LSP

## 🐛 Quick Troubleshooting

### App won't start?

```bash
# Clean and reinstall
pnpm clean
rm -rf node_modules
pnpm install
```

### Build errors?

```bash
# Check Rust installation
rustc --version
cargo --version

# Update Rust if needed
rustup update
```

### Port already in use?

```bash
# Kill process on port 5173
npx kill-port 5173

# Or use different port
PORT=3000 pnpm dev
```

### Hot reload not working?

1. Check terminal for errors
2. Restart development server
3. Clear browser cache
4. Try different browser

## 📖 Next Steps

Once you have MindLens running:

1. **Explore the codebase**:
   - Check `apps/frontend/src/App.tsx` for main UI
   - Look at `apps/desktop/src/commands/` for backend functionality

2. **Read documentation**:
   - [Architecture Guide](docs/ARCHITECTURE.md)
   - [Contributing Guidelines](docs/CONTRIBUTING.md)
   - [Development Best Practices](docs/DEVELOPMENT.md)

3. **Join the community**:
   - [GitHub Discussions](https://github.com/your-repo/mindlens/discussions)
   - [Issue Tracker](https://github.com/your-repo/mindlens/issues)

4. **Make your first change**:
   - Try modifying the welcome text in `App.tsx`
   - Add a new button or component
   - Create a simple Tauri command

## 🎉 You're Ready!

You now have a fully functional MindLens development environment. 

Happy coding! 🚀

---

**Need help?** Check the [detailed installation guide](INSTALLATION.md) or [create an issue](https://github.com/your-repo/mindlens/issues/new).
