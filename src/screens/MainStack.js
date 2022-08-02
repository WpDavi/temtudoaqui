import React from "react";
import { Text, View } from "react-native";
import {createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from "./Stackscreens/Login";
import MainTab from './MainTab'
import Cadastro from './Stackscreens/Cadastro'


export default function MainStack() {
    
    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator
        screenOptions={{
            headerShown:false           
        }}>

            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="MainTab" component={MainTab} /> 
            <Stack.Screen name="Cadastro" component={Cadastro} />

        </Stack.Navigator>               
        
    )
}