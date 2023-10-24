import { View, Text, Vibration, Alert } from 'react-native'
import React from 'react'

export default class Alerta{ 
    //Elimina las credenciales almacenadas al cerrar sesión 
    alertar = async(mensaje) => { 
        try{
            Vibration.vibrate();
            Alert.alert(mensaje);            
        }catch(e){
            console.log(e);
        }
    };
} 
