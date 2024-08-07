import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const Register: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        // Lógica de registro
        console.log('Nombre:', name);
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <View>
            <Text>Nombre</Text>
            <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Ingresa tu nombre"
            />
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
            <Button title="Registrarse" onPress={handleRegister} />
        </View>
    );
};

export default Register;
