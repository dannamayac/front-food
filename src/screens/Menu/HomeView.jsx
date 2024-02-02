import React, { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Card, Image } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import homeStyles from '../../styles/HomeStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AddProductModal from '../../components/AddProductModal';
import EditProductModal from '../../components/EditProductModal';

const HomeView = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState('');
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const toggleAddModal = () => {
    setIsAddModalVisible(!isAddModalVisible);
  };

  const toggleEditModal = () => {
    setIsEditModalVisible(!isEditModalVisible);
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const addNewProduct = (newProduct) => {
    // Lógica para enviar el nuevo producto al backend y actualizar la lista
    // ...

    // Cierra el modal después de agregar el producto
    toggleMenu();
  };

  const editProduct = (editedProduct) => {
    // Lógica para enviar la edición del producto al backend y actualizar la lista
    // ...

    // Cierra el modal después de editar el producto
    toggleMenu();
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
        const response = await Axios.get('http://3.136.134.235:8000/api/products/all', {
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

      {/* Botón principal para mostrar/ocultar el menú */}
      <TouchableOpacity style={homeStyles.menuButton} onPress={toggleMenu}>
        <Icon name={isMenuVisible ? 'times' : 'plus'} size={20} color="#fff" />
      </TouchableOpacity>

      {/* Botón para agregar producto */}
      {isMenuVisible && (
        <TouchableOpacity style={homeStyles.addButton} onPress={toggleAddModal}>
          <Text style={homeStyles.addButtonText}>Agregar Producto</Text>
        </TouchableOpacity>
      )}

      {/* Botón para editar productos */}
      {isMenuVisible && (
        <TouchableOpacity style={homeStyles.editButton} onPress={toggleEditModal}>
          <Text style={homeStyles.editButtonText}>Editar Productos</Text>
        </TouchableOpacity>
      )}

      {/* Modal para agregar producto */}
      <AddProductModal
        isVisible={isAddModalVisible}
        onClose={toggleAddModal}
        onAddProduct={addNewProduct}
      />

      {/* Modal para editar productos */}
      <EditProductModal
        isVisible={isEditModalVisible}
        onClose={toggleEditModal}
        onEditProduct={editProduct}
      />
    </View>
  );
};

export default HomeView;