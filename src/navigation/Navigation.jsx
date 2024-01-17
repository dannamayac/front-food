import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginView from '../screens/LoginView';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginView} />
        {/* Agrega otras pantallas aquí si es necesario */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
