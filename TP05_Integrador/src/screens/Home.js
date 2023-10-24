import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Menu from '../components/Menu'

export default function Home({navigation}) {
  return (
    <SafeAreaView style={[styles.container]}>
      <Text>Home</Text>

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
