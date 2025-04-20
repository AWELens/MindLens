# Contributing to MindLens

First off, thank you for considering contributing to **MindLens**! Your ideas, bug reports, code, and documentation improvements help shape the future of this project.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [How to Submit an Issue](#how-to-submit-an-issue)
3. [Feature Requests & RFC Process](#feature-requests--rfc-process)
4. [Branching and Workflow](#branching-and-workflow)
5. [Setting Up the Development Environment](#setting-up-the-development-environment)
6. [Coding Guidelines](#coding-guidelines)
7. [Commit Message Convention](#commit-message-convention)
8. [Pull Request Process](#pull-request-process)
9. [Testing](#testing)
10. [Communication Channels](#communication-channels)

---

## Code of Conduct
Please follow our [Code of Conduct](CODE_OF_CONDUCT.md) in all interactions. We aim to maintain a welcoming and inclusive community.

## How to Submit an Issue
1. Check for existing issues to avoid duplicates.
2. Use our issue templates:
   - **Bug Report**: `bug_report.md`
   - **Feature Request**: `feature_request.md`
3. Provide clear, concise information:
   - Steps to reproduce
   - Expected vs actual behavior
   - Version, environment, and any relevant logs

## Feature Requests & RFC Process
We use an RFC (Request for Comments) process for major features:

1. Fork the repo and create a new branch: `rfc/<short-title>`.
2. Add a file under `docs/rfcs/` named `000\<nnn\>-<short-title>.md` with:
   - Motivation
   - Design overview
   - Drawbacks, alternatives
   - Unresolved questions
3. Submit a pull request against `main` with the RFC. Maintain a discussion until consensus.
4. Once approved by core maintainers, the RFC is merged and scheduled.

## Branching and Workflow
- **main**: stable releases only
- **develop**: latest development changes
- **feature/***: new feature branches off `develop`
- **bugfix/***: bug fixes off `develop`
- **release/***: preparation for releases
- **hotfix/***: critical fixes off `main`

Always target `develop` for normal changes. Rebase onto the latest `develop` before opening a PR.

## Setting Up the Development Environment
1. Clone the repo:
   ```bash
   git clone https://github.com/your-org/mindlens.git
   cd mindlens
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build core and UI:
   ```bash
   npm run build
   ```
4. Run in development mode:
   ```bash
   npm run dev
   ```

_For C++ accelerated modules (optional):_
1. Install prerequisites: CMake, a C++17 compiler
2. Build the native core:
   ```bash
   cd core/cpp
   mkdir build && cd build
   cmake ..
   cmake --build .
   ```
3. Ensure native bindings load correctly in `core/bindings/`.

## Coding Guidelines
- **TypeScript**: follow [Airbnb style](https://github.com/airbnb/javascript) + project ESLint rules
- **C++**: follow Google C++ Style Guide
- **Formatting**: Prettier for JS/TS, clang-format for C++
- **Naming**: `PascalCase` for types/classes, `camelCase` for variables/functions
- **Documentation**: JSDoc/TSDoc for public APIs, comments for complex logic

## Commit Message Convention
We follow [Conventional Commits](https://www.conventionalcommits.org/):
```
<type>(<scope>): <subject>

<body>

<footer>
```
- **type**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `ci`
- **scope**: optional module or component
- **footer**: reference issues, breaking changes (`BREAKING CHANGE: ...`)

## Pull Request Process
1. Fork and branch off `develop`.
2. Ensure all checks pass locally:
   ```bash
   npm run lint
   npm run test
   ```
3. Push branch and open a PR against `develop`.
4. Fill out the PR template:
   - Describe what and why
   - Link related issues or RFCs
5. Address review comments. Maintain a clean, squashed history if requested.
6. Once approved by at least two core maintainers, the PR is merged.

## Testing
- Unit tests: `npm run test:unit`
- Integration tests: `npm run test:integration`
- End-to-end (E2E): `npm run test:e2e`
- Use coverage tools (`nyc` / `coveralls`) to maintain >80% coverage.

## Communication Channels
- **GitHub Issues & PRs**: for tracking bugs and proposals
- **Discord**: real-time discussion and help
- **Mailing List**: announcements and RFC discussions

---

Thank you for helping build **MindLens**! Your contributions drive us forward.

