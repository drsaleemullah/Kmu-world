import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Question} from '../data/questions';

interface QuestionCardProps {
  question: Question;
  selectedAnswer?: number;
  onAnswerSelect: (answerIndex: number) => void;
  showExplanation?: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  onAnswerSelect,
  showExplanation = false,
}) => {
  const getOptionStyle = (index: number) => {
    if (selectedAnswer === undefined) {
      return styles.option;
    }
    
    if (index === question.correctAnswer) {
      return [styles.option, styles.correctOption];
    }
    
    if (index === selectedAnswer && index !== question.correctAnswer) {
      return [styles.option, styles.incorrectOption];
    }
    
    return styles.option;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.category}>{question.category}</Text>
        <Text style={styles.difficulty}>{question.difficulty}</Text>
      </View>
      
      <Text style={styles.questionText}>{question.question}</Text>
      
      <View style={styles.optionsContainer}>
        {question.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={getOptionStyle(index)}
            onPress={() => onAnswerSelect(index)}
            disabled={selectedAnswer !== undefined}
          >
            <Text style={styles.optionLabel}>{String.fromCharCode(65 + index)}.</Text>
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      
      {showExplanation && selectedAnswer !== undefined && (
        <View style={styles.explanationContainer}>
          <Text style={styles.explanationTitle}>Explanation:</Text>
          <Text style={styles.explanationText}>{question.explanation}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  category: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  difficulty: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '500',
  },
  questionText: {
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 20,
    color: '#333',
  },
  optionsContainer: {
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  correctOption: {
    backgroundColor: '#d4edda',
    borderColor: '#28a745',
  },
  incorrectOption: {
    backgroundColor: '#f8d7da',
    borderColor: '#dc3545',
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#333',
  },
  optionText: {
    fontSize: 16,
    flex: 1,
    color: '#333',
  },
  explanationContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  explanationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  explanationText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#666',
  },
});

export default QuestionCard;
