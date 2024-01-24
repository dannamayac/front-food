import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';

const Tab = createBottomTabNavigator();

const HomeContent = () => {
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
        const response = await Axios.get('http://192.168.0.6:8000/api/products/all', {
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
    <View style={styles.content}>
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

const HomeView = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Ofertas" component={HomeContent} />
      <Tab.Screen name="Recetas" component={HomeContent} />

      {/* Agrega otras pestañas aquí si es necesario */}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeView;
