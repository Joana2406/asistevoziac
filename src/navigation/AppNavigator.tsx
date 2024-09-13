// src/navigation/AppNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import VoiceConfigScreen from '../screens/VoiceConfigScreen';
import ChatScreen from '../screens/ChatScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import VoiceSettingsScreen from '../screens/VoiceSettingsScreen';


const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="VoiceConfig" component={VoiceConfigScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="VoiceSettings" component={VoiceSettingsScreen} />

    </Stack.Navigator>

  );
};

export default AppNavigator;
