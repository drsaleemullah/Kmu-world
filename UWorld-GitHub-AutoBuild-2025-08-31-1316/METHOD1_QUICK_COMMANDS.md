# 🚀 Method 1: Quick Command Reference

## Copy-Paste Commands (Windows)

```cmd
# Step 1: Navigate to your extracted project folder
cd "C:\path\to\your\UWorld-App"

# Step 2: Install Expo tools (one-time setup)
npm install -g @expo/cli eas-cli

# Step 3: Login to Expo (create account at expo.dev if needed)
eas login

# Step 4: Prepare project
npm install
eas build:configure

# Step 5: Build APK online (5-10 minutes)
eas build --platform android --profile preview

# Step 6: Download APK from the provided link
```

## What Each Command Does

| Command | What It Does | Time |
|---------|--------------|------|
| `npm install -g @expo/cli eas-cli` | Installs Expo build tools | 2 min |
| `eas login` | Login to your Expo account | 1 min |
| `npm install` | Installs project dependencies | 2 min |
| `eas build:configure` | Sets up build configuration | 1 min |
| `eas build --platform android --profile preview` | Builds APK online | 5-10 min |

## Expected Output

```bash
✔ Linked to project @yourusername/uworld-medical-prep
✔ Android: Building...

📱 Build URL: https://expo.dev/accounts/yourusername/projects/...
📦 APK Download: https://expo.dev/artifacts/eas/xxxxx.apk

✅ Build completed successfully!
```

## 🎯 Total Time: ~15 minutes
## 📱 Result: Ready-to-install APK file
