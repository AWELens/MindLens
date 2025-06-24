# MINDLENS Plugins

This directory contains the plugin system and official plugins for MINDLENS.

## Plugin Categories

### Code Generation (`codegen/`)
Plugins for generating code from architectural models:
- **Telemetry Plugin** - Generate observability code
- Template generation systems
- Interface and API generation
- Test scaffolding generation

### Documentation Export (`doc-export/`)
Plugins for exporting documentation and diagrams:
- Architecture diagram export
- API documentation generation
- Confluence/Notion integration
- PDF/HTML report generation

### Version Control (`git/`)
Git integration plugins:
- Repository analysis and visualization
- Commit history integration
- Branch and merge visualization
- Code review integration

### Telemetry (`telemetry/`)
Observability and monitoring plugins:
- Performance monitoring integration
- Log aggregation and analysis
- Metrics collection and visualization
- Distributed tracing support

## Plugin Architecture

MINDLENS uses a event-driven plugin system with the following characteristics:

### Core Concepts
- **Hook-based Architecture**: Plugins register hooks for lifecycle events
- **Sandboxed Execution**: Plugins run in isolated environments
- **Typed APIs**: TypeScript interfaces for plugin development
- **Hot Reloading**: Plugins can be updated without restarting

### Plugin Structure
```typescript
interface MindLensPlugin {
  name: string
  version: string
  description: string
  hooks: PluginHooks
  dependencies?: string[]
  permissions: Permission[]
}
```

## Available Plugins

| Plugin | Status | Description | Phase |
|--------|--------|-------------|-------|
| **codegen/telemetry** | 🚧 Development | Generate observability code from architecture | 1 |
| **doc-export** | 📋 Planned | Export documentation and diagrams | 2 |
| **git** | 📋 Planned | Git repository integration | 2 |
| **telemetry** | 📋 Planned | Runtime monitoring and metrics | 3 |

## Developing Plugins

### Getting Started
1. **Create Plugin Directory**
   ```bash
   mkdir plugins/my-plugin
   cd plugins/my-plugin
   ```

2. **Initialize Plugin**
   ```bash
   pnpm init
   pnpm add @mindlens/plugin-sdk
   ```

3. **Create Plugin Entry Point**
   ```typescript
   // src/index.ts
   import { MindLensPlugin } from '@mindlens/plugin-sdk'
   
   export default {
     name: 'my-plugin',
     version: '1.0.0',
     description: 'My awesome plugin',
     hooks: {
       onNodeCreated: (node) => {
         // Handle node creation
       }
     }
   } as MindLensPlugin
   ```

### Plugin SDK
The plugin SDK provides:
- **Core APIs**: Access to graph data and operations
- **UI Components**: Reusable React components
- **Utilities**: Common helper functions
- **Type Definitions**: Full TypeScript support

```bash
# Install plugin SDK (when available)
pnpm add @mindlens/plugin-sdk
```

### Plugin Lifecycle
1. **Registration**: Plugin registers with the system
2. **Initialization**: Plugin initializes resources
3. **Hook Registration**: Plugin registers event handlers
4. **Execution**: Plugin responds to system events
5. **Cleanup**: Plugin cleans up resources on unload

## Plugin Development Guidelines

### Best Practices
- **Single Responsibility**: Each plugin should have a clear, focused purpose
- **Minimal Dependencies**: Avoid heavy dependencies that slow loading
- **Error Handling**: Gracefully handle errors without crashing the system
- **Performance**: Be mindful of performance impact on the main application

### Security Considerations
- **Sandboxing**: Plugins run in restricted environments
- **Permissions**: Declare required permissions explicitly
- **Input Validation**: Validate all external inputs
- **Secure APIs**: Use secure communication channels

### Testing
- Write comprehensive unit tests
- Test plugin lifecycle events
- Test error conditions
- Performance testing for heavy operations

## Official Plugin Development

### Contributing to Official Plugins
1. See [CONTRIBUTING.md](../docs/CONTRIBUTING.md) for general guidelines
2. Discuss plugin ideas in GitHub Discussions
3. Create proof-of-concept implementations
4. Submit PRs with comprehensive tests

### Plugin Standards
- Follow TypeScript best practices
- Comprehensive documentation
- Internationalization support
- Accessibility considerations

## Community Plugins

### Plugin Registry (Planned)
A centralized registry for community plugins featuring:
- Plugin discovery and search
- Version management
- Security scanning
- Community ratings and reviews

### Publishing Plugins (Planned)
```bash
# Future plugin publishing workflow
mindlens plugin publish my-plugin
```

## Plugin Configuration

### System Configuration
Plugins can be configured through:
- Configuration files
- Environment variables
- Runtime settings panel
- Command-line arguments

### User Preferences
- Plugin-specific settings
- Keyboard shortcuts
- UI customizations
- Data storage preferences

## Troubleshooting

### Common Issues
- **Plugin not loading**: Check permissions and dependencies
- **Performance issues**: Profile plugin execution
- **Compatibility issues**: Verify API version compatibility
- **Security errors**: Review permission requirements

### Debugging
- Use built-in plugin debugger
- Enable verbose logging
- Test in isolated environment
- Use plugin development tools

---

*The plugin system is designed to be extensible and secure. When developing plugins, always consider the impact on system performance and user experience.*
