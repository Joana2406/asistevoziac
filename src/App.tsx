import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'; // Importar NavigationContainer
import AppNavigator from '../src/navigation/AppNavigator';

const App: React.FC = () => {
  return (
    <NavigationContainer> {/* Envolver AppNavigator en NavigationContainer */}
      <StatusBar style="auto" />
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
