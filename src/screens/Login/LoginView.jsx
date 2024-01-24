import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import LoginStyles from '../../styles/LoginStyles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      console.log('Enviando solicitud de inicio de sesión...');
      
      const response = await Axios.post('http://192.168.0.6:8000/api/login/login', {
        email,
        password,
      });
  
      console.log('Respuesta del servidor:', response.data);
  
      const token = response.data.token;
  
      // Almacenar el token de manera segura
      await AsyncStorage.setItem('token', token);
  
      console.log('Inicio de sesión exitoso. Navegando a la pantalla Home.');
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error de inicio de sesión:', error);
  
      // Manejar el error (mostrar mensaje al usuario, etc.)
    }
  };
  
  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const handleForgotPassword = () => {
    // Implementa la lógica de redirección a la vista de recuperación de contraseña
    console.log('Redirigiendo a la vista de recuperación de contraseña');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -100} // Ajusta el desplazamiento vertical según tus necesidades
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={LoginStyles.container}>
          <Image
            source={require('../../../assets/iconoBlanco.png')}
            style={LoginStyles.icon}
          />
          <Text style={LoginStyles.loginMessage}>
            <Text style={LoginStyles.highlightText1}>¡Bienvenido de vuelta!</Text> Conéctate y descubre un mundo de <Text style={LoginStyles.highlightText2}>sabores</Text> en cada clic.
          </Text>
          <TextInput
            style={LoginStyles.input}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            style={LoginStyles.input}
            placeholder="Contraseña"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TouchableOpacity style={LoginStyles.loginButton} onPress={handleLogin}>
            <Text style={LoginStyles.loginButtonText}>Iniciar sesión</Text>
          </TouchableOpacity>

          <View style={LoginStyles.additionalOptionsContainer}>
            <View style={LoginStyles.registerContainer}>
              <Text style={LoginStyles.registerText}>
                ¿No tienes una cuenta?
              </Text>
              <TouchableOpacity onPress={handleRegister}>
                <Text style={LoginStyles.registerButton}>
                  Regístrate aquí
                </Text>
              </TouchableOpacity>
            </View>

            <View style={LoginStyles.lostPasswordContainer}>
              <Text style={LoginStyles.lostPasswordText}>
                ¿Olvidaste tu contraseña?
              </Text>
              <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={LoginStyles.lostPasswordButton}>
                  Recupérala aquí
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginView;