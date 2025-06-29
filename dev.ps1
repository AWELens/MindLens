# Hot reload script for MindLens desktop development
param(
    [switch]$Frontend,
    [switch]$Desktop,
    [switch]$All
)

Write-Host "🚀 MindLens Development Hot Reload" -ForegroundColor Green

if ($All -or (!$Frontend -and !$Desktop)) {
    Write-Host "Starting full stack development..." -ForegroundColor Yellow
    
    # Start frontend in background
    Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd 'apps/frontend'; npm run dev" -WindowStyle Normal
    
    # Wait a bit for frontend to start
    Start-Sleep 2
    
    # Start desktop app
    Write-Host "Starting desktop application..." -ForegroundColor Yellow
    Set-Location "apps/desktop"
    pnpm dev
}
elseif ($Frontend) {
    Write-Host "Starting frontend only..." -ForegroundColor Yellow
    Set-Location "apps/frontend"
    npm run dev
}
elseif ($Desktop) {
    Write-Host "Starting desktop only..." -ForegroundColor Yellow
    Set-Location "apps/desktop"
    pnpm dev
}

Write-Host "✅ Development servers started!" -ForegroundColor Green
