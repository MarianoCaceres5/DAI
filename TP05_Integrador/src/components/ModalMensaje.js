import { View, Text, Vibration, Alert, ToastAndroid, StyleSheet, Modal, Pressable } from 'react-native'
import React from 'react'
import { useEffect } from 'react';

export default function ModalMensaje({ mensaje, modalVisible, setModalVisible, success }) {

    useEffect(() => {
        if (modalVisible) {
            Vibration.vibrate();
        }
    }, [modalVisible])

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    {success ? (
                        <View style={styles.modalViewSuccess}>
                            <Text style={styles.modalText}>{mensaje}</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Cerrar modal</Text>
                            </Pressable>
                        </View>
                    ) : (
                        <View style={styles.modalViewError}>
                            <Text style={styles.modalText}>{mensaje}</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Cerrar modal</Text>
                            </Pressable>
                        </View>
                    )}

                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modalViewSuccess: {
        margin: 20,
        backgroundColor: 'green',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalViewError: {
        margin: 20,
        backgroundColor: 'red',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: 'black',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        color: 'white',
        marginBottom: 15,
        textAlign: 'center',
    },
});