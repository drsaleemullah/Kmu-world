# UWorld Medical Prep - Installation Guide

## 🚀 Quick Setup (5 Steps)

### Step 1: Install Node.js
1. Download Node.js from https://nodejs.org/ (LTS version)
2. Install and restart your computer
3. Open PowerShell and verify: `node --version`

### Step 2: Extract and Navigate
1. Extract this ZIP file to your desired location
2. Open PowerShell/Terminal
3. Navigate to the extracted folder: `cd "path/to/UWorld-App"`

### Step 3: Install Dependencies
```bash
npm install
```

### Step 4: Set Up Mobile Development

#### For Android:
1. Download Android Studio from https://developer.android.com/studio
2. Install Android SDK and build tools
3. Set ANDROID_HOME environment variable

#### For iOS (macOS only):
1. Install Xcode from App Store
2. Install CocoaPods: `sudo gem install cocoapods`
3. Run: `cd ios && pod install && cd ..`

### Step 5: Run the App
```bash
# Start the development server
npm start

# In a new terminal, run on your platform:
npm run android    # For Android
npm run ios        # For iOS (macOS only)
```

## 📱 Adding Your MCQs

### Method 1: Using the App (Recommended)
1. Run the app on your device/emulator
2. Navigate to "Data Management" screen
3. Use "Import Questions" section
4. Paste your questions in JSON format (see template below)

### Method 2: Edit Template File
1. Open `src/data/mcqTemplate.ts`
2. Replace sample questions with your own
3. Follow the exact format shown

### MCQ Format Template
```json
{
  "questions": [
    {
      "id": "unique_id_1",
      "question": "Your question text here?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctAnswer": 1,
      "explanation": "Detailed explanation why B is correct.",
      "category": "Your Subject",
      "difficulty": "Medium"
    }
  ]
}
```

## 🔧 Troubleshooting

### Common Issues:

**"npm command not found"**
- Install Node.js from nodejs.org

**"Cannot find module" errors**
```bash
rm -rf node_modules
npm install
```

**Android build failures**
- Ensure Android Studio and SDK are properly installed
- Set ANDROID_HOME environment variable

**Metro bundler issues**
```bash
npx react-native start --reset-cache
```

## 📚 Features

✅ Complete offline functionality
✅ Your own MCQ questions
✅ Progress tracking
✅ Detailed explanations
✅ Category-based study
✅ Timed quizzes
✅ Import/Export questions
✅ Works on Android & iOS

## 📞 Support

If you encounter issues:
1. Check the main README.md for detailed instructions
2. Ensure all prerequisites are installed
3. Try clearing cache and reinstalling dependencies

Happy studying! 🎓
