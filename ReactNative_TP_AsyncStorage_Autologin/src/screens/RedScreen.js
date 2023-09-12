import { View, Text, StyleSheet, ToastAndroid } from 'react-native'
import React from 'react'
import Menu from '../components/Menu';
import Boton from '../components/Boton';
import UsuarioService from '../services/UsuarioService';

export default function RedScreen({navigation}) {

  const usuarioService = new UsuarioService();

  const eliminarAsyncStorage = async () => {
    await usuarioService.eliminarCredenciales();
    ToastAndroid.show('Se han eliminado los datos', ToastAndroid.SHORT);
  }

  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>Red Screen</Text>
      <Boton onPress={eliminarAsyncStorage} titulo='ELIMINAR ASYNCSTORAGE' style={styles.button} />
      <Menu navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: 'white'
    },
    button: {
      marginTop: 20,
      width: 300,
      height: 60,
      backgroundColor: 'red',
      borderRadius: 15,
      borderWidth: 1,
      borderColor: 'white'
    },
  });