import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native'
import { useState, useRef } from 'react';
import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Boton from '../components/Boton';
import messi from '../../assets/messi.jpg'
import UsuarioService from '../services/UsuarioService'

export default function BlueScreen({navigation}) {

  const [clave, setClave] = useState('');
  const [nombre, setNombre] = useState('');

  const passwordRef = useRef();
  let usuarioService = new UsuarioService();

  const handleLogin = async() => {
    if (nombre.toLowerCase() !== '' && clave.toLowerCase() !== ''){
      if (nombre.toLowerCase() == 'mariano' && clave.toLowerCase() == 'caceres'){
        await usuarioService.almacenarCredenciales(nombre, clave);
        navigation.navigate('GreenScreen');
      }else{
        Alert.alert('Usuario o contraseña incorrectos');
      }      
    }else{
      Alert.alert('Complete los campos para ingresar');
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