# Contributing to MindLens

First off, thank you for considering contributing to **MindLens**! Your ideas, bug reports, code, and documentation improvements help shape the future of this project.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [How Can I Contribute?](#how-can-i-contribute)
   - [Reporting Bugs](#reporting-bugs)
   - [Suggesting Features](#suggesting-features)
   - [Code Contributions](#code-contributions)
   - [Documentation](#documentation)
3. [Development Process](#development-process)
   - [Setting Up the Environment](#setting-up-the-environment)
   - [Branching Strategy](#branching-strategy)
   - [Commit Guidelines](#commit-guidelines)
   - [Pull Request Process](#pull-request-process)
4. [Coding Standards](#coding-standards)
   - [Style Guides](#style-guides)
   - [Testing Requirements](#testing-requirements)
5. [RFC Process](#rfc-process)
6. [Communication Channels](#communication-channels)

---

## Code of Conduct

Please follow our [Code of Conduct](CODE_OF_CONDUCT.md) in all interactions. We aim to maintain a welcoming and inclusive community.

## How Can I Contribute?

### Reporting Bugs

1. **Check existing issues** to avoid duplicates
2. **Use the bug report template** (`bug_report.md`)
3. **Include detailed information**:
   - Steps to reproduce
   - Expected vs. actual behavior
   - Version and environment details
   - Relevant logs or screenshots

### Suggesting Features

1. **Search existing issues and RFCs** first
2. **Use the feature request template** (`feature_request.md`)
3. **For major features**, follow the [RFC Process](#rfc-process)

### Code Contributions

1. **Find or create an issue** for the work
2. **Follow our branching strategy** and coding guidelines
3. **Write tests** for new functionality
4. **Submit a pull request** with a clear description

### Documentation

We greatly value documentation improvements:
- Fixing typos or clarifying existing content
- Adding examples and use cases
- Creating tutorials or guides
- Improving API documentation

## Development Process

### Setting Up the Environment

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-org/mindlens.git
   cd mindlens
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Build the project**:
   ```bash
   npm run build
   ```

4. **Run in development mode**:
   ```bash
   npm run dev
   ```

#### Optional: Native Module Setup

For C++ accelerated modules:

1. **Install prerequisites**: CMake, C++17 compiler
2. **Build native core**:
   ```bash
   cd core/cpp
   mkdir build && cd build
   cmake ..
   cmake --build .
   ```
3. **Verify native bindings** load correctly from `core/bindings/`

### Branching Strategy

We use a Git Flow inspired approach:

- **`main`**: Stable releases only
- **`develop`**: Latest development changes
- **Feature branches**: `feature/*` (from `develop`)
- **Bug fix branches**: `bugfix/*` (from `develop`)
- **Release branches**: `release/*` (for preparation)
- **Hotfix branches**: `hotfix/*` (from `main` for critical fixes)

Always target `develop` for normal contributions and rebase before submitting.

### Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Formatting changes
- `refactor`: Code change with no functionality change
- `perf`: Performance improvements
- `test`: Adding/fixing tests
- `ci`: CI configuration changes
- `chore`: Maintenance tasks

**Example**:
```
feat(layer-engine): add support for custom layer definitions

Implements the ability to define custom architectural layers through JSON configuration.

Closes #123
```

### Pull Request Process

1. **Create a branch** from `develop`
2. **Make your changes** following our coding standards
3. **Run all checks locally**:
   ```bash
   npm run lint
   npm run test
   ```
4. **Push your branch** and open a PR against `develop`
5. **Complete the PR template** with all required information
6. **Address review feedback** promptly
7. **Maintain a clean history** (squash commits if requested)
8. **Wait for approval** from at least two core maintainers

## Coding Standards

### Style Guides

- **TypeScript/JavaScript**: [Airbnb Style Guide](https://github.com/airbnb/javascript) + project ESLint rules
- **C++**: Google C++ Style Guide
- **Formatting**:
  - JS/TS: Prettier
  - C++: clang-format

### Naming Conventions

- **Types/Classes**: `PascalCase`
- **Variables/Functions**: `camelCase`
- **Constants**: `UPPER_SNAKE_CASE`
- **Files**: `kebab-case.ts`

### Documentation Requirements

- **Public APIs**: JSDoc/TSDoc comments
- **Complex Logic**: Inline comments explaining the "why"
- **Examples**: Include usage examples for non-trivial APIs

### Testing Requirements

- **Coverage Target**: >80% code coverage
- **Test Types**:
  - Unit tests: `npm run test:unit`
  - Integration tests: `npm run test:integration`
  - E2E tests: `npm run test:e2e`

## RFC Process

For significant changes, we use a Request for Comments (RFC) process:

1. **Fork the repository** and create a branch: `rfc/<short-title>`
2. **Create an RFC document** in `docs/rfcs/000<nnn>-<short-title>.md` including:
   - Motivation and problem statement
   - Detailed design and implementation approach
   - Drawbacks and alternatives considered
   - Unresolved questions
3. **Submit a PR** against `main` with your RFC
4. **Engage in discussion** and refine the proposal
5. **Once approved** by core maintainers, implementation can begin

## Communication Channels

- **GitHub Issues & PRs**: For tracking bugs and proposals
- **Discord**: Real-time discussion and help
- **Mailing List**: Announcements and RFC discussions

---

Thank you for helping build **MindLens**! Your contributions drive us forward.