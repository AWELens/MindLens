# Script for setting up Git hooks
# Run this file to activate automatic header addition

# Configure Git to use custom hooks folder
git config core.hooksPath .githooks

# Make hook executable (for Unix systems)
if (Test-Path ".githooks/pre-commit") {
    # In Windows execution rights are set automatically
    Write-Host "Git hooks configured successfully!"
    Write-Host "Now file headers will be automatically added/updated on every commit."
} else {
    Write-Host "Error: pre-commit file not found in .githooks folder"
}

# Create Windows batch file for compatibility
$batchContent = @'
@echo off
powershell.exe -ExecutionPolicy Bypass -File "%~dp0pre-commit.ps1"
'@

Set-Content -Path ".githooks/pre-commit.bat" -Value $batchContent

Write-Host "Also created .bat file for Windows compatibility."
Write-Host ""
Write-Host "Usage:"
Write-Host "1. Setup completed automatically"
Write-Host "2. On next commit headers will be added automatically"
Write-Host "3. For testing make changes to a file and run 'git commit'"
