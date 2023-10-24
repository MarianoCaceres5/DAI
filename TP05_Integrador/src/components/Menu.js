import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React from "react";

export default function Menu({ navigation }) {
  return (
    <View style={[styles.menu]}>
      <Pressable
        style={[styles.button]}
        onPress={() => navigation.navigate("BackgroundImageSelector")}
      >
        <Text style={[styles.text]}>Background</Text>        
      </Pressable>
      <Pressable
        style={[styles.button]}
        onPress={() => navigation.navigate("UrlPlayer")}
      >
        <Text style={[styles.text]}>Urls</Text>        
      </Pressable>
      <Pressable
        style={[styles.button]}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={[styles.text]}>Home</Text>        
      </Pressable>
      <Pressable
        style={[styles.button]}
        onPress={() => navigation.navigate("About")}
      >
        <Text style={[styles.text]}>About</Text>        
      </Pressable>
      <Pressable
        style={[styles.button]}
        onPress={() => navigation.navigate("Configuration")}
      >
        <Text style={[styles.text]}>Configuration</Text>        
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
