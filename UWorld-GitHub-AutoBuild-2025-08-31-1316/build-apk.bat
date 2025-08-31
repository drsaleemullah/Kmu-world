@echo off
echo ========================================
echo   UWorld Medical Prep App - APK Builder
echo ========================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js not found. Please install from https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo ✅ Node.js found
echo.

REM Check if Android SDK is available
if not defined ANDROID_HOME (
    echo ❌ ANDROID_HOME not set. Please install Android Studio and set ANDROID_HOME
    echo.
    echo Instructions:
    echo 1. Install Android Studio
    echo 2. Set ANDROID_HOME to your SDK path (usually C:\Users\%USERNAME%\AppData\Local\Android\Sdk)
    echo 3. Add platform-tools to PATH
    echo.
    pause
    exit /b 1
)

echo ✅ Android SDK found at %ANDROID_HOME%
echo.

echo Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo ✅ Dependencies installed
echo.

REM Check if android folder exists
if not exist "android\app" (
    echo Generating React Native Android project...
    call npx @react-native-community/cli@latest init UWorldApp . --skip-install
    if %errorlevel% neq 0 (
        echo ❌ Failed to generate Android project
        pause
        exit /b 1
    )
    echo ✅ Android project generated
    echo.
)

echo Building APK...
cd android
call gradlew.bat assembleDebug
if %errorlevel% neq 0 (
    echo ❌ Failed to build APK
    cd ..
    pause
    exit /b 1
)

cd ..
echo.
echo ========================================
echo ✅ APK BUILD SUCCESSFUL!
echo ========================================
echo.
echo 📱 APK Location: android\app\build\outputs\apk\debug\app-debug.apk
echo 📦 File size: 
for %%A in ("android\app\build\outputs\apk\debug\app-debug.apk") do echo    %%~zA bytes
echo.
echo 🚀 Next steps:
echo 1. Install on Android device: adb install android\app\build\outputs\apk\debug\app-debug.apk
echo 2. Or copy APK to device and install manually
echo 3. Open app and add your MCQs using Data Management screen
echo.
echo ✨ Your offline medical exam prep app is ready!
echo.
pause
