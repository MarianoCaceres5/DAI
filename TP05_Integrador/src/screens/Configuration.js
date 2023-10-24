import { View, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import Menu from '../components/Menu'
import { useState } from 'react'
import Boton from '../components/Boton'
import DataService from '../services/DataService'
import ModalMensaje from '../components/ModalMensaje'
import MessageConstants from '../constants/MessageConstants'

let dataService = new DataService();

export default function Configuration({navigation}) {

  const [telefono, setTelefono] = useState();
  const [urlVideo, setUrlVideo] = useState();
  const [urlMusica, setUrlMusica] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [mensajeModal, setMensajeModal] = useState('');

  let handleSubmit = async () => {
    if(telefono && urlMusica && urlVideo){
      if(await dataService.almacenarDatos(telefono, urlVideo, urlMusica)){
        setMensajeModal(MessageConstants.MSG_DATOS_GUARDADOS);
      }else{
        setMensajeModal(MessageConstants.MSG_GUARDADO_FALLIDO);
      }
    }else{
      setMensajeModal(MessageConstants.MSG_CAMPOS_INCOMPLETOS);
    }   
    setModalVisible(true) 
  }

  return (
    <SafeAreaView style={[styles.container]}>
      <Text style={[styles.textLabel]}>Telefono</Text>
      <TextInput
        editable
        style={styles.input}
        placeholder="Ingrese un telefono de emergencia"
        keyboardType="numeric"
        onChangeText={input => setTelefono(input)}
      />
      <Text style={[styles.textLabel]}>URL Video</Text>
      <TextInput
        editable
        style={styles.input}
        value={urlVideo}
        placeholder="Ingrese una url de un video"
        onChangeText={input => setUrlVideo(input)}
      />
      <Text style={[styles.textLabel]}>URL Musica</Text>
      <TextInput
        editable
        style={styles.input}
        value={urlMusica}
        placeholder="Ingrese una url de una cancion"
        onChangeText={input => setUrlMusica(input)}
      />
      <Boton onPress={handleSubmit} titulo='INGRESAR DATOS' style={styles.button} />
      <ModalMensaje mensaje={mensajeModal} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
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
  button: {
    marginTop: 20,
    width: 300,
    height: 60,
    backgroundColor: 'black',
    borderRadius: 10
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
