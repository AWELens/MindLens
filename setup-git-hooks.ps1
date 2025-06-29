# Script for setting up Git hooks
# Run this file to activate automatic header addition

Write-Host "Setting up Git hooks for automatic file headers..."
Write-Host ""

# Configure Git to use custom hooks folder
git config core.hooksPath .githooks

# Make hook executable (for Unix systems)
if (Test-Path ".githooks/pre-commit") {
    # In Windows execution rights are set automatically
    Write-Host "✅ Git hooks configured successfully!"
    Write-Host "📝 File headers will be automatically managed on every commit."
    Write-Host ""
    Write-Host "Features:"
    Write-Host "  • Adds header only at the beginning of files"
    Write-Host "  • Removes duplicate headers automatically"
    Write-Host "  • Updates existing headers with current date"
    Write-Host "  • Supports .ts, .tsx, .js, .jsx, .py, .rs files"
} else {
    Write-Host "❌ Error: pre-commit file not found in .githooks folder"
}

# Create Windows batch file for compatibility
$batchContent = @'
@echo off
powershell.exe -ExecutionPolicy Bypass -File "%~dp0pre-commit.ps1"
'@

Set-Content -Path ".githooks/pre-commit.bat" -Value $batchContent

Write-Host "✅ Also created .bat file for Windows compatibility."
Write-Host ""
Write-Host "🎯 Usage:"
Write-Host "1. Setup completed automatically"
Write-Host "2. On next commit headers will be managed automatically"
Write-Host "3. No more duplicate headers!"
Write-Host "4. Test: make changes to a file and run 'git commit'"
