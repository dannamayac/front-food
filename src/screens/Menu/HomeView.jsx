import React, { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Card, Image } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import homeStyles from '../../styles/HomeStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AddProductModal from '../../components/AddProductModal';

const HomeView = () => {
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const addNewProduct = (newProduct) => {
    // Lógica para enviar el nuevo producto al backend y actualizar la lista
    // ...

    // Cierra el modal después de agregar el producto
    toggleModal();
  };

  useEffect(() => {
    // Obtener el token almacenado en AsyncStorage o de donde lo estés guardando
    const fetchToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        if (storedToken) {
          setToken(storedToken);
        }
      } catch (error) {
        console.error('Error al obtener el token:', error);
      }
    };

    fetchToken();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get('http://192.168.0.3:8000/api/products/all', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error al cargar datos:', error);
      }
    };

    if (token) {
      fetchData();
    }
  }, [token]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={homeStyles.scrollView}>
        <View style={homeStyles.content}>
          <View style={homeStyles.cardsContainer}>
            {products.map((product) => (
              <View key={product.id} style={homeStyles.shadowContainer}>
                <Card containerStyle={homeStyles.cardContainer}>
                  <Image source={{ uri: product.image }} style={homeStyles.cardImage} />
                  <Text style={homeStyles.cardTitle}>{product.name}</Text>
                  <Text style={homeStyles.cardExpiration}>Fecha expiración: {product.expiration_date}</Text>
                  <Text style={homeStyles.cardPrice}>Precio: ${product.price}</Text>
                </Card>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Botón para mostrar el modal */}
      <TouchableOpacity
        style={homeStyles.addButton}
        onPress={toggleModal}
      >
        <Icon name="plus" size={20} color="#fff" />
      </TouchableOpacity>

      {/* Modal para agregar producto */}
      <AddProductModal
        isVisible={isModalVisible}
        onClose={toggleModal}
        onAddProduct={addNewProduct}
      />
    </View>
  );
};

export default HomeView;
