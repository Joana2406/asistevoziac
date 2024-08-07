import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define la lista de parámetros para la navegación
export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  VoiceConfig: undefined;
  Home: undefined;
};

// Define el tipo de navegación para la pantalla de login
export type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;
