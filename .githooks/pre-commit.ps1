# Pre-commit hook for adding file headers (PowerShell version)
# Installed in .githooks/pre-commit.ps1

# Function to get current date
function Get-CurrentDate {
    return Get-Date -Format "yyyy-MM-dd"
}

# Function to get version from package.json
function Get-Version {
    if (Test-Path "package.json") {
        $packageJson = Get-Content "package.json" | ConvertFrom-Json
        return $packageJson.version
    }
    return "1.0.0"
}

# Function to get project name
function Get-ProjectName {
    if (Test-Path "package.json") {
        $packageJson = Get-Content "package.json" | ConvertFrom-Json
        return $packageJson.name
    }
    return "MindLens"
}

# Function to create header
function Create-Header {
    param(
        [string]$FilePath
    )
    
    $fileName = Split-Path $FilePath -Leaf
    $relativePath = $FilePath -replace '^\.[\\/]', '' -replace '^apps[\\/]frontend[\\/]src[\\/]', ''
    $modulePath = Split-Path $relativePath -Parent
    $currentDate = Get-CurrentDate
    $version = Get-Version
    $projectName = Get-ProjectName
    
    $extension = [System.IO.Path]::GetExtension($fileName).TrimStart('.')
    
    switch ($extension) {
        { $_ -in @('ts', 'tsx', 'js', 'jsx') } {
            return @"
/**
 * @author Andrii Volynets
 * @project $projectName
 * @license APGL
 * @version $version
 * @file $fileName
 * @module $modulePath
 * @since $version
 * @date $currentDate
 */
"@
        }
        'py' {
            return @"
"""
@author Andrii Volynets
@project $projectName
@license APGL
@version $version
@file $fileName
@module $modulePath
@since $version
@date $currentDate
"""
"@
        }
        'rs' {
            return @"
/*
 * @author Andrii Volynets
 * @project $projectName
 * @license APGL
 * @version $version
 * @file $fileName
 * @module $modulePath
 * @since $version
 * @date $currentDate
 */
"@
        }
        default {
            return $null
        }
    }
}

# Function to check if header exists at the beginning of file
function Test-HasHeader {
    param([string]$FilePath)
    
    $content = Get-Content $FilePath -Head 15 -ErrorAction SilentlyContinue
    if ($content) {
        return ($content -join "`n") -match "@author Andrii Volynets"
    }
    return $false
}

# Function to update header
function Update-Header {
    param([string]$FilePath)
    
    $newHeader = Create-Header -FilePath $FilePath
    if (-not $newHeader) { return }
    
    $content = Get-Content $FilePath -Raw -ErrorAction SilentlyContinue
    if (-not $content) { return }
    
    # Remove all existing headers (including duplicates)
    # JSDoc style headers
    $content = [regex]::Replace($content, '(?s)/\*\*[^*]*\*[^*]*@author Andrii Volynets.*?\*/', '', [System.Text.RegularExpressions.RegexOptions]::Multiline)
    
    # Python style headers
    $content = [regex]::Replace($content, '(?s)"""[^"]*@author Andrii Volynets.*?"""', '', [System.Text.RegularExpressions.RegexOptions]::Multiline)
    
    # C style headers
    $content = [regex]::Replace($content, '(?s)/\*[^*]*\*[^*]*@author Andrii Volynets.*?\*/', '', [System.Text.RegularExpressions.RegexOptions]::Multiline)
    
    # Clean up extra newlines at the beginning
    $content = $content -replace '^\s*\n+', ''
    
    # Add new header at the beginning
    $content = $newHeader + "`n`n" + $content
    
    Set-Content -Path $FilePath -Value $content -NoNewline -ErrorAction SilentlyContinue
}

# Get list of staged files
try {
    $stagedFiles = & git diff --cached --name-only --diff-filter=ACM
    
    foreach ($file in $stagedFiles) {
        if (Test-Path $file) {
            $extension = [System.IO.Path]::GetExtension($file).TrimStart('.')
            
            if ($extension -in @('ts', 'tsx', 'js', 'jsx', 'py', 'rs')) {
                Write-Host "Updating header in file: $file"
                Update-Header -FilePath $file
                & git add $file
            }
        }
    }
}
catch {
    Write-Host "Error in pre-commit hook: $_"
    exit 1
}

exit 0
