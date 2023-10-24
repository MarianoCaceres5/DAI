import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import Menu from '../components/Menu'

export default function UrlPlayer({navigation}) {
  return (
    <SafeAreaView style={[styles.container]}>
      <Text>UrlPlayer</Text>
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
});
