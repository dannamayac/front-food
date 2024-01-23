// HomeView.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

const HomeView = () => {
  return (
    <View style={styles.container}>
      <Header title="Inicio" />
      <View style={styles.content}>
        <Text>Bienvenido a la aplicación</Text>
        {/* Contenido adicional de la vista de inicio */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeView;
