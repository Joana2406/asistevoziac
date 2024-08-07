import React from 'react';
import { View, Text, Button } from 'react-native';

const VoiceConfig: React.FC = () => {
    const handleConfigComplete = () => {
        // Lógica para completar la configuración de voz
        console.log('Configuración de voz completada');
    };

    return (
        <View>
            <Text>Configura tu voz e idioma</Text>
            {/* Añadir opciones de configuración aquí */}
            <Button title="Finalizar Configuración" onPress={handleConfigComplete} />
        </View>
    );
};

export default VoiceConfig;
