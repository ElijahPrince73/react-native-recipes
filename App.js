import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
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
          component={() => <View><Text>Categories</Text></View>}
          options={{
            tabBarIcon: () => <Entypo name="book" size={32} />,
          }}
        />
        <Tab.Screen
          name="bookmarks"
          component={() => <View><Text>Bookmarks</Text></View> }
          options={{
            tabBarIcon: () => <Entypo name="bookmark" size={32} />,
          }}
        />
        <Tab.Screen
          name="Account"
          component={() => <View><Text>Accounnt</Text></View>}
          options={{
            tabBarIcon: () => <MaterialCommunityIcons name="account" size={32} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}