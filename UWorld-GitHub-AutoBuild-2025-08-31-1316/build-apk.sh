#!/bin/bash

echo "========================================"
echo "  UWorld Medical Prep App - APK Builder"
echo "========================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install from https://nodejs.org/"
    echo ""
    exit 1
fi

echo "✅ Node.js found: $(node --version)"
echo ""

# Check if Android SDK is available
if [ -z "$ANDROID_HOME" ]; then
    echo "❌ ANDROID_HOME not set. Please install Android Studio and set ANDROID_HOME"
    echo ""
    echo "Instructions:"
    echo "1. Install Android Studio"
    echo "2. Set ANDROID_HOME to your SDK path"
    echo "3. Add platform-tools to PATH"
    echo ""
    exit 1
fi

echo "✅ Android SDK found at $ANDROID_HOME"
echo ""

echo "Installing dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed"
echo ""

# Check if android folder exists
if [ ! -d "android/app" ]; then
    echo "Generating React Native Android project..."
    npx @react-native-community/cli@latest init UWorldApp . --skip-install
    if [ $? -ne 0 ]; then
        echo "❌ Failed to generate Android project"
        exit 1
    fi
    echo "✅ Android project generated"
    echo ""
fi

echo "Building APK..."
cd android
chmod +x gradlew
./gradlew assembleDebug
if [ $? -ne 0 ]; then
    echo "❌ Failed to build APK"
    cd ..
    exit 1
fi

cd ..
echo ""
echo "========================================"
echo "✅ APK BUILD SUCCESSFUL!"
echo "========================================"
echo ""
echo "📱 APK Location: android/app/build/outputs/apk/debug/app-debug.apk"
echo "📦 File size: $(du -h android/app/build/outputs/apk/debug/app-debug.apk | cut -f1)"
echo ""
echo "🚀 Next steps:"
echo "1. Install on Android device: adb install android/app/build/outputs/apk/debug/app-debug.apk"
echo "2. Or copy APK to device and install manually"
echo "3. Open app and add your MCQs using Data Management screen"
echo ""
echo "✨ Your offline medical exam prep app is ready!"
echo ""
