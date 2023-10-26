import { View, Text, StyleSheet, SafeAreaView, Button, Image, ImageBackground } from 'react-native'
import { useState, useEffect } from 'react';
import React from 'react'
import Menu from '../components/Menu'
import * as ImagePicker from 'expo-image-picker';
import DataService from '../services/DataService';
import Boton from '../components/Boton';

let dataService = new DataService()

export default function BackgroundImageSelector({ navigation }) {

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      await dataService.guardarBackground(JSON.stringify(result.assets[0]));
      let backgroundImage = JSON.parse(await dataService.obtenerBackground());
      setImage(backgroundImage.uri);
    }
  };

  let loadBackground = async () => {
    if(JSON.parse(await dataService.obtenerBackground())){
      let backgroundImage = JSON.parse(await dataService.obtenerBackground());
      setImage(backgroundImage.uri);
    }    
  }

  useEffect(() => {
    loadBackground();
  }, []);

  return (
    <SafeAreaView style={[styles.container]}>
      <ImageBackground source={{uri: image}} style={styles.image}>
        <Boton onPress={pickImage} titulo='Elegi una imagen de tu galeria' style={styles.button} />
      </ImageBackground>
      <Menu navigation={navigation} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
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
