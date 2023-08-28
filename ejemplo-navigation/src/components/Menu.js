import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

export default function Menu({ navigation }) {
  return (
    <View style={[styles.menu]}>
      <Pressable
        style={[styles.button]}
        onPress={() => navigation.navigate("GreenScreen")}
      >
        <Text style={[styles.textGreen]}>1</Text>
      </Pressable>
      <Pressable
        style={[styles.button]}
        onPress={() => navigation.navigate("RedScreen")}
      >
        <Text style={[styles.textRed]}>2</Text>
      </Pressable>
      <Pressable
        style={[styles.button]}
        onPress={() => navigation.navigate("BlueScreen")}
      >
        <Text style={[styles.textBlue]}>3</Text>
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
  textGreen: {
    textAlign: "center",
    color: 'green'
  },
  textRed: {
    textAlign: "center",
    color: 'red'
  },
  textBlue: {
    textAlign: "center",
    color: 'blue'
  },
  button: {
    width: "33%",
    height: "100%",
    display: "flex",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
  },
});
