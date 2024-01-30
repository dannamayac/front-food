import React, { useState } from 'react';
import { View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,} from 'react-native';
import RegisterStyles from '../../styles/RegisterStyles';

const RegisterView = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Implementa la lógica de registro aquí
    console.log('Usuario:', username);
    console.log('Correo:', email);
    console.log('Contraseña:', password);
    // Puedes agregar lógica adicional para enviar la información de registro al servidor
  };

  const handleLoginRedirect = () => {
    // Implementa la lógica para redirigir a la vista de inicio de sesión
    console.log('Redirigiendo a la vista de inicio de sesión');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? -100 : -100}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={RegisterStyles.container}>
          <Image
            source={require('../../../assets/iconoBlanco.png')}
            style={RegisterStyles.icon}
          />
          <Text style={RegisterStyles.iconText}>
            ¡Descubre un festín de <Text style={RegisterStyles.highlightText1}>ofertas frescas</Text> y regístrate para <Text style={RegisterStyles.highlightText2}>saborearlas</Text>!
          </Text>
          <TextInput
            style={RegisterStyles.input}
            placeholder="Usuario"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
          <TextInput
            style={RegisterStyles.input}
            placeholder="Correo electrónico"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            style={RegisterStyles.input}
            placeholder="Contraseña"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TouchableOpacity style={RegisterStyles.registerButton} onPress={handleRegister}>
            <Text style={RegisterStyles.registerButtonText}>Registrarse</Text>
          </TouchableOpacity>

          <View style={RegisterStyles.loginRedirectContainer}>
            <Text style={RegisterStyles.loginRedirectText}>
              ¿Ya tienes una cuenta?
            </Text>
            <TouchableOpacity onPress={handleLoginRedirect}>
              <Text style={RegisterStyles.loginRedirectButton}>
                Inicia sesión aquí
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default RegisterView;
