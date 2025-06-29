# 📝 File Headers Guide

This document explains how file headers work in the MindLens project and how to avoid duplicate headers.

## 🎯 What We Fixed

Previously, file headers were duplicated before every function/class. Now headers appear **only at the beginning of files**.

### ❌ Before (Wrong):
```typescript
/**
 * @author Andrii Volynets
 * @project mindlens
 * ...
 */

import { useState } from "react";

/**
 * @author Andrii Volynets  ← Duplicate!
 * ...
 */
export function useSystemInfo() {
  // function code
}

/**
 * @author Andrii Volynets  ← Another duplicate!
 * ...
 */
export function useAppSettings() {
  // function code
}
```

### ✅ After (Correct):
```typescript
/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file hooks.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-29
 */

import { useState } from "react";

export function useSystemInfo() {
  // function code
}

export function useAppSettings() {
  // function code
}
```

## 🔧 How It Works

### Automatic Header Management
The Git pre-commit hook automatically:

1. **Adds headers** to new files (only at the top)
2. **Updates existing headers** with current date
3. **Removes duplicate headers** throughout the file
4. **Preserves code** and imports

### Supported File Types
- **TypeScript**: `.ts`, `.tsx` - JSDoc style (`/** */`)
- **JavaScript**: `.js`, `.jsx` - JSDoc style (`/** */`)
- **Python**: `.py` - Docstring style (`""" """`)
- **Rust**: `.rs` - C-style comments (`/* */`)

## 🛠️ Setup

### Initial Setup
```bash
# Run once to enable automatic headers
.\setup-git-hooks.ps1
```

### What Happens on Commit
1. Git detects changed files
2. Pre-commit hook runs
3. Headers are added/updated/cleaned
4. Files are automatically staged
5. Commit proceeds

## 📋 Header Format

### TypeScript/JavaScript Files
```typescript
/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file filename.ts
 * @module relative/path
 * @since 0.0.0
 * @date 2025-06-29
 */
```

### Python Files
```python
"""
@author Andrii Volynets
@project mindlens
@license APGL
@version 0.0.0
@file filename.py
@module relative/path
@since 0.0.0
@date 2025-06-29
"""
```

### Rust Files
```rust
/*
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file filename.rs
 * @module relative/path
 * @since 0.0.0
 * @date 2025-06-29
 */
```

## 🚫 What NOT to Do

### Don't Add Headers Manually
- ❌ Don't copy/paste headers before functions
- ❌ Don't add multiple headers in one file
- ❌ Don't edit the date manually

### Don't Disable the Hook
- The hook ensures consistency across the project
- All team members should use the same setup

## 🔍 Troubleshooting

### If You See Duplicate Headers
Run the hook manually to clean them up:
```bash
.\.githooks\pre-commit.ps1
```

### If Headers Are Missing
1. Check if Git hooks are configured:
   ```bash
   git config core.hooksPath
   # Should output: .githooks
   ```

2. Re-run setup if needed:
   ```bash
   .\setup-git-hooks.ps1
   ```

### If Hook Doesn't Run
1. Check hook file exists: `.githooks/pre-commit.ps1`
2. Check PowerShell execution policy
3. Try running hook manually

## 🎯 Best Practices

### For New Files
- Create file normally
- Write your code
- Commit - header will be added automatically

### For Existing Files
- Edit the code as needed
- Don't touch the header
- Commit - header will be updated automatically

### For Code Reviews
- Headers should be consistent across all files
- Only one header per file (at the top)
- Date should reflect last modification

## 📊 Benefits

### Before Git Hooks
- ❌ Manual header management
- ❌ Inconsistent formats
- ❌ Duplicate headers
- ❌ Outdated information
- ❌ Time wasted on headers

### After Git Hooks
- ✅ Automatic header management
- ✅ Consistent format across project
- ✅ No duplicates
- ✅ Always up-to-date
- ✅ Focus on code, not headers

## 🔄 Migration

If you have files with duplicate headers, the next commit will automatically clean them up. The hook will:

1. Remove all existing headers
2. Add one clean header at the top
3. Preserve all your code

No manual intervention needed!

---

*This guide ensures clean, consistent file headers across the entire MindLens project.*
