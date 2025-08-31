import AsyncStorage from '@react-native-async-storage/async-storage';
import {Question, UserProgress} from '../data/questions';

const QUESTIONS_KEY = 'user_questions';
const PROGRESS_KEY = 'user_progress';

export class DataService {
  // Save questions to local storage
  static async saveQuestions(questions: Question[]): Promise<void> {
    try {
      const jsonValue = JSON.stringify(questions);
      await AsyncStorage.setItem(QUESTIONS_KEY, jsonValue);
    } catch (error) {
      console.error('Error saving questions:', error);
      throw error;
    }
  }

  // Load questions from local storage
  static async loadQuestions(): Promise<Question[]> {
    try {
      const jsonValue = await AsyncStorage.getItem(QUESTIONS_KEY);
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (error) {
      console.error('Error loading questions:', error);
      return [];
    }
  }

  // Add a single question
  static async addQuestion(question: Question): Promise<void> {
    try {
      const existingQuestions = await this.loadQuestions();
      const updatedQuestions = [...existingQuestions, question];
      await this.saveQuestions(updatedQuestions);
    } catch (error) {
      console.error('Error adding question:', error);
      throw error;
    }
  }

  // Update a question
  static async updateQuestion(questionId: string, updatedQuestion: Question): Promise<void> {
    try {
      const existingQuestions = await this.loadQuestions();
      const questionIndex = existingQuestions.findIndex(q => q.id === questionId);
      
      if (questionIndex !== -1) {
        existingQuestions[questionIndex] = updatedQuestion;
        await this.saveQuestions(existingQuestions);
      }
    } catch (error) {
      console.error('Error updating question:', error);
      throw error;
    }
  }

  // Delete a question
  static async deleteQuestion(questionId: string): Promise<void> {
    try {
      const existingQuestions = await this.loadQuestions();
      const filteredQuestions = existingQuestions.filter(q => q.id !== questionId);
      await this.saveQuestions(filteredQuestions);
    } catch (error) {
      console.error('Error deleting question:', error);
      throw error;
    }
  }

  // Get questions by category
  static async getQuestionsByCategory(category: string): Promise<Question[]> {
    try {
      const allQuestions = await this.loadQuestions();
      return allQuestions.filter(q => q.category === category);
    } catch (error) {
      console.error('Error loading questions by category:', error);
      return [];
    }
  }

  // Save user progress
  static async saveProgress(progress: UserProgress): Promise<void> {
    try {
      const jsonValue = JSON.stringify(progress);
      await AsyncStorage.setItem(PROGRESS_KEY, jsonValue);
    } catch (error) {
      console.error('Error saving progress:', error);
      throw error;
    }
  }

  // Load user progress
  static async loadProgress(): Promise<UserProgress> {
    try {
      const jsonValue = await AsyncStorage.getItem(PROGRESS_KEY);
      return jsonValue != null ? JSON.parse(jsonValue) : {
        questionsAnswered: 0,
        correctAnswers: 0,
        incorrectAnswers: 0,
        accuracy: 0,
        timeSpent: 0,
        categoriesStudied: []
      };
    } catch (error) {
      console.error('Error loading progress:', error);
      return {
        questionsAnswered: 0,
        correctAnswers: 0,
        incorrectAnswers: 0,
        accuracy: 0,
        timeSpent: 0,
        categoriesStudied: []
      };
    }
  }

  // Import questions from JSON string
  static async importQuestions(jsonData: string): Promise<number> {
    try {
      const importedQuestions: Question[] = JSON.parse(jsonData);
      const existingQuestions = await this.loadQuestions();
      
      // Merge questions, avoiding duplicates by ID
      const mergedQuestions = [...existingQuestions];
      let addedCount = 0;
      
      for (const question of importedQuestions) {
        if (!existingQuestions.find(q => q.id === question.id)) {
          mergedQuestions.push(question);
          addedCount++;
        }
      }
      
      await this.saveQuestions(mergedQuestions);
      return addedCount;
    } catch (error) {
      console.error('Error importing questions:', error);
      throw error;
    }
  }

  // Export questions to JSON string
  static async exportQuestions(): Promise<string> {
    try {
      const questions = await this.loadQuestions();
      return JSON.stringify(questions, null, 2);
    } catch (error) {
      console.error('Error exporting questions:', error);
      throw error;
    }
  }

  // Clear all data
  static async clearAllData(): Promise<void> {
    try {
      await AsyncStorage.multiRemove([QUESTIONS_KEY, PROGRESS_KEY]);
    } catch (error) {
      console.error('Error clearing data:', error);
      throw error;
    }
  }

  // Get statistics
  static async getStatistics(): Promise<{
    totalQuestions: number;
    categoriesCount: number;
    categories: string[];
  }> {
    try {
      const questions = await this.loadQuestions();
      const categories = [...new Set(questions.map(q => q.category))];
      
      return {
        totalQuestions: questions.length,
        categoriesCount: categories.length,
        categories: categories
      };
    } catch (error) {
      console.error('Error getting statistics:', error);
      return {
        totalQuestions: 0,
        categoriesCount: 0,
        categories: []
      };
    }
  }
}
