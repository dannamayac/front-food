import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import { View, Text } from 'react-native';

const UserView = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Icon name="user" size={30} />
      <Text>User View</Text>
    </View>
  );
};

export default UserView;
