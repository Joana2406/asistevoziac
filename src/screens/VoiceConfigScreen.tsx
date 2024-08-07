// src/screens/VoiceSettingsScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  VoiceSettings: undefined;
  Chat: undefined;
};

type VoiceSettingsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'VoiceSettings'>;

interface Props {
  navigation: VoiceSettingsScreenNavigationProp;
}

const VoiceSettingsScreen: React.FC<Props> = ({ navigation }) => {
  const handleContinue = () => {
    // Lógica para completar la configuración y redirigir a la pantalla de chat
    navigation.navigate('Chat');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Configura tu voz e idioma</Text>
      {/* Aquí iría el código para la configuración */}
      <Button title="Continuar" onPress={handleContinue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default VoiceSettingsScreen;
