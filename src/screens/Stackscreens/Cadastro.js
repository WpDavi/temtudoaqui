import React, { useState } from "react";
import {View, Text, TextInput, StyleSheet, Button, Image  } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TextInputMask } from 'react-native-masked-text'


import Emailsvg from '../../assents/email.svg'
import Lock from '../../assents/lock.svg'
import { CheckBox, Icon } from '@rneui/themed';


export default function Login() {
  
  const Navigation = useNavigation();
  
  const [ email, setEmail] = useState()
  const [ nome, setNome] = useState()
  const [ cpf, setCpf] = useState()
  const [ numero,setNumero ] = useState()
  
  
  const entrar = () => {    
    console.log('entrou') 
    Navigation.navigate('MainTab')
    
    
  }

  const cadastrar = () => {

  }

  return(
    <View style={styes.container}>

      <Text>Cadastro </Text>

      <View style={{flexDirection:'row', alignItems:'center'}}>
        <Emailsvg wiedth='30' height='30' fill='black' />

        <TextInput 
        placeholder="Seu e-mail" 
        keyboardType="email-address"   
        onChangeText={value => setEmail(value)} 
        />
      </View>

      <View style={{flexDirection:'row', alignItems:'center'}}>
        <Emailsvg wiedth='30' height='30' fill='black' />

        <TextInput 
        placeholder="Seu nome" 
        keyboardType="email-address"   
        onChangeText={value => setNome(value)} 
        />
      </View>

      <View style={{flexDirection:'row', alignItems:'center'}}>
        <Emailsvg wiedth='30' height='30' fill='black' />

        <TextInput 
        placeholder="Seu CPF" 
        keyboardType="number-pad"   
        onChangeText={value => setCpf(value)} 
        />
      </View>

      <View style={{flexDirection:'row', alignItems:'center'}}>
        <Emailsvg wiedth='30' height='30' fill='black' />

        <TextInputMask
        type={'cel-phone'} 
        placeholder="Seu numero" 
        keyboardType="phone-pad"   
        onChangeText={value => setNumero(value)} 
        />
      </View>


     
       
      
      <Button onPress={() => Cadastrar()}
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
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  },
  
  
})
