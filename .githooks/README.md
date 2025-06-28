# Automatic File Headers in Git

This project is configured for automatic file header addition on commit.

## Setup

### Quick setup (Windows):
```powershell
.\setup-git-hooks.ps1
```

### Manual setup:
1. Configure Git to use custom hooks folder:
   ```bash
   git config core.hooksPath .githooks
   ```

2. Make files executable (Linux/Mac):
   ```bash
   chmod +x .githooks/pre-commit
   chmod +x .githooks/pre-commit.ps1
   ```

## How it works

On every commit Git automatically:
1. Checks all files that will be committed
2. For files with extensions `.ts`, `.tsx`, `.js`, `.jsx`, `.py`, `.rs`:
   - Adds header if it doesn't exist
   - Updates date in existing header
3. Automatically adds updated files to staging area

## Header format

```javascript
/**
 * @author Andrii Volynets
 * @project MindLens
 * @license APGL
 * @version 1.0.0
 * @file filename.ts
 * @module relative/path/to/file
 * @since 1.0.0
 * @date 2025-06-28
 */
```

## Supported languages

- **TypeScript/JavaScript** (.ts, .tsx, .js, .jsx) - `/** */` comments
- **Python** (.py) - `"""` docstring comments  
- **Rust** (.rs) - `/* */` comments

## Automatic data

- **@project** - taken from `package.json` (`name` field)
- **@version** - taken from `package.json` (`version` field) 
- **@since** - uses current version
- **@date** - current date in YYYY-MM-DD format
- **@file** - filename
- **@module** - relative path to file

## Disabling

To temporarily disable header addition:
```bash
git commit --no-verify
```

To completely disable:
```bash
git config --unset core.hooksPath
```
