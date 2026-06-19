@echo off
echo === Toussaint Portfolio — Windows Runner ===
echo.

where node >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed.
    echo Please download and install it from https://nodejs.org
    pause
    exit /b 1
)

where npm >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: npm not found. Please reinstall Node.js.
    pause
    exit /b 1
)

echo Installing dependencies...
npm install
if %errorlevel% neq 0 (
    echo ERROR: npm install failed.
    pause
    exit /b 1
)

echo.
echo Starting development server...
echo Open http://localhost:5173 in your browser.
echo Press Ctrl+C to stop.
echo.
start "" "http://localhost:5173"
npm run dev
pause
