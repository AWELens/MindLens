# MINDLENS Platform Components

This directory contains platform-specific code and environment configurations for MINDLENS.

## Directory Structure

### Environment (`env/`)
Environment-specific configurations:
- Development environment setup
- Production deployment configurations
- Testing environment configurations
- CI/CD pipeline definitions

### Runtime (`runtime/`)
Platform-specific runtime components:
- Native modules and bindings
- Platform APIs and integrations
- OS-specific optimizations
- Hardware acceleration components

## Platform Support

MINDLENS aims to support multiple platforms with native performance and user experience:

| Platform | Status | Phase | Notes |
|----------|--------|-------|-------|
| **Windows** | 🚧 Primary Development | 1 | Via Tauri + React |
| **macOS** | 📋 Planned | 1 | Via Tauri + React |
| **Linux** | 📋 Planned | 1 | Via Tauri + React |
| **Web** | 📋 Planned | 2 | Progressive Web App |
| **iOS** | 📋 Future | 3 | React Native |
| **Android** | 📋 Future | 3 | React Native |

## Architecture Overview

```
┌─────────────────────────────────────────────────┐
│                UI Layer (React)                  │
├─────────────────────────────────────────────────┤
│            Tauri/Electron Bridge                │
├─────────────────────────────────────────────────┤
│              Platform Abstraction               │
├─────────────────────────────────────────────────┤
│    Windows    │    macOS     │     Linux        │
│   (Win32)     │   (Cocoa)    │   (GTK/Qt)       │
└─────────────────────────────────────────────────┘
```

## Environment Configuration

### Development Environment
Located in `env/development/`:
- Local development server configuration
- Debug flags and logging levels
- Development database connections
- Hot reload settings

### Production Environment
Located in `env/production/`:
- Optimized build configurations
- Production database connections
- Security settings
- Performance monitoring

### Testing Environment
Located in `env/testing/`:
- Test database configuration
- Mock service definitions
- CI/CD environment variables
- Automated testing settings

## Runtime Components

### Native Modules
Platform-specific native code for:
- File system operations
- System integration
- Performance-critical algorithms
- Hardware access

### Platform APIs
Abstractions for platform-specific features:
- Window management
- System notifications
- Clipboard operations
- File associations

### Performance Optimizations
Platform-specific optimizations:
- Memory management
- Threading strategies
- GPU acceleration
- Network optimizations

## Development Setup

### Prerequisites by Platform

**Windows:**
- Visual Studio Build Tools
- Windows SDK
- Rust toolchain (msvc)
- Node.js 18+

**macOS:**
- Xcode Command Line Tools
- Rust toolchain
- Node.js 18+

**Linux:**
- GCC/Clang
- GTK development libraries
- Rust toolchain
- Node.js 18+

### Environment Setup
```bash
# Clone and setup
git clone https://github.com/mindlens/mindlens.git
cd mindlens

# Install platform dependencies
pnpm run setup:platform

# Configure environment
pnpm run env:setup

# Start development
pnpm dev
```

## Platform-Specific Features

### Windows
- Windows Shell integration
- Windows Store packaging
- Windows Update integration
- Windows Security features

### macOS
- macOS app bundle creation
- Mac App Store compliance
- macOS system integration
- Apple Silicon optimization

### Linux
- Package manager integration (.deb, .rpm, .AppImage)
- Desktop environment integration
- Linux distribution compatibility
- Flatpak/Snap packaging

## Deployment

### Desktop Applications
Built using Tauri for cross-platform compatibility:
- Single binary distribution
- Auto-update capabilities
- Code signing and notarization
- Package manager integration

### Build Process
```bash
# Build for current platform
pnpm build

# Build for all platforms (CI/CD)
pnpm build:all-platforms

# Create installer packages
pnpm package
```

### Distribution Channels
- Direct download from website
- Platform-specific app stores
- Package managers (winget, homebrew, apt, etc.)
- Enterprise deployment tools

## Configuration Management

### Platform Configuration
Each platform can have specific configurations:
```typescript
interface PlatformConfig {
  platform: 'windows' | 'macos' | 'linux' | 'web'
  features: PlatformFeature[]
  permissions: Permission[]
  integrations: Integration[]
}
```

### Environment Variables
Standard environment variables across platforms:
- `MINDLENS_ENV`: Current environment (dev/prod/test)
- `MINDLENS_LOG_LEVEL`: Logging verbosity
- `MINDLENS_DATA_DIR`: User data directory
- `MINDLENS_PLUGIN_DIR`: Plugin installation directory

## Testing

### Platform Testing
- Automated testing on all target platforms
- Platform-specific UI testing
- Performance benchmarking
- Compatibility testing

### CI/CD Integration
- GitHub Actions for multi-platform builds
- Automated testing on virtual machines
- Performance regression testing
- Security scanning

## Contributing

### Platform-Specific Contributions
- Platform experts welcome for each target OS
- Native module development
- Performance optimization
- Platform integration features

### Guidelines
- Test on target platforms before submitting
- Follow platform-specific best practices
- Document platform-specific behavior
- Consider accessibility requirements

## Future Plans

### Phase 1 (Current)
- [ ] Complete Windows support
- [ ] Basic macOS support
- [ ] Linux compatibility testing

### Phase 2 (Q3-Q4 2025)
- [ ] Web platform support
- [ ] Mobile platform investigation
- [ ] Cloud deployment options

### Phase 3 (2026+)
- [ ] Native mobile apps
- [ ] Browser extensions
- [ ] Cloud-native version

---

*Platform-specific code should be minimal and well-abstracted. The goal is to provide native user experience while maintaining a single codebase for core functionality.*
