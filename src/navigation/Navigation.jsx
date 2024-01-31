import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginView from '../screens/Login/LoginView';
import RegisterView from '../screens/Login/RegisterView';
import HomeView from '../screens/Menu/HomeView';
import UserView from '../screens/Menu/UserView';
import CartView from '../screens/Menu/CartView';
import OptionsView from '../screens/Menu/OptionsView';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import GlobalStyles from '../styles/GlobalStyles';

library.add(fab, far, fas);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeView} />
      {/* Agrega otras pantallas aquí si es necesario */}
    </Stack.Navigator>
  );
};

const MenuTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
        },
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          if (route.name === "TabHome") {
            iconName = "bread-slice";
          } else if (route.name === "TabUser") {
            iconName = "user";
          } else if (route.name === "TabCart") {
            iconName = "shopping-cart";
          } else if (route.name === "TabOptions") {
            iconName = "cog";
          }

          const iconColor = focused
            ? GlobalStyles.colors.orange
            : GlobalStyles.colors.paleBlue;

          return (
            <View style={{ alignItems: 'center' }}>
              <FontAwesomeIcon icon={iconName} size={size} color={iconColor} />
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="TabHome" component={HomeStack} />
      <Tab.Screen name="TabUser" component={UserView} />
      <Tab.Screen name="TabCart" component={CartView} />
      <Tab.Screen name="TabOptions" component={OptionsView} />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen name="Register" component={RegisterView} />
        <Stack.Screen name="Menu" component={MenuTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
