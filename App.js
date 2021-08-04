import React from 'react';
import { LogBox } from 'react-native';

// Internal components.
import Start from './components/Start';
import Chat from './components/Chat';

// Native-Driven gesture management for improved touch-based experiences.
import 'react-native-gesture-handler';

// Routing and navigation for Expo and React Native apps.
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

// Ignore error and warning alerts inside the app (show only in the console).
LogBox.ignoreAllLogs();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='privateChat'>
        <Stack.Screen name='privateChat' component={Start} />
        <Stack.Screen
          name='Chat'
          component={Chat}
          // Pass route prop as argument to the screen to set component title.
          options={({ route }) => ({
            title: `${route.params.name}'s Chat`,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}