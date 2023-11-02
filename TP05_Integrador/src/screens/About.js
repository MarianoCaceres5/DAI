import { View, Text, StyleSheet, SafeAreaView, ImageBackground, Image } from 'react-native'
import React, { useState, useEffect } from 'react';
import Menu from '../components/Menu'
import DataService from '../services/DataService';
import Boton from '../components/Boton'

let dataService = new DataService();

export default function About({ navigation }) {

  const [image, setImage] = useState(null);

  let loadBackground = async () => {
    if (JSON.parse(await dataService.obtenerBackground())) {
      let backgroundImage = JSON.parse(await dataService.obtenerBackground());
      setImage(backgroundImage.uri);
    }
  }

  useEffect(() => {
    loadBackground();
  }, []);

  return (
    <>
      <SafeAreaView style={[styles.container]} >
        <ImageBackground source={{ uri: image }} style={styles.image}>
          <Text>Mariano Caceres</Text>
          <Text style={{ backgroundColor: 'white', fontSize: 20, width: '80%', textAlign: 'center' }}>Presione para copiar el texto</Text>
        </ImageBackground>
        <Menu navigation={navigation} />
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#fff'
  },
  button: {
    marginTop: 20,
    width: 300,
    height: 60,
    backgroundColor: 'black',
    borderRadius: 10
  },
  image: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
