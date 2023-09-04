import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React from "react";
import redIcon from '../../assets/redIcon.png'
import greenIcon from '../../assets/greenIcon.png'
import blueIcon from '../../assets/blueIcon.png'

export default function Menu({ navigation }) {
  return (
    <View style={[styles.menu]}>
      <Pressable
        style={[styles.button]}
        onPress={() => navigation.navigate("GreenScreen")}
      >
        {/* <Text style={[styles.textGreen]}>1</Text> */}
        <Image source={greenIcon} style={styles.icon}/>
      </Pressable>
      <Pressable
        style={[styles.button]}
        onPress={() => navigation.navigate("RedScreen")}
      >
        {/* <Text style={[styles.textRed]}>2</Text> */}
        <Image source={redIcon} style={styles.icon}/>
      </Pressable>
      <Pressable
        style={[styles.button]}
        onPress={() => navigation.navigate("BlueScreen")}
      >
        <Image source={blueIcon} style={styles.icon}/>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 80,
    width: 80

  },  
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
