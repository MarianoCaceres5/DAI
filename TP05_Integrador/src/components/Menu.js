import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React from "react";

export default function Menu({ navigation }) {
  return (
    <View style={[styles.menu]}>
      <Pressable
        style={[styles.button]}
        onPress={() => navigation.navigate("CambioFondoScreen")}
      >
        <Text style={[styles.text]}>Fondo</Text>        
      </Pressable>
      <Pressable
        style={[styles.button]}
        onPress={() => navigation.navigate("MultimediaScreen")}
      >
        <Text style={[styles.text]}>Multimedia</Text>        
      </Pressable>
      <Pressable
        style={[styles.button]}
        onPress={() => navigation.navigate("EmergenciaScreen")}
      >
        <Text style={[styles.text]}>Emergencia</Text>        
      </Pressable>
      <Pressable
        style={[styles.button]}
        onPress={() => navigation.navigate("AcercaDeScreen")}
      >
        <Text style={[styles.text]}>Acerca de</Text>        
      </Pressable>
      <Pressable
        style={[styles.button]}
        onPress={() => navigation.navigate("ConfiguracionScreen")}
      >
        <Text style={[styles.text]}>Configuracion</Text>        
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    display: "flex",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 100,
    position: "absolute",
    bottom: 0,
  },
  text: {
    textAlign: "center",
    color: 'black',
  },
  button: {
    width: "20%",
    height: "100%",
    display: "flex",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
    paddingHorizontal: 10
  },
});
