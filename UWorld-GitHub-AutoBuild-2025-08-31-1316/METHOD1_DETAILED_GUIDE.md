# 📱 Method 1: Online APK Build - Complete Step-by-Step Guide

## 🎯 Why This Method is Best for You

✅ **No Android Studio needed** - Build in the cloud  
✅ **No complex setup** - Just Node.js required  
✅ **5-10 minutes** - Fast build time  
✅ **Professional APK** - Production-ready output  
✅ **Free** - Expo provides free builds  

---

## 🚀 Step-by-Step Instructions

### **Step 1: Prerequisites** (2 minutes)

#### Install Node.js (if not already installed)
1. Go to **https://nodejs.org/**
2. Download **LTS version** (recommended)
3. Install with default settings
4. **Restart your computer**
5. Verify installation:
   ```bash
   node --version
   npm --version
   ```

### **Step 2: Extract Your Project** (1 minute)

1. **Extract** the ZIP file to a folder like `C:\UWorld-App\`
2. **Open PowerShell/Command Prompt**
3. **Navigate** to the extracted folder:
   ```bash
   cd "C:\UWorld-App"
   # or wherever you extracted it
   ```

### **Step 3: Install Expo Tools** (2 minutes)

```bash
# Install Expo CLI and EAS CLI globally
npm install -g @expo/cli
npm install -g eas-cli

# Verify installation
expo --version
eas --version
```

### **Step 4: Create Expo Account** (2 minutes)

#### Option A: Via Website
1. Go to **https://expo.dev/signup**
2. Create free account with email
3. Verify your email

#### Option B: Via CLI
```bash
# Create account directly from terminal
expo register
# Follow the prompts
```

### **Step 5: Login to Expo** (1 minute)

```bash
# Login to your Expo account
eas login
# Enter your username and password
```

### **Step 6: Prepare Project for Build** (2 minutes)

```bash
# Install project dependencies
npm install

# Initialize Expo configuration
expo install expo

# Configure for EAS Build
eas build:configure
```

When prompted, choose:
- **Platform**: `All` (or just `Android` if you only want APK)
- **Bundle identifier**: Accept default or use `com.yourname.uworldapp`

### **Step 7: Build APK Online** (5-10 minutes)

```bash
# Build APK (not AAB - APK is directly installable)
eas build --platform android --profile preview
```

**What happens now:**
1. ✅ Expo uploads your code to their servers
2. ✅ Cloud servers compile Android APK
3. ✅ You get a download link when complete
4. ✅ Build takes 5-10 minutes

### **Step 8: Download Your APK** (1 minute)

#### Option A: From Terminal
- Copy the **download URL** from terminal output
- Paste in browser to download APK

#### Option B: From Expo Dashboard
1. Go to **https://expo.dev/accounts/[your-username]/projects**
2. Click your project
3. Go to **"Builds"** tab
4. Download APK when status shows **"Finished"**

---

## 📱 Complete Terminal Commands Summary

```bash
# 1. Navigate to project
cd "C:\path\to\your\extracted\UWorld-App"

# 2. Install Expo tools
npm install -g @expo/cli eas-cli

# 3. Login
eas login

# 4. Prepare project
npm install
expo install expo
eas build:configure

# 5. Build APK
eas build --platform android --profile preview

# 6. Download APK from provided link
```

---

## 🎯 What You'll See During Build

### Terminal Output Example:
```bash
PS C:\UWorld-App> eas build --platform android --profile preview

✔ Linked to project @yourusername/uworld-medical-prep
✔ Android: Building...

🚀 Build started, it may take a few minutes to complete.

📱 You can monitor the build at:
   https://expo.dev/accounts/yourusername/projects/uworld-medical-prep/builds/abc123

✔ Build finished in 8m 32s
📦 APK: https://expo.dev/artifacts/eas/abc123.apk
```

### On Expo Dashboard:
- **Status**: Building → Finished
- **Download**: APK button appears
- **Size**: ~25-30 MB
- **Install**: Direct APK installation

---

## 📋 Detailed Configuration Files

The ZIP includes pre-configured files for Expo:

### `app.json.expo` (Expo Configuration)
```json
{
  "expo": {
    "name": "UWorld Medical Prep",
    "slug": "uworld-medical-prep",
    "version": "1.0.0",
    "platforms": ["ios", "android"],
    "android": {
      "package": "com.uworldapp.medicalprep",
      "versionCode": 1
    }
  }
}
```

### `eas.json` (Build Configuration)
```json
{
  "build": {
    "preview": {
      "android": {
        "buildType": "apk"  // This ensures APK output
      }
    }
  }
}
```

---

## 🔧 Troubleshooting

### **Issue**: "Command not found: expo"
**Solution**:
```bash
npm install -g @expo/cli --force
```

### **Issue**: "Not logged in"
**Solution**:
```bash
eas logout
eas login
```

### **Issue**: "Build failed"
**Solutions**:
1. Check project structure:
   ```bash
   ls  # Should show package.json, app.json, etc.
   ```
2. Reinstall dependencies:
   ```bash
   rm -rf node_modules
   npm install
   ```
3. Try again:
   ```bash
   eas build --platform android --profile preview --clear-cache
   ```

### **Issue**: "Expo account required"
**Solution**: Create free account at https://expo.dev/signup

---

## 🎯 Alternative Online Services

If Expo doesn't work, try these:

### **Microsoft AppCenter**
1. Sign up: https://appcenter.ms/
2. Upload ZIP file
3. Configure Android build
4. Download APK

### **GitHub Actions** (Free)
1. Push code to GitHub
2. Use React Native build action
3. Download from Actions artifacts

### **Bitrise** (Free tier)
1. Connect GitHub repo
2. Add React Native workflow
3. Download APK

---

## 📱 Final APK Details

**What you'll get:**
- 📱 **Filename**: `app-release.apk` or similar
- 📦 **Size**: 25-30 MB
- 🔋 **Features**: Complete offline MCQ app
- 📝 **Installation**: Direct install on Android
- 🎯 **Functionality**: All features working

**APK Capabilities:**
- ✅ Add your own MCQ questions
- ✅ Offline storage and progress tracking
- ✅ Professional medical exam interface
- ✅ Import/export question banks
- ✅ Category-based study modes
- ✅ Detailed answer explanations

---

## 🚀 Quick Start After Download

1. **Transfer APK** to your Android device
2. **Enable "Unknown sources"** in Android settings
3. **Install APK** by tapping the file
4. **Open app** and start adding your MCQs
5. **Use Data Management** screen to import questions

**Your offline medical exam prep app is ready!** 🎓

---

## 💡 Pro Tips

- ✅ **Save the download link** - APK remains available for 30 days
- ✅ **Share with classmates** - Send them the APK file
- ✅ **Backup your questions** - Use export feature in app
- ✅ **Monitor build status** - Check Expo dashboard for progress
- ✅ **Try different profiles** - Use `production` for final version

**This method gives you a professional, installable Android app in under 15 minutes!**
