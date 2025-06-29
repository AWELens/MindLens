# MindLens

**MindLens** is an interactive environment for designing and visualizing application architecture, allowing seamless switching between abstraction layers, from business logic to code implementation. Our goal is to connect the architect's thought process with the developer's code, enabling smooth integration between various abstraction levels and real-world implementation.

🔮 **Mission**: To make software design and development more transparent, interactive, and flexible. We aim to help architects, developers, and designers synchronize their actions based on shared principles and visual models.

## 🚀 Motto
_"Architecture in your hands. Code you can see. Thoughts you design."_

## 📋 Table of Contents

- [Quick Start](#-quick-start)
- [Installation](#-installation)
- [System Requirements](#-system-requirements)
- [Running the Application](#-running-the-application)
- [Development Setup](#-development-setup)
- [Architecture](#-what-is-mindlens)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [Documentation](#-documentation)

## ⚡ Quick Start

**New to MindLens?** Start here: **[📖 Quick Start Guide](QUICKSTART.md)**

For detailed installation instructions: **[🔧 Installation Guide](INSTALLATION.md)**

### 30-Second Setup

```bash
# Prerequisites: Node.js 18+, pnpm, Rust 1.77.2+
git clone https://github.com/your-repo/mindlens.git
cd mindlens
pnpm install
pnpm dev:desktop
```

### First-Time Setup

1. **Check requirements**: Node.js 18+, pnpm, Rust 1.77.2+
2. **Clone**: `git clone https://github.com/your-repo/mindlens.git`
3. **Install**: `cd mindlens && pnpm install`
4. **Run**: `pnpm dev:desktop`

**Need detailed instructions?** See our comprehensive [Installation Guide](INSTALLATION.md).

## 💻 System Requirements

### Minimum Requirements
- **Operating System**: Windows 10+, macOS 10.15+, or Linux (Ubuntu 18.04+)
- **Memory**: 4 GB RAM
- **Storage**: 2 GB free space
- **Internet**: Required for initial setup and package downloads

### Development Requirements
- **Node.js**: 18.x or higher
- **pnpm**: 8.x or higher
- **Rust**: 1.77.2 or higher
- **Git**: Latest stable version

## ⚡ Quick Start

## ⚡ Quick Start

**New to MindLens?** Start here: **[📖 Quick Start Guide](QUICKSTART.md)**

For detailed installation instructions: **[🔧 Installation Guide](INSTALLATION.md)**

### 30-Second Setup

```bash
# Prerequisites: Node.js 18+, pnpm, Rust 1.77.2+
git clone https://github.com/your-repo/mindlens.git
cd mindlens
pnpm install
pnpm dev:desktop
```

### First-Time Setup

1. **Check requirements**: Node.js 18+, pnpm, Rust 1.77.2+
2. **Clone**: `git clone https://github.com/your-repo/mindlens.git`
3. **Install**: `cd mindlens && pnpm install`
4. **Run**: `pnpm dev:desktop`

**Need detailed instructions?** See our comprehensive [Installation Guide](INSTALLATION.md).

## 📦 Installation

### Quick Install

For most users, these steps will get you running:

1. **Install prerequisites**:
   - **Node.js 18+**: [Download here](https://nodejs.org/)
   - **Rust 1.77.2+**: [Install via rustup](https://rustup.rs/)
   - **pnpm**: `npm install -g pnpm`

2. **Clone and setup**:
   ```bash
   git clone https://github.com/your-repo/mindlens.git
   cd mindlens
   pnpm install
   ```

3. **Start developing**:
   ```bash
   pnpm dev:desktop  # Desktop app
   # or
   pnpm dev          # Web app only
   ```

### Platform-Specific Installation

| Platform | Guide |
|----------|-------|
| 🪟 **Windows** | [Windows Setup Guide](INSTALLATION.md#windows) |
| 🍎 **macOS** | [macOS Setup Guide](INSTALLATION.md#macos) |
| 🐧 **Linux** | [Linux Setup Guide](INSTALLATION.md#linux) |

**Need help?** See the complete [Installation Guide](INSTALLATION.md) with troubleshooting.

## 💻 System Requirements

### Minimum Requirements
- **OS**: Windows 10+, macOS 10.15+, Ubuntu 18.04+
- **RAM**: 4 GB (8 GB recommended)
- **Storage**: 2 GB free space
- **Network**: Internet connection for setup

### Development Requirements
- **Node.js**: 18.x - 20.x
- **pnpm**: 8.x+
- **Rust**: 1.77.2+
- **Git**: 2.30+

**Detailed requirements**: [Installation Guide](INSTALLATION.md#system-requirements)

## 🚀 Running the Application

### Development Mode

| Command | Description | Use Case |
|---------|-------------|----------|
| `pnpm dev:desktop` | Desktop app with hot reload | **Recommended** for full development |
| `pnpm dev` | Web frontend only | UI/styling work |
| `pnpm dev:watch` | Desktop + Tauri devtools | Advanced debugging |

### Production Build

```bash
# Build desktop application
pnpm build:desktop

# Build web application  
pnpm build
```

### VS Code Integration

Use built-in tasks (Ctrl+Shift+P → "Tasks: Run Task"):
- 🚀 **Tauri Dev (Hot Reload)** - Start desktop development
- 🌐 **Frontend Dev Server** - Start web development  
- 🧹 **Clean Build Cache** - Clean build artifacts

**More details**: [Quick Start Guide](QUICKSTART.md#development-workflow)

## 🛠 Development Setup

### Project Structure

```
mindlens/
├── apps/
│   ├── frontend/         # React + TypeScript (UI)
│   └── desktop/          # Tauri + Rust (Desktop app)
├── core/                 # Business logic
├── plugins/              # IDE integrations
├── docs/                 # Documentation
└── README.md            # You are here
```

### Development Workflow

1. **Start development**: `pnpm dev:desktop`
2. **Edit files**: Changes auto-reload
3. **Build**: `pnpm build:desktop`
4. **Test**: `pnpm test` (when implemented)

**Detailed workflow**: [Quick Start Guide](QUICKSTART.md#development-workflow)

## 🔧 Troubleshooting

### Quick Fixes

| Problem | Solution |
|---------|----------|
| **App won't start** | `pnpm clean && pnpm install` |
| **Build errors** | Check [System Requirements](#-system-requirements) |
| **Port in use** | `npx kill-port 5173` |
| **Hot reload broken** | Restart dev server |

### Common Issues

- **"Command not found"**: Restart terminal after installing tools
- **Permission errors**: See [Installation Guide](INSTALLATION.md#troubleshooting-installation)
- **Rust compilation fails**: Install platform build tools
- **WebView2 missing** (Windows): Download from Microsoft

**Detailed troubleshooting**: [Installation Guide](INSTALLATION.md#troubleshooting-installation)

**Common questions**: [Installation FAQ](FAQ.md)

**Still stuck?** [Create an issue](https://github.com/your-repo/mindlens/issues/new) with:
- OS and version
- Error message
- Steps to reproduce

## 📖 What is MindLens?

**MindLens** provides a unique tool for designing systems with the ability to move between abstraction levels, from conceptual diagrams to final code implementation. We offer:

- **Interactive Layers**: Switch between abstraction layers (from business logic to bytes)
- **IDE Integration**: Synchronization with code via plugins for popular IDEs
- **Models and Dependencies**: Visualize data flows, components, and dependencies
- **Code Generation**: Automatically generate templates, interfaces, and tests based on architecture
- **Live Updates**: Automatically update all layers when changes occur at any level

### Core Technologies

- **Frontend**: React 19 + TypeScript + Vite
- **Desktop**: Tauri 2.x (Rust + WebView)
- **Build System**: pnpm workspaces
- **Development**: Hot reload, ESLint, Prettier

## 🔄 How it Works

1. **Models**: The system starts with a semantic model of architecture, which includes entities, relationships, and layers
2. **Visualization**: Models are transformed into interactive graphs and diagrams
3. **Generation**: Based on the architecture, templates, interfaces, tests, and documentation are generated
4. **Implementation**: The application syncs with the actual code and updates in real-time

## 🗺️ Roadmap

### Current Status: Early Development 🚧

| Phase | Status | Timeline | Key Features |
|-------|--------|----------|--------------|
| **Phase 1** | 🟡 In Progress | Q2 2025 | Project structure, basic visualization, VSCode plugin |
| **Phase 2** | ⚪ Planned | Q3 2025 | Code generation, dependency analysis, CI/CD integration |
| **Phase 3** | ⚪ Planned | Q4 2025 | Testing, documentation, multi-IDE support |
| **Phase 4** | ⚪ Future | 2026+ | Scaling, cloud services, cross-platform |

### Phase 1: Foundation (Current)
- ✅ Project Structure & Workspace Setup
- ✅ Tauri + React Integration  
- ✅ Development Environment
- � Core Entities and Relationships
- � Basic Visualization (Flow Diagrams)
- ⏳ Interactive Abstraction Layers
- ⏳ VSCode Plugin/CLI Interface

### Phase 2: Core Features
- 🛠️ Code Generation (TypeScript, Java, Python)
- 📊 Static Dependency Analysis
- 💻 CI/CD Pipeline Integration
- 🚀 Multi-layer Architecture Support
- 🎛️ Reactive "Live Updates" System

### Phase 3: Polish & Expansion
- 📝 Comprehensive Documentation
- 🧪 Real Project Testing
- 🖥️ Additional IDE Plugins
- 🎨 Advanced Visualization (3D, Animations)
- 🌐 Web Services Integration

### Phase 4: Enterprise & Scale
- 🌍 Large-Scale Project Support
- 📈 Performance Optimization
- 🌐 Cloud Synchronization Services
- 📲 Mobile Support
- 🛡️ Enterprise Features

## 📜 License

This project is licensed under the GNU Affero General Public License v3.0 (AGPL-3.0) for open source use. For commercial use and proprietary applications, a commercial license is available. See [LICENSE.md](LICENSE.md) for the full AGPL license text and [docs/LICENSES/COMMERCIAL.md](docs/LICENSES/COMMERCIAL.md) for commercial licensing options.

---

## 👨‍💻 Contributing

We welcome contributions from anyone interested in improving MindLens! 

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/your-feature-name`
3. **Make your changes** and test them
4. **Run linting**: `pnpm lint` (in frontend directory)
5. **Commit your changes**: `git commit -m "Add your feature"`
6. **Push to your fork**: `git push origin feature/your-feature-name`
7. **Create a Pull Request**

### Code Style

- **Frontend**: ESLint + Prettier configuration
- **Rust**: Follow standard Rust conventions with `cargo fmt`
- **Commits**: Use conventional commit messages

For detailed contributing guidelines, see [CONTRIBUTING.md](docs/CONTRIBUTING.md).

## 📚 Documentation

### Getting Started
- **[📖 Quick Start Guide](QUICKSTART.md)** - Get running in 5 minutes
- **[🔧 Installation Guide](INSTALLATION.md)** - Detailed setup for all platforms
- **[❓ Installation FAQ](FAQ.md)** - Common issues and solutions

### Development
- [Architecture Overview](docs/ARCHITECTURE.md) - System design and structure
- [Contributing Guidelines](docs/CONTRIBUTING.md) - How to contribute
- [Development Best Practices](docs/DEVELOPMENT.md) - Coding standards
- [File Headers](docs/FILE_HEADERS.md) - Code organization

### Reference
- [API Documentation](docs/API.md) - Technical reference
- [FAQ for Developers](docs/FAQ/developers.md) - Development questions
- [Comparison with Other Tools](docs/comparisons/mindlens-vs-others.md) - Feature comparison

## 🛠️ Tech Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Frontend** | React 19 + TypeScript | Interactive user interface |
| **Desktop** | Tauri 2.x + Rust | Cross-platform desktop application |
| **Build** | Vite + pnpm | Fast development and building |
| **Visualization** | React Flow, Three.js (planned) | Interactive diagrams and 3D views |
| **Code Generation** | Templates + AST parsers | Automatic code generation |
| **Plugins** | VSCode API | IDE integration |

## � License

This project is dual-licensed:

- **Open Source**: GNU Affero General Public License v3.0 (AGPL-3.0) - see [LICENSE.md](LICENSE.md)
- **Commercial**: Commercial license available for proprietary use - see [docs/LICENSES/COMMERCIAL.md](docs/LICENSES/COMMERCIAL.md)

### License Summary

- ✅ **Open source projects**: Free to use under AGPL-3.0
- ✅ **Personal use**: Free for personal projects
- ⚠️ **Commercial use**: Requires commercial license for closed-source products
- ⚠️ **SaaS/Web services**: AGPL-3.0 requires source code disclosure

## 🤝 Community & Support

- **Issues**: [GitHub Issues](https://github.com/your-repo/mindlens/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-repo/mindlens/discussions)
- **Documentation**: [docs/](docs/)
- **Email**: support@mindlens.dev

## 📊 Project Status

- 🚧 **Status**: Early Development
- 📅 **Latest Release**: v0.1.0
- 🎯 **Next Milestone**: Basic visualization and code generation
- 🔄 **Development Activity**: Active

---

**Made with ❤️ by the MindLens team**
