# UWorld Medica## 📱 Quick APK Generation

**Want a ready-to-install APK?** 

### 🚀 Method 1: Online Build (EASIEST - 15 minutes):
1. **Install Expo CLI**: `npm install -g @expo/cli eas-cli`
2. **Login**: `eas login` (create free account at expo.dev)
3. **Build APK online**: `eas build --platform android --profile preview`  
4. **Download & Install**: Get APK link from build output

📋 **Detailed Method 1 Guide**: See `METHOD1_DETAILED_GUIDE.md`  
⚡ **Quick Commands**: See `METHOD1_QUICK_COMMANDS.md`  
📊 **Process Flow**: See `METHOD1_PROCESS_FLOW.md`

### 🛠️ Method 2: Local Build:
1. **Run automated script**: `build-apk.bat` (Windows) or `build-apk.sh` (Linux/Mac)
2. **Find APK**: `android/app/build/outputs/apk/debug/app-debug.apk`

📋 **All APK methods**: See `GET_APK.md` and `BUILD_APK_GUIDE.md`A React Native mobile application similar to UWorld for medical exam preparation, featuring practice questions, detailed explanations, progress tracking, and **full offline functionality**.

## ✨ Key Features

- 📝 **Your Own MCQs**: Easily add your own multiple choice questions
- 💾 **Offline Storage**: All data stored locally on device - works without internet
- 📊 **Progress Tracking**: Monitor your study progress and performance  
- ⏱️ **Timed Tests**: Simulate real exam conditions
- 📚 **Category Study**: Focus on specific medical subjects
- 🎯 **Performance Analytics**: Track accuracy and identify weak areas
- 🔄 **Review System**: Revisit incorrect answers for better understanding
- 📱 **Mobile Ready**: Works on both Android and iOS devices

## � Quick APK Generation

**Want a ready-to-install APK?** 

### 🚀 Fastest Method (5 minutes):
1. **Install Expo CLI**: `npm install -g @expo/cli eas-cli`
2. **Build APK online**: `eas build --platform android --profile preview`  
3. **Download & Install**: Get APK link from Expo

### 🛠️ Local Build Method:
1. **Run automated script**: `build-apk.bat` (Windows) or `build-apk.sh` (Linux/Mac)
2. **Find APK**: `android/app/build/outputs/apk/debug/app-debug.apk`

📋 **Detailed APK instructions**: See `GET_APK.md` and `BUILD_APK_GUIDE.md`

---

## �🚀 Quick Start for Adding Your MCQs

