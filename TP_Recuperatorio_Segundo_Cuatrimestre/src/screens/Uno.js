import { View, Text, StyleSheet, Image, Pressable, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Menu from '../components/Menu';
import imagenBoton from '../../assets/contador.png'

export default function Uno({ navigation }) {

  const [contador, setContador] = useState(0);

  useEffect(() => {
    if(contador != 0){
      Alert.alert('Cantidad de toques:', contador.toString());
    }
  },[contador]);

  return (
    <View style={[styles.container]}>
      <Pressable style={styles.botonImagen} onPress={() => setContador(contador+1)}>
        <Image source={imagenBoton} />
      </Pressable>
      <Text style={[styles.text]}>Presione la imagen</Text>
      <Menu navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white'
  },
  botonImagen: {
    marginBottom: 20
  },
});