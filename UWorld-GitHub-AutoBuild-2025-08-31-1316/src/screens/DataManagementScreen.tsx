import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import {DataService} from '../services/DataService';
import {Question} from '../data/questions';

const DataManagementScreen: React.FC = () => {
  const [importText, setImportText] = useState('');
  const [exportText, setExportText] = useState('');
  const [stats, setStats] = useState({
    totalQuestions: 0,
    categoriesCount: 0,
    categories: [] as string[]
  });

  const loadStats = async () => {
    const statistics = await DataService.getStatistics();
    setStats(statistics);
  };

  const handleImport = async () => {
    if (!importText.trim()) {
      Alert.alert('Error', 'Please paste your MCQ data in JSON format');
      return;
    }

    try {
      const addedCount = await DataService.importQuestions(importText);
      Alert.alert(
        'Success', 
        `Successfully imported ${addedCount} new questions!`,
        [{text: 'OK', onPress: () => {
          setImportText('');
          loadStats();
        }}]
      );
    } catch (error) {
      Alert.alert('Error', 'Invalid JSON format. Please check your data format.');
    }
  };

  const handleExport = async () => {
    try {
      const exportData = await DataService.exportQuestions();
      setExportText(exportData);
      Alert.alert('Success', 'Questions exported! You can copy the text below.');
    } catch (error) {
      Alert.alert('Error', 'Failed to export questions');
    }
  };

  const handleClearData = () => {
    Alert.alert(
      'Clear All Data',
      'Are you sure you want to delete all questions and progress? This cannot be undone.',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Delete', style: 'destructive', onPress: async () => {
          await DataService.clearAllData();
          Alert.alert('Success', 'All data cleared');
          loadStats();
        }}
      ]
    );
  };

  const addSampleData = async () => {
    const sampleQuestions: Question[] = [
      {
        id: 'sample_001',
        question: 'What is the most common cause of acute myocardial infarction?',
        options: [
          'Coronary artery spasm',
          'Atherosclerotic plaque rupture',
          'Coronary artery embolism',
          'Aortic stenosis'
        ],
        correctAnswer: 1,
        explanation: 'Atherosclerotic plaque rupture is the most common cause of acute MI, accounting for approximately 90% of cases.',
        category: 'Cardiology',
        difficulty: 'Medium'
      },
      {
        id: 'sample_002',
        question: 'Which antibiotic is first-line for uncomplicated UTI?',
        options: [
          'Ciprofloxacin',
          'Trimethoprim-sulfamethoxazole',
          'Amoxicillin',
          'Nitrofurantoin'
        ],
        correctAnswer: 3,
        explanation: 'Nitrofurantoin is considered first-line therapy for uncomplicated UTIs with excellent urinary concentration and low resistance rates.',
        category: 'Infectious Disease',
        difficulty: 'Easy'
      }
    ];

    try {
      for (const question of sampleQuestions) {
        await DataService.addQuestion(question);
      }
      Alert.alert('Success', 'Sample questions added!');
      loadStats();
    } catch (error) {
      Alert.alert('Error', 'Failed to add sample questions');
    }
  };

  React.useEffect(() => {
    loadStats();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>MCQ Data Management</Text>
      
      {/* Statistics */}
      <View style={styles.statsContainer}>
        <Text style={styles.sectionTitle}>Current Data</Text>
        <Text style={styles.statText}>Total Questions: {stats.totalQuestions}</Text>
        <Text style={styles.statText}>Categories: {stats.categoriesCount}</Text>
        {stats.categories.length > 0 && (
          <Text style={styles.statText}>
            Subjects: {stats.categories.join(', ')}
          </Text>
        )}
      </View>

      {/* Import Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Import Your MCQs</Text>
        <Text style={styles.instructionText}>
          Paste your MCQ data in JSON format below:
        </Text>
        <TextInput
          style={styles.textArea}
          multiline
          placeholder={`{
  "questions": [
    {
      "id": "unique_id",
      "question": "Your question?",
      "options": ["A", "B", "C", "D"],
      "correctAnswer": 0,
      "explanation": "Explanation here",
      "category": "Subject",
      "difficulty": "Easy"
    }
  ]
}`}
          value={importText}
          onChangeText={setImportText}
        />
        <TouchableOpacity style={styles.primaryButton} onPress={handleImport}>
          <Text style={styles.primaryButtonText}>Import Questions</Text>
        </TouchableOpacity>
      </View>

      {/* Export Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Export Your MCQs</Text>
        <TouchableOpacity style={styles.secondaryButton} onPress={handleExport}>
          <Text style={styles.secondaryButtonText}>Export All Questions</Text>
        </TouchableOpacity>
        {exportText ? (
          <TextInput
            style={styles.textArea}
            multiline
            value={exportText}
            editable={false}
          />
        ) : null}
      </View>

      {/* Sample Data */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sample Data</Text>
        <TouchableOpacity style={styles.secondaryButton} onPress={addSampleData}>
          <Text style={styles.secondaryButtonText}>Add Sample Questions</Text>
        </TouchableOpacity>
      </View>

      {/* Danger Zone */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Danger Zone</Text>
        <TouchableOpacity style={styles.dangerButton} onPress={handleClearData}>
          <Text style={styles.dangerButtonText}>Clear All Data</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  statsContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  statText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  instructionText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    height: 150,
    backgroundColor: '#f9f9f9',
    textAlignVertical: 'top',
    fontSize: 12,
    marginBottom: 10,
  },
  primaryButton: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#007AFF',
    marginBottom: 10,
  },
  secondaryButtonText: {
    color: '#007AFF',
    fontSize: 16,
  },
  dangerButton: {
    backgroundColor: '#dc3545',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  dangerButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DataManagementScreen;
