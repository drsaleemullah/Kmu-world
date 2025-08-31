# Building APK for UWorld Medical Prep App

## 🎯 Quick APK Build Guide

### Prerequisites
1. **Node.js** installed
2. **Android Studio** with SDK
3. **Java JDK 17+**

### Method 1: Using React Native CLI (Recommended)

#### Step 1: Install Dependencies
```bash
npm install
```

#### Step 2: Generate Android Project
```bash
npx @react-native-community/cli@latest init UWorldApp . --skip-install
```

#### Step 3: Build Debug APK
```bash
cd android
./gradlew assembleDebug
```

#### Step 4: Find Your APK
```
android/app/build/outputs/apk/debug/app-debug.apk
```

### Method 2: Using Expo (Easier Alternative)

#### Step 1: Install Expo CLI
```bash
npm install -g @expo/cli
npm install -g eas-cli
```

#### Step 2: Initialize Expo
```bash
npx create-expo-app --template bare-minimum
```

#### Step 3: Build APK
```bash
eas build --platform android --local
```

### Method 3: Online Build Services

Use services like:
- **Expo Application Services (EAS)**
- **AppCenter** by Microsoft
- **Bitrise**

## 🚀 Automated APK Build Script

I'll create a script to automate the APK building process for you.

### For Windows (PowerShell):
```powershell
# Check if Node.js is installed
if (!(Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Node.js not found. Please install from nodejs.org"
    exit 1
}

# Install dependencies
npm install

# Check if Android SDK is available
if (!(Test-Path $env:ANDROID_HOME)) {
    Write-Host "❌ Android SDK not found. Please install Android Studio and set ANDROID_HOME"
    exit 1
}

# Generate React Native Android project if not exists
if (!(Test-Path "android/app")) {
    npx @react-native-community/cli@latest init UWorldApp . --skip-install
}

# Build APK
cd android
./gradlew assembleDebug

Write-Host "✅ APK built successfully!"
Write-Host "📱 Location: android/app/build/outputs/apk/debug/app-debug.apk"
```

## 🛠️ Manual APK Building Steps

### 1. Environment Setup
```bash
# Install React Native CLI
npm install -g @react-native-community/cli

# Install dependencies
npm install

# Link native dependencies (if needed)
npx react-native link
```

### 2. Android Project Generation
```bash
# Generate Android project structure
npx @react-native-community/cli@latest init UWorldApp . --skip-install --platform android
```

### 3. Configure Android
Edit `android/app/build.gradle`:
```gradle
android {
    compileSdkVersion 34
    defaultConfig {
        applicationId "com.uworldapp"
        minSdkVersion 21
        targetSdkVersion 34
        versionCode 1
        versionName "1.0"
    }
    buildTypes {
        release {
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
}
```

### 4. Build Commands
```bash
# Debug APK (for testing)
cd android && ./gradlew assembleDebug

# Release APK (for distribution)
cd android && ./gradlew assembleRelease
```

## 📱 APK Locations

After successful build:
- **Debug APK**: `android/app/build/outputs/apk/debug/app-debug.apk`
- **Release APK**: `android/app/build/outputs/apk/release/app-release.apk`

## 🔧 Troubleshooting

### Common Issues:

1. **"ANDROID_HOME not set"**
   ```bash
   # Windows
   setx ANDROID_HOME "C:\Users\%USERNAME%\AppData\Local\Android\Sdk"
   
   # Add to PATH
   setx PATH "%PATH%;%ANDROID_HOME%\platform-tools;%ANDROID_HOME%\tools"
   ```

2. **"gradlew not found"**
   ```bash
   # Make gradlew executable (Linux/Mac)
   chmod +x android/gradlew
   
   # Windows - use gradlew.bat
   cd android && gradlew.bat assembleDebug
   ```

3. **Build failures**
   ```bash
   # Clean and rebuild
   cd android && ./gradlew clean && ./gradlew assembleDebug
   ```

## 🎯 Quick Start Commands

For immediate APK generation:

```bash
# 1. Install everything
npm install

# 2. Generate Android project
npx @react-native-community/cli@latest init UWorldApp . --skip-install

# 3. Build APK
cd android
./gradlew assembleDebug

# 4. Install on device
adb install app/build/outputs/apk/debug/app-debug.apk
```

## 📦 What You'll Get

- **app-debug.apk**: Ready-to-install Android app
- **Size**: ~15-25 MB (includes React Native runtime)
- **Works offline**: All MCQ functionality available
- **Your questions**: Import/export MCQs directly in the app

## 🚀 Next Steps

1. **Download Android Studio** if not installed
2. **Set up Android SDK** and environment variables
3. **Run the build commands** above
4. **Install APK** on your Android device
5. **Add your MCQs** using the app interface

The APK will be a fully functional offline medical exam prep app!
