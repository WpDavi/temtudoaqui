import  React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Tabscreens/Home';
import Perfil from './Tabscreens/Perfil';
import Searsh from './Tabscreens/Searsh';


const Tab = createBottomTabNavigator();

export default function MainTab() {
  return (
    
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Perfil" component={Perfil} />
        <Tab.Screen name="Searsh" component={Searsh} />
      </Tab.Navigator>
    
  );
}