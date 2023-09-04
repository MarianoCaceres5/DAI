import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Menu from '../components/Menu';

export default function GreenScreen({navigation}) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>Green Screen</Text>
      <Menu navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: 'white'
    }
  });