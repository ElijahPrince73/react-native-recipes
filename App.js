import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import HomeScreen from './src/screens/HomeScreen'
import CategoriesScreen from './src/screens/CategoriesScreen'
import BookmarksScreen from './src/screens/Bookmarks'
import AccountScreen from './src/screens/Account';

import { Provider as CategoriesProvider } from './src/context/CategoriesContext'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <CategoriesProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: () => <Entypo name="home" size={32} />,
            }}
          />
          <Tab.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{
              tabBarIcon: () => <Entypo name="book" size={32} />,
            }}
          />
          <Tab.Screen
            name="Bookmarks"
            component={BookmarksScreen}
            options={{
              tabBarIcon: () => <Entypo name="bookmark" size={32} />,
            }}
          />
          <Tab.Screen
            name="Account"
            component={AccountScreen}
            options={{
              tabBarIcon: () => <MaterialCommunityIcons name="account" size={32} />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </CategoriesProvider>
  );
}