// Sample question data for the UWorld-like app
export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  timeToAnswer?: number;
}

export const sampleQuestions: Question[] = [
  {
    id: '1',
    question: 'Which of the following is the most common cause of acute myocardial infarction?',
    options: [
      'Coronary artery spasm',
      'Atherosclerotic plaque rupture',
      'Coronary artery embolism',
      'Aortic stenosis'
    ],
    correctAnswer: 1,
    explanation: 'Atherosclerotic plaque rupture is the most common cause of acute myocardial infarction, accounting for approximately 90% of cases. The rupture leads to platelet aggregation and thrombus formation, which can completely occlude the coronary artery.',
    category: 'Cardiology',
    difficulty: 'Medium'
  },
  {
    id: '2',
    question: 'A 35-year-old patient presents with sudden onset of severe headache. What is the most likely diagnosis?',
    options: [
      'Migraine',
      'Tension headache',
      'Subarachnoid hemorrhage',
      'Cluster headache'
    ],
    correctAnswer: 2,
    explanation: 'Sudden onset of severe headache, often described as "the worst headache of my life," is classic for subarachnoid hemorrhage. This is a medical emergency requiring immediate evaluation with CT scan or lumbar puncture.',
    category: 'Neurology',
    difficulty: 'Hard'
  },
  {
    id: '3',
    question: 'Which antibiotic is first-line treatment for uncomplicated urinary tract infection?',
    options: [
      'Ciprofloxacin',
      'Trimethoprim-sulfamethoxazole',
      'Amoxicillin',
      'Nitrofurantoin'
    ],
    correctAnswer: 3,
    explanation: 'Nitrofurantoin is considered first-line therapy for uncomplicated urinary tract infections in women. It has excellent urinary concentration and low resistance rates among common uropathogens.',
    category: 'Infectious Disease',
    difficulty: 'Easy'
  }
];

export interface UserProgress {
  questionsAnswered: number;
  correctAnswers: number;
  incorrectAnswers: number;
  accuracy: number;
  timeSpent: number;
  categoriesStudied: string[];
}

export const initialProgress: UserProgress = {
  questionsAnswered: 0,
  correctAnswers: 0,
  incorrectAnswers: 0,
  accuracy: 0,
  timeSpent: 0,
  categoriesStudied: []
};
