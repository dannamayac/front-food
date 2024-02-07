// HomeView.js
import React, { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Card, Image, SliderBox } from 'react-native-elements';
import Axios from 'axios';
import HomeStyles from '../../../styles/HomeStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Carousel from 'react-native-snap-carousel';

const HomeView = ({ navigation }) => {
  const [discountedProducts, setDiscountedProducts] = useState([]);
  const [weeklyDiscounts, setWeeklyDiscounts] = useState([]);

  useEffect(() => {
    const fetchDiscountedProducts = async () => {
      try {
        const response = await Axios.get(`${process.env.EXPO_PUBLIC_BASE_URL}/products/salePerDate`);
        setDiscountedProducts(response.data.discountedProducts);
      } catch (error) {
        console.error('Error fetching discounted products:', error);
      }
    };

    const fetchWeeklyDiscounts = async () => {
      try {
        const response = await Axios.get(`${process.env.EXPO_PUBLIC_BASE_URL}/products/weekly-discounts`);
        setWeeklyDiscounts(response.data.weeklyDiscounts);
      } catch (error) {
        console.error('Error fetching weekly discounts:', error);
      }
    };

    fetchDiscountedProducts();
    fetchWeeklyDiscounts();
  }, []);

  const navigateToProduct = (productId) => {
    // Aquí deberías navegar a la vista de detalles del producto
    // navigation.navigate('ProductDetails', { productId });
  };

  const renderProductCarouselItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => navigateToProduct(item.id)}>
        <View style={HomeStyles.shadowContainer}>
          <Card containerStyle={HomeStyles.cardContainer}>
            <Image source={{ uri: item.image }} style={HomeStyles.cardImage} />
            <Text style={HomeStyles.cardTitle}>{item.name}</Text>
            <Text style={HomeStyles.cardPrice}>Precio: ${item.price}</Text>
          </Card>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={HomeStyles.container}>
      <ScrollView style={HomeStyles.scrollView}>
        <View style={HomeStyles.content}>
          <Text style={HomeStyles.title}>Descuentos de la semana</Text>
          <Carousel
            data={weeklyDiscounts}
            renderItem={renderProductCarouselItem}
            sliderWidth={300}
            itemWidth={200}
            loop={true}
          />

          <Text style={HomeStyles.title}>Descuentos</Text>
          <Carousel
            data={discountedProducts}
            renderItem={renderProductCarouselItem}
            sliderWidth={300}
            itemWidth={200}
            loop={true}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeView;