### Step 1: Install Node.js
1. Download Node.js from [nodejs.org](https://nodejs.org/) (choose LTS version)
2. Install it and restart your computer
3. Open PowerShell and verify: `node --version`

### Step 2: Install Dependencies
```bash
cd "D:\Uworld Kmu"
npm install
```

### Step 3: Add Your Questions
You can add your MCQs in **two easy ways**:

#### Method 1: Using the App Interface (Recommended)
1. Run the app: `npm start` then `npm run android`
2. Navigate to "Data Management" screen
3. Use the "Import Questions" section
4. Paste your questions in this format:

```json
{
  "questions": [
    {
      "id": "unique_id_1",
      "question": "Which medication is first-line for hypertension?",
      "options": [
        "Amlodipine",
        "Lisinopril", 
        "Hydrochlorothiazide",
        "Metoprolol"
      ],
      "correctAnswer": 1,
      "explanation": "ACE inhibitors like Lisinopril are first-line treatment for hypertension in most patients.",
      "category": "Cardiology",
      "difficulty": "Medium"
    }
  ]
}
```

#### Method 2: Edit the Template File
1. Open `src/data/mcqTemplate.ts`
2. Replace sample questions with your own
3. Follow the exact format shown
4. Save and restart the app

### Step 4: Run Your App
```bash
# Start the development server
npm start

# Run on Android (make sure Android Studio is installed)
npm run android

# Run on iOS (macOS only, make sure Xcode is installed)  
npm run ios
```

## 📱 Complete Offline Functionality

### Local Data Storage
- **AsyncStorage**: All questions and progress stored locally
- **No Internet Required**: App works completely offline
- **Data Persistence**: Your data survives app restarts
- **Import/Export**: Backup and share your question bank

### Offline Features Available
- ✅ Take quizzes without internet
- ✅ View detailed explanations  
- ✅ Track progress and scores
- ✅ Add/edit/delete questions
- ✅ Export your data for backup
- ✅ Import questions from files

## 📚 MCQ Format Guide

### Required Fields
- **id**: Unique identifier (e.g., "cardio_001")
- **question**: Your question text
- **options**: Array of 4 answer choices
- **correctAnswer**: Index of correct answer (0=A, 1=B, 2=C, 3=D)
- **explanation**: Detailed explanation of the answer
- **category**: Subject area (e.g., "Cardiology")
- **difficulty**: "Easy", "Medium", or "Hard"

### Example Template
```json
{
  "questions": [
    {
      "id": "your_subject_001",
      "question": "Your question here?",
      "options": [
        "Option A",
        "Option B",
        "Option C", 
        "Option D"
      ],
      "correctAnswer": 1,
      "explanation": "Detailed explanation why B is correct and others are wrong.",
      "category": "Your Subject",
      "difficulty": "Medium"
    }
  ]
}
```

## 🛠️ Prerequisites

### Required Software

1. **Node.js** (version 18 or higher)
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version`

2. **For Android Development**:
   - **Android Studio** with Android SDK
   - **Java Development Kit (JDK)** 11 or higher
   - Configure ANDROID_HOME environment variable

3. **For iOS Development** (macOS only):
   - **Xcode** (latest version)
   - **iOS Simulator**
   - **CocoaPods**: `sudo gem install cocoapods`

## 📁 Project Structure

```
src/
├── components/              # Reusable UI components
│   └── QuestionCard.tsx    # Question display component
├── screens/                # App screens
│   ├── HomeScreen.tsx      # Main dashboard
│   ├── QuizScreen.tsx      # Quiz interface  
│   └── DataManagementScreen.tsx # MCQ management
├── services/               # App services
│   └── DataService.ts      # Local storage management
├── data/                   # Data models and templates
│   ├── questions.ts        # Question types and sample data
│   └── mcqTemplate.ts      # Template for adding MCQs
└── utils/                  # Utility functions
```

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm start

# Run on Android
npm run android

# Run on iOS (macOS only)
npm run ios

# Clean cache if needed
npx react-native start --reset-cache
```

## 💡 Tips for Adding Your MCQs

1. **Unique IDs**: Use descriptive IDs like "cardio_001", "neuro_015"
2. **Categories**: Group by subject for organized study
3. **Good Explanations**: Include why the answer is correct AND why others are wrong
4. **Difficulty Levels**: Mix Easy/Medium/Hard for varied practice
5. **Backup Data**: Use export feature to backup your questions

## 🚨 Troubleshooting

### Common Issues

1. **"Cannot find module" errors**
   ```bash
   rm -rf node_modules
   npm install
   ```

2. **Android build failures**
   - Ensure ANDROID_HOME is set correctly
   - Check Android SDK and build tools are installed

3. **Questions not showing**
   - Check JSON format in import
   - Verify questions are properly saved using Data Management screen

4. **App crashes**
   ```bash
   npx react-native start --reset-cache
   ```

## 📚 Sample Question Categories

Pre-configured categories include:
- Cardiology
- Neurology  
- Infectious Disease
- Pharmacology
- Surgery
- Pediatrics
- Internal Medicine
- Emergency Medicine

## 🎯 Next Steps

1. **Install Node.js and dependencies**
2. **Add your first batch of MCQs** using the template
3. **Test the quiz functionality**
4. **Export your data as backup**
5. **Share with classmates** (export/import feature)

## 📄 License

This project is for educational purposes. Ensure compliance with medical education content guidelines.

---

**🎓 Perfect for medical students, residents, and anyone preparing for medical exams!**

Your questions will be stored locally and work completely offline once added to the app.
