# MINDLENS Applications

This directory contains the main applications that make up the MINDLENS ecosystem.

## Applications

### Frontend (`frontend/`)
The main desktop application built with React and Tauri. This provides the primary user interface for MINDLENS, including:
- Interactive architectural visualization
- Code editor integration
- Layer management and switching
- Real-time synchronization between views

**Tech Stack:**
- React + TypeScript
- Tauri (Rust backend)
- React Flow for graph visualization
- Vite for build tooling

**Getting Started:**
```bash
cd frontend
pnpm install
pnpm dev
```

### Backend (`backend/`)
Future server-side components for:
- Multi-user collaboration
- Cloud synchronization
- Advanced analytics
- Plugin hosting

*Note: Backend services are planned for Phase 2 of development.*

## Development

### Running All Applications
From the workspace root:
```bash
pnpm dev        # Starts frontend in development mode
pnpm build      # Builds all applications for production
```

### Individual Application Development
Each application has its own package.json and can be developed independently:
```bash
cd frontend
pnpm dev        # Frontend only

cd backend
pnpm dev        # Backend only (when available)
```

## Contributing

See the main [CONTRIBUTING.md](../docs/CONTRIBUTING.md) for general contribution guidelines.

For application-specific contributions:
- Frontend contributions: See `frontend/README.md`
- Backend contributions: See `backend/README.md` (when available)
