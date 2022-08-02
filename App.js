import React from "react";
import { NavigationContainer } from '@react-navigation/native'

import MainStack from './src/screens/MainStack'

export default function app() {
  return(
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
  )
}