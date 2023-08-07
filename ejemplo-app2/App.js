import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';

export default function App() {

  const [text, setText] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <TextInput
        editable
        maxLength={20}
        style={styles.input}
        placeholder="Write some text"
        value={text}
        onChangeText={text => setText(text)}
      />  
      <TouchableOpacity style={[styles.touchableOpacity]} onPress={() => setText('')} ><Text style={[styles.textButton]}>Reset Input</Text></TouchableOpacity>
      <Pressable style={[styles.pressable]} onLongPress={() => setText('')}><Text style={[styles.textPressable]}>Long Press to Reset Input</Text></Pressable>
      
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
  touchableOpacity: {
    marginTop: 10,
    width: '90%',
    height: 60,
    backgroundColor: 'black',
    borderRadius: 15
  },
  pressable: {
    marginTop: 10,
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
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
