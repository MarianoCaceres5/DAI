import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react';
import Menu from '../components/Menu'
import {
  Accelerometer,
} from 'expo-sensors';
import { Vibration } from 'react-native';

export default function Home({navigation}) {
  const [{ x, y, z }, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  // const _subscribe = () => {
  //   setSubscription(Accelerometer.addListener(setData));
  // };

  const _subscribe = () => {
    let auxiliarX = x;
    let auxiliarY = y;
    setSubscription(Accelerometer.addListener(accelerometerData => {
      //Vibration.vibrate()
      setData(accelerometerData);
    }));
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);


  return (
    <SafeAreaView style={[styles.container]}>
      <Text>Home</Text>
      <Text>Accelerometer: (in Gs where 1 G = 9.81 m s^-2)</Text>
      <Text>
        x: {(x)} y: {(y)} z: {(z)}
      </Text>
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
