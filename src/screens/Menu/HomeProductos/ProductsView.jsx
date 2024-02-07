// ProductsView.js
import React, { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Card, Image } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import ProductStyles from '../../../styles/ProductStyles'; 
import Icon from 'react-native-vector-icons/FontAwesome5';
import AddProductModal from '../../../components/AddProductModal';
import EditProductModal from '../../../components/EditProductModal';

const ProductsView = () => {
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

  const addNewProduct = async (newProduct) => {
    try {
      const response = await Axios.post(`${process.env.EXPO_PUBLIC_BASE_URL}/products/insert`, newProduct, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Actualizar la lista de productos
      setProducts([...products, response.data]);
    } catch (error) {
      console.error('Error al agregar el producto:', error);
    }
    toggleMenu();
  };

  const editProduct = async (editedProduct) => {
    try {
      const response = await Axios.put(`${process.env.EXPO_PUBLIC_BASE_URL}/products/update`, editedProduct, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Actualizar la lista de productos
      const updatedProducts = products.map((product) => {
        if (product.id === editedProduct.id) {
          return response.data;
        }
        return product;
      });
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Error al editar el producto:', error);
    }
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
        const response = await Axios.get(`${process.env.EXPO_PUBLIC_BASE_URL}/products/all`, {
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
      <ScrollView style={ProductStyles.scrollView}>
        <View style={ProductStyles.content}>
          <View style={ProductStyles.cardsContainer}>
            {products.map((product) => (
              <View key={product.id} style={ProductStyles.shadowContainer}>
                <Card containerStyle={ProductStyles.cardContainer}>
                  <Image source={{ uri: product.image }} style={ProductStyles.cardImage} />
                  <Text style={ProductStyles.cardTitle}>{product.name}</Text>
                  <Text style={ProductStyles.cardExpiration}>Fecha expiración: {product.expiration_date}</Text>
                  <Text style={ProductStyles.cardPrice}>Precio: ${product.price}</Text>
                </Card>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Botón principal para mostrar/ocultar el menú */}
      <TouchableOpacity style={ProductStyles.menuButton} onPress={toggleMenu}>
        <Icon name={isMenuVisible ? 'times' : 'plus'} size={20} color="#fff" />
      </TouchableOpacity>

      {/* Botón para agregar producto */}
      {isMenuVisible && (
        <TouchableOpacity style={ProductStyles.addButton} onPress={toggleAddModal}>
          <Text style={ProductStyles.addButtonText}>Agregar Producto</Text>
        </TouchableOpacity>
      )}

      {/* Botón para editar productos */}
      {isMenuVisible && (
        <TouchableOpacity style={ProductStyles.editButton} onPress={toggleEditModal}>
          <Text style={ProductStyles.editButtonText}>Editar Productos</Text>
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

export default ProductsView;
