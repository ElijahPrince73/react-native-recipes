import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import HomeScreen from './features/Home/containers';


const DetailsScreen1 = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
    <Button
      title="Go to details again"
      onPress={() => navigation.navigate('Details')}
    />
  </View>
);

const Tab = createBottomTabNavigator();

export default () => (
  <NavigationContainer>
    <Tab.Navigator tabBarOptions={{ showLabel: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />
        }}
      />
      <Tab.Screen
        name="Categories"
        component={DetailsScreen1}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="book-open" color={color} size={size} />
        }}
      />
      <Tab.Screen
        name="Bookmarks"
        component={DetailsScreen1}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="bookmark" color={color} size={size} />
        }}
      />
      <Tab.Screen
        name="User"
        component={DetailsScreen1}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="user" color={color} size={size} />
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);
