import React, { useState } from "react";
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
  Modal,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import RegisterStyles from "../../styles/RegisterStyles";
import Axios from "axios";

const RegisterView = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  const handleRegister = async () => {
    try {
      const response = await Axios.post(
        "http://192.168.0.3:8000/api/login/register",
        {
          name,
          email,
          password,
        }
      );
      if (response.data && response.data.token) {
        // Mostrar modal de éxito
        setModalVisible(true);
        // Opcional: También puedes esperar unos segundos antes de redireccionar
        setTimeout(() => {
          setModalVisible(false);
          navigation.navigate('Login');
        }, 3000);
      } else {
        // Aquí puedes manejar otros escenarios de respuesta del servidor si es necesario.
        console.error("Error en la respuesta del servidor:", response.data);
      }
    } catch (error) {
      // Manejo de errores en caso de fallo en la solicitud.
      console.error("Error al realizar la solicitud de registro:", error);
    }
  };
  const handleLoginRedirect = () => {
    navigation.navigate("Login");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? -100 : -100}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={RegisterStyles.container}>
          <Image
            source={require("../../../assets/iconoBlanco.png")}
            style={RegisterStyles.icon}
          />
          <Text style={RegisterStyles.iconText}>
            ¡Descubre un festín de{" "}
            <Text style={RegisterStyles.highlightText1}>ofertas frescas</Text> y
            regístrate para{" "}
            <Text style={RegisterStyles.highlightText2}>saborearlas</Text>!
          </Text>
          <TextInput
            style={RegisterStyles.input}
            placeholder="Usuario"
            onChangeText={(text) => setName(text)}
            value={name}
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
          <TouchableOpacity
            style={RegisterStyles.registerButton}
            onPress={handleRegister}
          >
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
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={RegisterStyles.modalContainer}>
              <View style={RegisterStyles.modalContent}>
                <Text style={RegisterStyles.modalText}>Usuario creado con éxito.</Text>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    navigation.navigate('Login');
                  }}
                >
                  <Text style={RegisterStyles.modalCloseButton}>Cerrar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default RegisterView;
