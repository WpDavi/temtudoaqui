import React, { useState } from "react";
import {View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Emailsvg from '../../assents/email.svg'
import Lock from '../../assents/lock.svg'

export default function Login() {
  
  const Navigation = useNavigation();
  
  const [ email, setEmail] = useState()
  const [ password, setPassoword] = useState()

  const entrar = () => {    
    console.log('entrou') 
    Navigation.navigate('MainTab')
    
    
  }

  const cadastrar = () => {
    Navigation.navigate('Cadastro')

  }

  return(
    <View style={styes.container}>

      <Text>Tem tudo aqui</Text>

      <View style={{flexDirection:'row', alignItems:'center'}}>
        <Emailsvg wiedth='30' height='30' fill='black' />

        <TextInput 
        placeholder="Seu e-mail" 
        keyboardType="email-address"   
        onChangeText={value => setEmail(value)} 
        />
      </View>


      <View style={{flexDirection:'row', alignItems:'center'}}>
        <Lock wiedth='30' height='30' fill='black' />       
       
        <TextInput
        placeholder="Sua senha" 
        keyboardType="email-address"   
        onChangeText={value => setPassoword(value)}         
        />
      </View>    
      
      <Button onPress={() => entrar()}
      title="fazer login"

      />
      
      <Button onPress={() => cadastrar()}
      title="Cadastrar"

      />
      
           
      
    </View>
  )
}

const styes = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'    
  },
  
  
})
