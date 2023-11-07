import { View, Text, StyleSheet, SafeAreaView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import Menu from '../components/Menu'
import DataService from '../services/DataService';
import Boton from '../components/Boton'
import * as Font from 'expo-font';
import * as Clipboard from 'expo-clipboard';
import { BarCodeScanner } from 'expo-barcode-scanner';

let dataService = new DataService();
const NOMBRE_APP = 'Mariano Caceres'

export default function AcercaDeScreen({ navigation }) {

  const [image, setImage] = useState(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scanQR, setScanQR] = useState(false);

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

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };
    getBarCodeScannerPermissions();
    loadBackground();
    loadFonts();
  }, []);

  return (
    <>
      <SafeAreaView style={[styles.container]} >
        <ImageBackground source={{ uri: image }} style={styles.image}>
          {fontsLoaded ? (
            <>
              <TouchableOpacity style={{backgroundColor:'white'}} onPress={() => copyToClipboard()}>
                <Text style={{ fontSize: 20 }}>{NOMBRE_APP}</Text>
                <Text style={{ fontFamily: 'font', fontSize: 60 }}>{NOMBRE_APP}</Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 20 }}>Presione el QR para copiar el texto</Text>
            </>
          ) : (
            <></>
          )}
          <Boton onPress={() => setScanQR(true)} titulo='Escanear APP' style={styles.button} />
          {scanQR ? (
            <>
              <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
              />
              {scanned && <>
                <Boton onPress={() => setScanned(false)} titulo='Escanear de nuevo' style={styles.button} />
                <Boton onPress={() => setScanQR(false)} titulo='Cerrar escanner' style={styles.button} />
              </>
              }
            </>
          ) : (
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
