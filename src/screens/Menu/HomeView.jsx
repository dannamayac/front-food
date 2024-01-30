import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import homeStyles from '../../styles/HomeStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HomeView = () => {
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState('');

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
            Authorization: `Bearer ${token}`, // Agregar el token al encabezado
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
    <View style={homeStyles.content}>
      <Icon name="home" size={30} />
      <Card>
        <Card.Title>Bienvenido a la aplicación</Card.Title>
        <Card.Divider />
        {products.map((product) => (
          <View key={product.id}>
            <Text>Nombre: {product.name}</Text>
            <Text>Fecha de vencimiento: {product.expiration_date}</Text>
            <Card.Divider />
          </View>
        ))}
      </Card>
    </View>
  );
};

export default HomeView;
