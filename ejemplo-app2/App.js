import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity, Button } from 'react-native';

export default function App() {

  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState(0)
  const [email, setEmail] = useState('')
  const [clave, setClave] = useState('')

  let showData = () => {

    let data = {
      nombre: nombre,
      telefono: telefono,
      email: email,
      clave: clave
    }    

    console.log("DATA:", data)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={[styles.textLabel]}>Nombre</Text>
      <TextInput
        editable
        maxLength={20}
        style={styles.input}
        placeholder="Ingrese su nombre"
        value={nombre}
        onChangeText={input => setNombre(input)}
      />  
      <Text style={[styles.textLabel]}>Telefono</Text>
      <TextInput
        editable
        maxLength={20}
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ingrese su telefono"
        value={telefono}
        onChangeText={input => setTelefono(input)}
      />
      <Text style={[styles.textLabel]}>Email</Text>
      <TextInput
        editable
        maxLength={20}
        style={styles.input}
        placeholder="Ingrese su email"
        value={email}
        onChangeText={input => setEmail(input)}
      />
      <Text style={[styles.textLabel]}>Clave</Text>
      <TextInput
        editable
        maxLength={20}
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ingrese su clave"
        value={clave}
        onChangeText={input => setClave(input)}
      />
      <TouchableOpacity style={[styles.button1]} onPress={() => showData()} ><Text style={[styles.textButton]}>Log Data</Text></TouchableOpacity>
      <Pressable style={[styles.button2]} onPress={() => showData()}><Text style={[styles.textPressable]}>Log Data</Text></Pressable>
      <Button onPress={() => showData()} title="Log Data" color={'black'}/>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1: {
    marginTop: 10,
    width: '90%',
    height: 60,
    backgroundColor: 'black',
    borderRadius: 15
  },
  button2: {
    marginTop: 10,
    marginBottom: 10,
    width: '90%',
    height: 60,
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 5,
    borderColor: 'black'
  },
  textButton: {
    color: 'white',
    width: '100%',
    textAlign: 'center',
    marginTop: 18,
    fontSize: 15,
  },
  textPressable: {
    color: 'black',
    width: '100%',
    textAlign: 'center',
    marginTop: 13,
    fontSize: 15,
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
    marginTop: 5
  }
});
