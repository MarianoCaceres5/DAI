import { View, Text, TextInput, TouchableOpacity, Alert, Image, ToastAndroid } from 'react-native'
import { useState, useRef } from 'react';
import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Boton from '../components/Boton';
import messi from '../../assets/messi.jpg'
import UsuarioService from '../services/UsuarioService'
import MessageConstants from '../constants/MessageConstants';

export default function BlueScreen({navigation}) {

  const [clave, setClave] = useState('');
  const [nombre, setNombre] = useState('');

  const passwordRef = useRef();
  let usuarioService = new UsuarioService();

  const handleLogin = async() => {
    if (nombre.toLowerCase() !== '' && clave.toLowerCase() !== ''){
      if (await usuarioService.login(nombre.toLowerCase(), clave.toLowerCase())){
        ToastAndroid.show(MessageConstants.MSG_LOGIN_EXITOSO, ToastAndroid.SHORT);
        await usuarioService.almacenarCredenciales(nombre, clave);
        navigation.navigate('GreenScreen');
      }else{
        Alert.alert(MessageConstants.MSG_USUARIO_O_CLAVE_INVALIDA);
      }      
    }else{
      Alert.alert(MessageConstants.MSG_CAMPOS_INCOMPLETOS);
    }
  }

  return (
    <SafeAreaView style={[styles.container]}>
      <Image source={messi} style={styles.logo}/>
      <Text style={[styles.textLabel]}>Nombre</Text>
      <TextInput
        editable
        maxLength={20}
        style={styles.input}
        placeholder="Ingrese su usuario (mariano)"
        value={nombre}
        onChangeText={input => setNombre(input)}
        returnKeyType='next'
        onSubmitEditing= {() => {passwordRef.current.focus();}}
        blurOnSubmit={false}
      />
      <Text style={[styles.textLabel]}>Contraseña</Text>
      <TextInput
        editable
        maxLength={20}
        style={styles.input}
        value={clave}
        placeholder="Ingrese su contraseña (caceres)"
        onChangeText={input => setClave(input)}
        ref={passwordRef}
        secureTextEntry
      />
      <Boton onPress={handleLogin} titulo='INGRESAR' style={styles.button} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: '75%',
    height: '40%',
    marginBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10,
    width: 300,
    height: 60,
    backgroundColor: 'black',
    borderRadius: 15
  },
  input: {
    height: 40,
    width: '90%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textLabel:{
    alignSelf: 'flex-start',
    marginLeft: '5%',
    marginTop: 5,
    fontWeight: 'bold'
  }
});