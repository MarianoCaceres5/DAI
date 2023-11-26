import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Menu from '../components/Menu';
import Boton from '../components/Boton';

export default function Dos({navigation}) {

  const handleLogout = () => {
    navigation.navigate('Login');
  }

  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>Salir de la aplicacion</Text>
      <Boton onPress={handleLogout} titulo='LOGOUT' style={styles.button} />
      <Menu navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
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
      borderRadius: 15
    },
  });