import React, { useState } from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import homeStyles from '../styles/ProductStyles';

const AddProductModal = ({ isVisible, onClose, onAddProduct }) => {
  const [newProductName, setNewProductName] = useState('');
  const [newProductExpiration, setNewProductExpiration] = useState('');
  const [newProductDescription, setNewProductDescription] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
  const [newProductImage, setNewProductImage] = useState('');

  const addNewProduct = () => {
    const newProduct = {
      name: newProductName,
      expiration_date: newProductExpiration,
      description: newProductDescription,
      price: newProductPrice,
      image: newProductImage,
    };

    onAddProduct(newProduct);
    onClose();
  };

  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={homeStyles.modalContainer}>
          <TouchableWithoutFeedback>
            <View style={homeStyles.modalContent}>
              <Text style={homeStyles.modalTitle}>Agregar Producto</Text>
              <TextInput
                style={homeStyles.modalInput}
                placeholder="Nombre"
                value={newProductName}
                onChangeText={(text) => setNewProductName(text)}
              />
              <TextInput
                style={homeStyles.modalInput}
                placeholder="Fecha de vencimiento"
                value={newProductExpiration}
                onChangeText={(text) => setNewProductExpiration(text)}
              />
              <TextInput
                style={homeStyles.modalInput}
                placeholder="Descripción"
                value={newProductDescription}
                onChangeText={(text) => setNewProductDescription(text)}
              />
              <TextInput
                style={homeStyles.modalInput}
                placeholder="Precio"
                value={newProductPrice}
                onChangeText={(text) => setNewProductPrice(text)}
              />
              <TextInput
                style={homeStyles.modalInput}
                placeholder="URL de la imagen"
                value={newProductImage}
                onChangeText={(text) => setNewProductImage(text)}
              />
              <View style={homeStyles.modalButtonContainer}>
                <TouchableOpacity style={homeStyles.modalButton} onPress={addNewProduct}>
                  <Text style={homeStyles.modalButtonText}>Agregar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={homeStyles.modalCancelButton} onPress={onClose}>
                  <Text style={homeStyles.modalCancelButtonText}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default AddProductModal;