import React from 'react';

// Change default font to Monserrat.
import AppLoading from 'expo-app-loading';

// Internal components.
import Start from './components/Start';
import Chat from './components/Chat';

// Native-Driven gesture management for improved touch-based experiences.
import 'react-native-gesture-handler';

// Routing and navigation for Expo and React Native apps.
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='miniChat'>
        <Stack.Screen name='miniChat' component={Start} />
        <Stack.Screen
          name='Chat'
          component={Chat}
          // Pass route prop as argument to the screen to set component title.
          options={({ route }) => ({
            title: route.params.name,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}