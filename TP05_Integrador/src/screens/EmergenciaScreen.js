import { View, Text, SafeAreaView, StyleSheet, Linking, Alert, Platform, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react';
import Menu from '../components/Menu'
import {
  Accelerometer,
} from 'expo-sensors';
import { Vibration } from 'react-native';
import DataService from '../services/DataService';
import ModalMensaje from '../components/ModalMensaje'
import MessageConstants from '../constants/MessageConstants'

let dataService = new DataService();

export default function EmergenciaScreen({ navigation }) {

  const [{ x, y, z }, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [success, setSuccess] = useState(false);
  const [mensajeModal, setMensajeModal] = useState('');
  const [image, setImage] = useState(null);
  const [telefono, setTelefono] = useState();

  const _slow = () => Accelerometer.setUpdateInterval(1000);
  const _fast = () => Accelerometer.setUpdateInterval(16);

  const callNumber = (phone) => {
    console.log('callNumber ----> ', phone);
    let phoneNumber = phone;
    if (Platform.OS !== 'android') {
      phoneNumber = `telprompt:${phone}`;
    }
    else {
      phoneNumber = `tel:${phone}`;
    }
    Linking.canOpenURL(phoneNumber)
      .then(supported => {
        if (!supported) {
          Alert.alert('Phone number is not available');
        } else {
          return Linking.openURL(phoneNumber);
        }
      })
      .catch(err => console.log(err));
  };

  const _subscribe = () => {
    let auxiliarX;
    setSubscription(Accelerometer.addListener(async (accelerometerData) => {
      auxiliarX = x;
      if (accelerometerData.x < auxiliarX) {
        if ((auxiliarX - accelerometerData.x) > 0.5) {
          if (telefono) {
            callNumber(telefono)
          } else {
            setMensajeModal(MessageConstants.MSG_TELEFONO_UNDEFINED);
            setModalVisible(true)
          }
          Vibration.vibrate();
        }
      } else {
        if ((accelerometerData.x - auxiliarX) > 0.5) {
          if ((auxiliarX - accelerometerData.x) > 0.5) {
            if (telefono) {
              callNumber(telefono)
            } else {
              setMensajeModal(MessageConstants.MSG_TELEFONO_UNDEFINED);
              setModalVisible(true)
            }
            Vibration.vibrate();
          }
        }
      }
      setData(accelerometerData);
    }));
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  let loadBackground = async () => {
    if (JSON.parse(await dataService.obtenerBackground())) {
      let backgroundImage = JSON.parse(await dataService.obtenerBackground());
      setImage(backgroundImage.uri);
    }
  }

  let loadTelefono = async () => {
    let datos = await dataService.obtenerDatos();
    if(datos.telefono){
      setTelefono(datos.telefono)
    }    
  }

  useEffect(() => {
    loadBackground();
    loadTelefono();
    _subscribe();
    _slow();
    return () => _unsubscribe();
  }, []);


  return (
    <SafeAreaView style={[styles.container]}>
      <ImageBackground source={{ uri: image }} style={styles.image}>
        <Text style={{ backgroundColor: 'white', fontSize: 20, width: '80%', textAlign: 'center' }}>Numero: {telefono}</Text>
        <Text style={{ backgroundColor: 'white', fontSize: 20, width: '80%', textAlign: 'center' }}>Agita el celular para llamar a tu contacto de emergencia</Text>
        <ModalMensaje mensaje={mensajeModal} modalVisible={modalVisible} setModalVisible={setModalVisible} success={success} />
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
    backgroundColor: '#fff',
    textAlign: 'center'
  },
  image: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
