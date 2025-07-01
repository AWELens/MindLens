# Pre-commit hook for adding file headers (PowerShell version)
# Installed in .githooks/pre-commit.ps1

# Cache package.json data
$packageData = if (Test-Path "package.json") {
    Get-Content "package.json" -Raw | ConvertFrom-Json
} else {
    [PSCustomObject]@{ name = "MindLens"; version = "1.0.0" }
}

# Supported file extensions
$supportedExtensions = @('ts', 'tsx', 'js', 'jsx', 'py', 'rs')

# Header templates by extension
$headerTemplates = @{
    'js|ts|tsx|jsx' = @"
/**
 * @author Andrii Volynets
 * @project {0}
 * @license APGL
 * @version {1}
 * @file {2}
 * @module {3}
 * @since {1}
 * @date {4}
 */
"@
    'py' = @"
"""
@author Andrii Volynets
@project {0}
@license APGL
@version {1}
@file {2}
@module {3}
@since {1}
@date {4}
"""
"@
    'rs' = @"
/*
 * @author Andrii Volynets
 * @project {0}
 * @license APGL
 * @version {1}
 * @file {2}
 * @module {3}
 * @since {1}
 * @date {4}
 */
"@
}

# Function to create header
function Create-Header {
    param(
        [string]$FilePath,
        [string]$Extension
    )
    
    $fileName = Split-Path $FilePath -Leaf
    $modulePath = ($FilePath -replace '^\.[\\/]' -replace '^apps[\\/]frontend[\\/]src[\\/]', '') -replace '\\', '/'
    $modulePath = Split-Path $modulePath -Parent
    $currentDate = Get-Date -Format "yyyy-MM-dd"
    
    foreach ($extPattern in $headerTemplates.Keys) {
        if ($Extension -match $extPattern) {
            return $headerTemplates[$extPattern] -f $packageData.name, $packageData.version, $fileName, $modulePath, $currentDate
        }
    }
    return $null
}

# Function to check if header exists
function Test-HasHeader {
    param([string]$FilePath)
    
    try {
        $content = Get-Content $FilePath -Head 15 -Raw -ErrorAction Stop
        return $content -match '@author Andrii Volynets'
    } catch {
        return $false
    }
}

# Function to update header
function Update-Header {
    param([string]$FilePath)
    
    try {
        $extension = [System.IO.Path]::GetExtension($FilePath).TrimStart('.')
        if ($extension -notin $supportedExtensions) { return }
        
        $newHeader = Create-Header -FilePath $FilePath -Extension $extension
        if (-not $newHeader) { return }
        
        $content = Get-Content $FilePath -Raw -ErrorAction Stop
        # Remove existing headers
        $content = [regex]::Replace($content, '(?s)(/\*\*[^*]*\*[^*]*@author Andrii Volynets.*?/|"""[^"]*@author Andrii Volynets.*?"""|/\*[^*]*\*[^*]*@author Andrii Volynets.*?/)\s*', '')
        
        # Add new header
        $content = $newHeader + "`n`n" + $content.TrimStart()
        
        Set-Content -Path $FilePath -Value $content -NoNewline -ErrorAction Stop
        & git add $FilePath
        Write-Host "Updated header in: $FilePath"
    } catch {
        Write-Host "Error processing $FilePath : $_"
    }
}

# Main execution
try {
    $stagedFiles = & git diff --cached --name-only --diff-filter=ACM
    foreach ($file in $stagedFiles) {
        if (Test-Path $file) {
            Update-Header -FilePath $file
        }
    }
} catch {
    Write-Host "Error in pre-commit hook: $_"
    exit 1
}

exit 0