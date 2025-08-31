// Template for easy MCQ data entry
// Copy this template and fill in your questions

export const mcqTemplate = {
  "questions": [
    {
      "id": "unique_id_1",
      "question": "Your question text here?",
      "options": [
        "Option A",
        "Option B", 
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0,
      "explanation": "Detailed explanation of why the correct answer is right and others are wrong.",
      "category": "Category Name",
      "difficulty": "Easy"
    },
    {
      "id": "unique_id_2", 
      "question": "Another question text here?",
      "options": [
        "Option A",
        "Option B",
        "Option C", 
        "Option D"
      ],
      "correctAnswer": 1,
      "explanation": "Another detailed explanation.",
      "category": "Category Name",
      "difficulty": "Medium"
    }
  ]
};

// Instructions for adding your MCQs:
// 1. Copy the structure above
// 2. Replace with your questions and answers
// 3. correctAnswer is 0-indexed (0=A, 1=B, 2=C, 3=D)
// 4. difficulty can be "Easy", "Medium", or "Hard"
// 5. Save as a .json file or paste into the app's import feature

// Example with medical questions:
export const sampleMedicalMcqs = {
  "questions": [
    {
      "id": "cardio_001",
      "question": "Which medication is first-line treatment for hypertension in a 45-year-old patient with no comorbidities?",
      "options": [
        "Amlodipine",
        "Lisinopril", 
        "Hydrochlorothiazide",
        "Metoprolol"
      ],
      "correctAnswer": 1,
      "explanation": "ACE inhibitors like Lisinopril are first-line treatment for hypertension in most patients without contraindications. They reduce cardiovascular mortality and have renoprotective effects.",
      "category": "Cardiology",
      "difficulty": "Medium"
    },
    {
      "id": "neuro_001",
      "question": "A patient presents with sudden onset of weakness on the right side of the body and difficulty speaking. What is the most appropriate immediate action?",
      "options": [
        "Order an MRI",
        "Start aspirin therapy",
        "Check blood glucose and perform CT scan",
        "Administer tissue plasminogen activator (tPA)"
      ],
      "correctAnswer": 2,
      "explanation": "In suspected stroke, immediate evaluation includes checking blood glucose (hypoglycemia can mimic stroke) and CT scan to rule out hemorrhage before considering thrombolytic therapy.",
      "category": "Neurology", 
      "difficulty": "Hard"
    },
    {
      "id": "pharm_001",
      "question": "Which of the following best describes the mechanism of action of omeprazole?",
      "options": [
        "H2 receptor antagonist",
        "Proton pump inhibitor",
        "Antacid",
        "Prostaglandin analog"
      ],
      "correctAnswer": 1,
      "explanation": "Omeprazole is a proton pump inhibitor that irreversibly blocks the H+/K+-ATPase enzyme in gastric parietal cells, reducing acid production.",
      "category": "Pharmacology",
      "difficulty": "Easy"
    }
  ]
};

// How to use this template:
// 1. Create your questions following the exact format above
// 2. Ensure each question has a unique ID
// 3. Use the import feature in the app to load your questions
// 4. Questions will be stored locally on the device for offline use
