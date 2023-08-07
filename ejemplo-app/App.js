import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TextInput, SafeAreaView, TouchableOpacity, Pressable } from 'react-native';

export default function App() {
  return (

    // Probar Text, textinput, button, touchableopacity, pressable

    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={{uri:"https://i.pinimg.com/originals/c3/f8/b5/c3f8b5d3e9a61af0fcc7c67d5532ad38.png"}} resizeMode="cover" style={[styles.background]} >
        <Text style={[styles.text]}>Lionel Fressi</Text>
      </ImageBackground>      
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
  background:{
    width: '100%',
    height: '95%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    backgroundColor: '#6CA5BF90', 
    fontSize: 30,
    padding: 20,
    textAlign: 'center',
    width: '100%'
  }
});
