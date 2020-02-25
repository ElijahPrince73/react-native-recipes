import React from 'react';
import { Button, View, Text } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button
      title="Go to details"
      onPress={() => navigation.navigate('Details')}
    />
  </View>
);

export default HomeScreen;
