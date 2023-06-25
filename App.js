import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Characters from './src/screens/characters';
import Locations from './src/screens/locations';
import Episodes from './src/screens/episodes';
import Profile from './src/screens/profile';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Characters} />
        <Tab.Screen name="Locations" component={Locations} />
        <Tab.Screen name="Episodes" component={Episodes} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
