@echo off
title Aninda Portfolio Localhost Server
echo Starting local web server on http://localhost:8000 ...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0serve.ps1"
pause
