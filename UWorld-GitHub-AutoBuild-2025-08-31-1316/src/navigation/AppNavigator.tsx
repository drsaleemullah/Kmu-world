import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import QuizScreenNew from '../screens/QuizScreenNew';
import DataManagementScreen from '../screens/DataManagementScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{title: 'UWorld Medical Prep'}}
      />
    </Stack.Navigator>
  );
}

function QuizStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Quiz" 
        component={QuizScreenNew}
        options={{title: 'Practice Quiz'}}
      />
    </Stack.Navigator>
  );
}

function DataStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Data" 
        component={DataManagementScreen}
        options={{title: 'MCQ Management'}}
      />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        }}>
        <Tab.Screen 
          name="HomeTab" 
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => null, // You can add icons later
          }}
        />
        <Tab.Screen 
          name="QuizTab" 
          component={QuizStack}
          options={{
            tabBarLabel: 'Quiz',
            tabBarIcon: () => null,
          }}
        />
        <Tab.Screen 
          name="DataTab" 
          component={DataStack}
          options={{
            tabBarLabel: 'MCQs',
            tabBarIcon: () => null,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
