import { View, Text, StyleSheet, SafeAreaView, ImageBackground, Image } from 'react-native'
import React, { useState, useEffect } from 'react';
import Menu from '../components/Menu'
import DataService from '../services/DataService';
import Boton from '../components/Boton'
import * as Font from 'expo-font';
import * as Clipboard from 'expo-clipboard';

let dataService = new DataService();
const NOMBRE_APP = 'Mariano Caceres'

export default function About({ navigation }) {

  const [image, setImage] = useState(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      'font': require('../../assets/fonts/barcodeFont.ttf'),
    });
    setFontsLoaded(true)
  }

  let loadBackground = async () => {
    if (JSON.parse(await dataService.obtenerBackground())) {
      let backgroundImage = JSON.parse(await dataService.obtenerBackground());
      setImage(backgroundImage.uri);
    }
  }

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(NOMBRE_APP);
  };

  useEffect(() => {
    loadBackground();
    loadFonts();
  }, []);

  return (
    <>
      <SafeAreaView style={[styles.container]} >
        <ImageBackground source={{ uri: image }} style={styles.image}>
          {fontsLoaded ? (
            <>
            <Text style={{ fontSize: 20 }}>{NOMBRE_APP}</Text>
              <Text style={{ fontFamily: 'font', fontSize: 60 }}>{NOMBRE_APP}</Text>
              <Boton onPress={copyToClipboard} titulo='Copiar el texto' style={styles.button} />
            </>
          ):(
            <></>
          )}          
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
