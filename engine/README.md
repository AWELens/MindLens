# MINDLENS Engine Components

This directory contains the core architectural components that form the foundation of the MINDLENS system.

## Directory Structure

### Developer (`developer/`)
Core development tools and utilities:
- AST parsers and analyzers
- Code generation engines  
- Language-specific processors
- Development workflow integrations

### Editor (`editor/`)
Visual editing components:
- Node creation and manipulation
- Visual graph editing tools
- Layer management interfaces
- Interactive diagram components

### Engine (`engine/`)
Core execution engine:
- Graph processing algorithms
- Synchronization engine
- Transformation pipelines
- State management systems

## Architecture Overview

The core components implement the fundamental MINDLENS concepts:

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  Developer  │    │   Editor    │    │   Engine    │
│   Tools     │◄──►│ Components  │◄──►│ Processing  │
└─────────────┘    └─────────────┘    └─────────────┘
       │                   │                   │
       ▼                   ▼                   ▼
  Code Analysis      Visual Editing      Graph Engine
  Code Generation    Layer Management    Synchronization
  Language Support   Node Manipulation   State Management
```

## Key Concepts

### Node System
- Universal entity representation
- Multi-layer existence capability
- Type-safe transformations
- Bidirectional synchronization

### Layer Management
- Abstract architectural layers
- Code implementation layers
- Runtime execution layers
- Seamless layer transitions

### Synchronization Engine
- Real-time change propagation
- Conflict resolution
- State consistency
- Undo/redo capabilities

## Development Status

| Component | Status | Phase |
|-----------|--------|-------|
| Developer Tools | 🚧 In Progress | Phase 1 |
| Editor Components | 📋 Planned | Phase 1 |
| Engine Core | 📋 Planned | Phase 1 |

## Technology Stack

### Primary Languages
- **TypeScript/JavaScript** - Core logic and APIs
- **Rust** - Performance-critical components via WASM
- **C++** - Future native performance modules

### Key Dependencies
- **AST Processing**: TypeScript Compiler API, Babel
- **Graph Processing**: Custom algorithms, CRDT implementations
- **State Management**: Zustand, Immer
- **Serialization**: JSON, MessagePack

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm 8+
- Rust (for WASM components)

### Development Setup
```bash
# From project root
pnpm install

# Run core tests
pnpm test:core

# Build core components
pnpm build:core
```

## Contributing

Core component development requires understanding of:
- Graph theory and algorithms
- AST manipulation and code generation
- Reactive programming patterns
- Performance optimization techniques

See [CONTRIBUTING.md](../docs/CONTRIBUTING.md) for general guidelines.

### Core-Specific Guidelines
- Write comprehensive unit tests
- Document all public APIs
- Consider performance implications
- Maintain backward compatibility

## Architecture Decisions

Key architectural decisions for core components:

1. **Graph-First Design**: All data structures are graph-based
2. **Immutable State**: State changes through immutable updates
3. **Plugin Architecture**: Extensible through well-defined interfaces
4. **Language Agnostic**: Core concepts work across programming languages

## Future Plans

### Phase 1 (Current)
- [ ] Basic Node and Link data structures
- [ ] Simple graph manipulation APIs
- [ ] TypeScript AST integration
- [ ] Foundation synchronization engine

### Phase 2 (Q3-Q4 2025)
- [ ] Advanced graph algorithms
- [ ] Multi-language AST support
- [ ] Performance optimizations
- [ ] Plugin system implementation

### Phase 3 (2026+)
- [ ] Runtime integration
- [ ] Advanced analytics
- [ ] Machine learning insights
- [ ] Cloud-native scaling

---

*The core components are the heart of MINDLENS. Changes here affect the entire system, so please review architectural decisions carefully and engage with the community before making significant modifications.*
