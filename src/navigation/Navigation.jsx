import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginView from '../screens/Login/LoginView';
import RegisterView from '../screens/Login/RegisterView';
import HomeView from '../screens/Menu/HomeView';
import UserView from '../screens/Menu/UserView';
import CartView from '../screens/Menu/CartView';
import OptionsView from '../screens/Menu/OptionsView';
import Icon from 'react-native-vector-icons/FontAwesome5';
import GlobalStyles from '../styles/GlobalStyles';

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
      tabBarOptions={{
        showLabel: false,
        style: {
          borderTopWidth: 0,
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          if (route.name === "TabHome") {
            iconName = "home";
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

          return <Icon name={iconName} size={size} color={iconColor} solid={true} />;
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
