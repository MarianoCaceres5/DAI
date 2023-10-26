import { View, Text, StyleSheet, SafeAreaView, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react';
import Menu from '../components/Menu'
import DataService from '../services/DataService';

let dataService = new DataService();

export default function About({navigation}) {

  const [image, setImage] = useState(null);

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
        <Text>About</Text>
      </ImageBackground>
      <Menu navigation={navigation}/>
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
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
