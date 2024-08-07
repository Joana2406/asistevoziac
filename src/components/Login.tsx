import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import { loginUser } from '../utils/authUtils';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const user = await loginUser(email, password);
      console.log('Usuario autenticado:', user);
      // Redirigir al usuario a la pantalla de bienvenida u otra pantalla
    } catch (error) {
      Alert.alert('Error', 'El inicio de sesión falló. Verifique sus credenciales.');
    }
  };

  return (
    <View>
      <Text>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Ingresa tu email"
        keyboardType="email-address"
      />
      <Text>Contraseña</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Ingresa tu contraseña"
        secureTextEntry
      />
      <Button title="Iniciar Sesión" onPress={handleLogin} />
    </View>
  );
};

export default Login;
