# Contributing to MINDLENS

Thank you for your interest in contributing to MINDLENS! We welcome contributions from developers, designers, architects, and anyone passionate about improving software development tools.

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or later)
- [pnpm](https://pnpm.io/) (v8 or later)
- [Rust](https://rustup.rs/) (for Tauri backend)
- [Git](https://git-scm.com/)

### Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/YOUR_USERNAME/mindlens.git
   cd mindlens
   ```

2. **Install Dependencies**
   ```bash
   pnpm install
   ```

3. **Start Development Server**
   ```bash
   pnpm dev
   ```

## 📋 How to Contribute

### Reporting Issues

- Use GitHub Issues to report bugs or request features
- Search existing issues before creating a new one
- Provide clear steps to reproduce bugs
- Include system information and screenshots when relevant

### Pull Requests

1. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Your Changes**
   - Follow the existing code style
   - Add tests for new functionality
   - Update documentation as needed

3. **Test Your Changes**
   ```bash
   pnpm test
   pnpm build
   ```

4. **Commit Your Changes**
   - Use conventional commit messages
   - Example: `feat: add node visualization feature`
   - Example: `fix: resolve layer synchronization issue`

5. **Push and Create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

## 🏗️ Project Structure

```
mindlens/
├── apps/
│   ├── frontend/          # React + Tauri frontend
│   └── backend/          # Future backend services
├── core/                 # Core architecture components
├── plugins/              # Plugin system
├── docs/                 # Documentation
└── platform/            # Platform-specific code
```

## 🎯 Areas Where We Need Help

### High Priority
- [ ] Core visualization engine improvements
- [ ] Plugin architecture development
- [ ] TypeScript AST parsing enhancements
- [ ] Test coverage improvements

### Medium Priority
- [ ] Documentation and examples
- [ ] UI/UX improvements
- [ ] Performance optimizations
- [ ] Additional language support

### Low Priority
- [ ] Advanced visualizations
- [ ] Third-party integrations
- [ ] Mobile support

## 📝 Coding Standards

### General Guidelines
- Use TypeScript for all new code
- Follow existing naming conventions
- Write self-documenting code with clear variable names
- Add JSDoc comments for public APIs

### Code Style
- Use Prettier for formatting (configured in the project)
- Follow ESLint rules (configured in the project)
- Use 2 spaces for indentation
- Maximum line length: 100 characters

### Commit Messages
Follow [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Test additions or changes
- `chore:` - Build process or auxiliary tool changes

## 🧪 Testing

### Running Tests
```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

### Writing Tests
- Write unit tests for all new functionality
- Use Jest for testing framework
- Aim for >80% code coverage
- Test both success and error cases

## 📚 Documentation

### Types of Documentation
- **API Documentation**: Generated from JSDoc comments
- **User Guides**: Step-by-step tutorials
- **Architecture Docs**: High-level system design
- **Examples**: Working code samples

### Writing Documentation
- Write clear, concise explanations
- Include code examples where appropriate
- Use consistent terminology
- Update related documentation when making changes

## 🔒 License and Legal

### Licensing
MINDLENS uses dual licensing:
- **AGPL-3.0** for open source contributions
- **Commercial License** for proprietary use

### Contributor License Agreement
By contributing to MINDLENS, you agree that:
- Your contributions will be licensed under AGPL-3.0
- You have the right to make your contributions
- You grant us rights to use your contributions in commercial versions

## 🤝 Community

### Communication Channels
- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: General questions and ideas
- **Discord**: Real-time chat and community support

### Code of Conduct
We are committed to providing a welcoming and inclusive environment for all contributors. Please be respectful, constructive, and professional in all interactions.

## 🎉 Recognition

Contributors will be recognized in:
- Project README
- Release notes
- Contributors page
- Annual contributor appreciation posts

## 📞 Getting Help

If you need help with contributing:
1. Check existing documentation
2. Search GitHub Issues and Discussions
3. Ask questions in our community channels
4. Tag maintainers in your issue/PR if needed

---

Thank you for contributing to MINDLENS! Your efforts help make software development more transparent, interactive, and effective for everyone.