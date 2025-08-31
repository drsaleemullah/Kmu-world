import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import {Question} from '../data/questions';
import {DataService} from '../services/DataService';
import QuestionCard from '../components/QuestionCard';

const QuizScreen: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | undefined>();
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const loadQuestions = async () => {
    try {
      const loadedQuestions = await DataService.loadQuestions();
      if (loadedQuestions.length === 0) {
        Alert.alert(
          'No Questions Found',
          'Please add some questions first using the Data Management screen.',
          [{text: 'OK'}]
        );
      } else {
        // Shuffle questions for variety
        const shuffled = [...loadedQuestions].sort(() => Math.random() - 0.5);
        setQuestions(shuffled);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to load questions');
    }
  };

  const startQuiz = () => {
    if (questions.length === 0) {
      Alert.alert('No Questions', 'Please add questions first');
      return;
    }
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizCompleted(false);
    setSelectedAnswer(undefined);
    setShowExplanation(false);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== undefined) return;
    
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    // Update score
    if (answerIndex === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    // Save progress
    updateProgress(answerIndex === questions[currentQuestionIndex].correctAnswer);
  };

  const updateProgress = async (isCorrect: boolean) => {
    try {
      const currentProgress = await DataService.loadProgress();
      const updatedProgress = {
        ...currentProgress,
        questionsAnswered: currentProgress.questionsAnswered + 1,
        correctAnswers: isCorrect ? currentProgress.correctAnswers + 1 : currentProgress.correctAnswers,
        incorrectAnswers: isCorrect ? currentProgress.incorrectAnswers : currentProgress.incorrectAnswers + 1,
        accuracy: ((isCorrect ? currentProgress.correctAnswers + 1 : currentProgress.correctAnswers) / (currentProgress.questionsAnswered + 1)) * 100,
        categoriesStudied: Array.from(new Set([
          ...currentProgress.categoriesStudied,
          questions[currentQuestionIndex].category
        ]))
      };
      await DataService.saveProgress(updatedProgress);
    } catch (error) {
      console.error('Failed to update progress:', error);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(undefined);
      setShowExplanation(false);
    } else {
      // Quiz completed
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setQuizStarted(false);
    setQuizCompleted(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(undefined);
    setShowExplanation(false);
    setScore(0);
    loadQuestions(); // Reshuffle questions
  };

  useEffect(() => {
    loadQuestions();
  }, []);

  const currentQuestion = questions[currentQuestionIndex];

  if (!quizStarted) {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.title}>Practice Quiz</Text>
          <Text style={styles.subtitle}>
            Test your knowledge with {questions.length} questions
          </Text>
          
          {questions.length > 0 ? (
            <TouchableOpacity style={styles.startButton} onPress={startQuiz}>
              <Text style={styles.startButtonText}>Start Quiz</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity 
              style={styles.disabledButton}
              onPress={() => Alert.alert('No Questions', 'Please add questions using Data Management')}
            >
              <Text style={styles.disabledButtonText}>No Questions Available</Text>
            </TouchableOpacity>
          )}
          
          <TouchableOpacity style={styles.refreshButton} onPress={loadQuestions}>
            <Text style={styles.refreshButtonText}>Refresh Questions</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <View style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Quiz Completed!</Text>
          <Text style={styles.scoreText}>
            Your Score: {score}/{questions.length}
          </Text>
          <Text style={styles.percentageText}>{percentage}%</Text>
          
          <TouchableOpacity style={styles.restartButton} onPress={restartQuiz}>
            <Text style={styles.restartButtonText}>Take Another Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.questionCounter}>
          Question {currentQuestionIndex + 1} of {questions.length}
        </Text>
        <Text style={styles.scoreDisplay}>Score: {score}</Text>
      </View>
      
      <QuestionCard
        question={currentQuestion}
        selectedAnswer={selectedAnswer}
        onAnswerSelect={handleAnswerSelect}
        showExplanation={showExplanation}
      />
      
      {showExplanation && (
        <View style={styles.navigationContainer}>
          <TouchableOpacity style={styles.nextButton} onPress={nextQuestion}>
            <Text style={styles.nextButtonText}>
              {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  startButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 15,
  },
  startButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#ccc',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 15,
  },
  disabledButtonText: {
    color: '#666',
    fontSize: 18,
  },
  refreshButton: {
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  refreshButtonText: {
    color: '#007AFF',
    fontSize: 14,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  questionCounter: {
    fontSize: 16,
    color: '#666',
  },
  scoreDisplay: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  navigationContainer: {
    padding: 20,
  },
  nextButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  resultTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 24,
    color: '#007AFF',
    marginBottom: 10,
  },
  percentageText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#28a745',
    marginBottom: 30,
  },
  restartButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
  },
  restartButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default QuizScreen;
