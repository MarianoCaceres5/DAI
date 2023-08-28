import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

export default function Menu({ navigation }) {
  return (
    <View style={[styles.menu]}>
      <Pressable
        style={[styles.buttonGreen]}
        onPress={() => navigation.navigate("GreenScreen")}
      >
        <Text style={[styles.textPressable]}>Green</Text>
      </Pressable>
      <Pressable
        style={[styles.buttonRed]}
        onPress={() => navigation.navigate("RedScreen")}
      >
        <Text style={[styles.textPressable]}>Red</Text>
      </Pressable>
      <Pressable
        style={[styles.buttonBlue]}
        onPress={() => navigation.navigate("BlueScreen")}
      >
        <Text style={[styles.textPressable]}>Blue</Text>
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
    borderTopWidth: 3,
    botderRadius: 10,
    borderTopColor: "white",
  },
  textPressable: {
    textAlign: "center",
    color: 'white'
  },
  buttonGreen: {
    width: "33%",
    height: "100%",
    display: "flex",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
  },
  buttonRed: {
    width: "33%",
    height: "100%",
    display: "flex",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  buttonBlue: {
    width: "33%",
    height: "100%",
    display: "flex",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
});
