@echo off
title Deploy Portfolio to GitHub Pages
echo ========================================================
echo   Deploying Portfolio to GitHub Pages (Conformist101)
echo ========================================================
echo.

where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [Notice] Git is not detected on your system PATH.
    echo If you don't have Git installed, you can simply drag-and-drop 
    echo the folder contents into github.com via your browser!
    echo.
    echo To install Git, download it from: https://git-scm.com/
    pause
    exit /b
)

echo Initializing local Git repository...
git init
git add .
git commit -m "Initial commit: Aninda Bhattacharjee Academic Portfolio"
git branch -M main

echo.
echo Adding remote repository: https://github.com/Conformist101/Conformist101.github.io.git
git remote remove origin 2>nul
git remote add origin https://github.com/Conformist101/Conformist101.github.io.git

echo.
echo Pushing files to GitHub...
git push -u origin main

echo.
echo ========================================================
echo  Successfully pushed to GitHub!
echo  Visit https://conformist101.github.io/ in 1-2 minutes.
echo ========================================================
pause
