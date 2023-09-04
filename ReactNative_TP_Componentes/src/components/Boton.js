import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function Boton({titulo, onPress, style}) {
    console.log(style)
  return (
    <View>
      <TouchableOpacity style={[styles.button, style]} onPress={() => onPress()}><Text style={[styles.textButton]}>{titulo}</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
      marginTop: 10,
      width: '90%',
      height: 60,
      backgroundColor: 'black',
      borderRadius: 15
    },
    textButton: {
      color: 'white',
      width: '100%',
      textAlign: 'center',
      marginTop: 18,
      fontSize: 15,
    }
  });