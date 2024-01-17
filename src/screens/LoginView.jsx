import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import LoginStyles from '../styles/LoginStyles';

const LoginView = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí puedes implementar la lógica de inicio de sesión
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
    // Implementa la lógica de autenticación aquí
  };

  return (
    <View style={LoginStyles.container}>
      <TextInput
        style={LoginStyles.input}
        placeholder="Usuario"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={LoginStyles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={LoginStyles.button} onPress={handleLogin}>
        <Text style={LoginStyles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginView;
