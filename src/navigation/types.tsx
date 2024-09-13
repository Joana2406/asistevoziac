import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// lista de parámetros de navegación
export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  VoiceConfig: undefined;
  Home: undefined;
};

//  tipo de navegación de login
export type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;
