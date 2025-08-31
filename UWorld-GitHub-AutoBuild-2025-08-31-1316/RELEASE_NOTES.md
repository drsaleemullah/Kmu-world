# 📦 UWorld Medical Prep App - Release Package

## 🎯 What's Included

✅ **Complete React Native App** - Ready for Android & iOS
✅ **Offline MCQ System** - Add your own questions, works without internet  
✅ **Progress Tracking** - Local storage of scores and analytics
✅ **Easy Setup** - Detailed installation guide included
✅ **Template System** - Simple format for adding your MCQs

## 📱 Features

- **Your Own Questions**: Import/export MCQs in simple JSON format
- **Offline First**: Works completely without internet connection
- **Cross-Platform**: Runs on both Android and iOS
- **Progress Tracking**: Local score tracking and analytics
- **Professional UI**: Clean, medical exam focused interface
- **Easy MCQ Management**: Built-in tools for adding/editing questions

## 🚀 Quick Start

### 1. Prerequisites
- **Node.js** 18+ (Download from [nodejs.org](https://nodejs.org/))
- **Android Studio** (for Android development)
- **Xcode** (for iOS development, macOS only)

### 2. Installation
```bash
# Extract the ZIP file
# Navigate to the project folder
cd UWorld-Medical-Prep-App

# Install dependencies  
npm install

# Start the app
npm start
npm run android  # or npm run ios
```

### 3. Add Your MCQs
Use the **Data Management** screen in the app to import your questions in this format:

```json
{
  "questions": [
    {
      "id": "med_001",
      "question": "Which drug is first-line for hypertension?",
      "options": ["Amlodipine", "Lisinopril", "HCTZ", "Metoprolol"],
      "correctAnswer": 1,
      "explanation": "Lisinopril (ACE inhibitor) is first-line for most patients...",
      "category": "Cardiology",
      "difficulty": "Medium"
    }
  ]
}
```

## 📂 Package Contents

```
UWorld-Medical-Prep-App/
├── src/
│   ├── components/QuestionCard.tsx       # MCQ display component
│   ├── screens/HomeScreen.tsx            # Main dashboard
│   ├── screens/QuizScreenNew.tsx         # Quiz interface
│   ├── screens/DataManagementScreen.tsx  # MCQ import/export
│   ├── services/DataService.ts           # Offline storage
│   ├── data/mcqTemplate.ts               # Question templates
│   └── navigation/AppNavigator.tsx       # App navigation
├── package.json                          # Dependencies & scripts
├── README.md                             # Detailed documentation
├── SETUP_GUIDE.md                        # Quick setup instructions
└── Configuration files (babel, metro, etc.)
```

## 💡 Key Features for Medical Students

1. **Custom Question Bank**: Add your own medical MCQs
2. **Offline Study**: No internet required after setup
3. **Progress Analytics**: Track your improvement over time
4. **Category Organization**: Organize by medical subjects
5. **Detailed Explanations**: Learn from comprehensive answer explanations
6. **Export/Import**: Share question banks with classmates

## 🛠️ Technical Details

- **Framework**: React Native 0.73.6
- **Storage**: AsyncStorage (local device storage)
- **Navigation**: React Navigation 6.x
- **Platform**: Android & iOS compatible
- **Language**: TypeScript for better code quality

## 📞 Support

- Check `README.md` for detailed setup instructions
- See `SETUP_GUIDE.md` for quick start
- Ensure all prerequisites are installed before reporting issues

## 📄 License

Educational use. Perfect for medical students, residents, and exam preparation.

---

**Ready to revolutionize your medical exam preparation!** 🎓

Extract, install Node.js, run `npm install`, and start studying with your own questions!
