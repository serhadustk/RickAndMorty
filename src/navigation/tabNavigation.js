import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Characters from '../screens/characters';
import Locations from '../screens/locations';
import Episodes from '../screens/episodes';
import Profile from '../screens/profile';
import {CHARACTERS, EPISODES, LOCATIONS, PROFILE} from '../utils/routes';
import {setTabIcon} from '../utils/functions';
import {Colors} from '../theme/colors';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerTitleAlign: 'center',
        tabBarIcon: ({focused, color, size}) =>
          setTabIcon(route?.name, focused, color, size),
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.gray,
      })}>
      <Tab.Screen name={CHARACTERS} component={Characters} />
      <Tab.Screen name={LOCATIONS} component={Locations} />
      <Tab.Screen name={EPISODES} component={Episodes} />
      <Tab.Screen name={PROFILE} component={Profile} />
    </Tab.Navigator>
  );
}
