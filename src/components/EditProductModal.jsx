import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import homeStyles from '../styles/ProductStyles';

const EditProductModal = ({ isVisible, onClose, onEditProduct, productToEdit }) => {
  const [editedProductName, setEditedProductName] = useState('');
  const [editedProductExpiration, setEditedProductExpiration] = useState('');
  const [editedProductDescription, setEditedProductDescription] = useState('');
  const [editedProductPrice, setEditedProductPrice] = useState('');
  const [editedProductImage, setEditedProductImage] = useState('');

  useEffect(() => {
    // Cargar datos del producto a editar cuando cambie la propiedad 'productToEdit'
    if (productToEdit) {
      setEditedProductName(productToEdit.name);
      setEditedProductExpiration(productToEdit.expiration_date);
      setEditedProductDescription(productToEdit.description);
      setEditedProductPrice(productToEdit.price);
      setEditedProductImage(productToEdit.image);
    }
  }, [productToEdit]);

  const editProduct = () => {
    const editedProduct = {
      id: productToEdit.id, // Asegúrate de incluir el ID u otro identificador único
      name: editedProductName,
      expiration_date: editedProductExpiration,
      description: editedProductDescription,
      price: editedProductPrice,
      image: editedProductImage,
    };

    onEditProduct(editedProduct);
    onClose();
  };

  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={homeStyles.modalContainer}>
          <TouchableWithoutFeedback>
            <View style={homeStyles.modalContent}>
              <Text style={homeStyles.modalTitle}>Editar Producto</Text>
              <TextInput
                style={homeStyles.modalInput}
                placeholder="Nombre"
                value={editedProductName}
                onChangeText={(text) => setEditedProductName(text)}
              />
              <TextInput
                style={homeStyles.modalInput}
                placeholder="Fecha de vencimiento"
                value={editedProductExpiration}
                onChangeText={(text) => setEditedProductExpiration(text)}
              />
              <TextInput
                style={homeStyles.modalInput}
                placeholder="Descripción"
                value={editedProductDescription}
                onChangeText={(text) => setEditedProductDescription(text)}
              />
              <TextInput
                style={homeStyles.modalInput}
                placeholder="Precio"
                value={editedProductPrice}
                onChangeText={(text) => setEditedProductPrice(text)}
              />
              <TextInput
                style={homeStyles.modalInput}
                placeholder="URL de la imagen"
                value={editedProductImage}
                onChangeText={(text) => setEditedProductImage(text)}
              />
              <View style={homeStyles.modalButtonContainer}>
                <TouchableOpacity style={homeStyles.modalButton} onPress={editProduct}>
                  <Text style={homeStyles.modalButtonText}>Guardar Cambios</Text>
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

export default EditProductModal;
