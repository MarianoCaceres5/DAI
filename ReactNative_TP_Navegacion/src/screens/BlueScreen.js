import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Menu from '../components/Menu';

export default function BlueScreen({navigation}) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>Blue Screen</Text>
      <Menu navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: 'white'
    }
  });