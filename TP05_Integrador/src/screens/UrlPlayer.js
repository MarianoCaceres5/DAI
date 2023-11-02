import { View, Text, StyleSheet, SafeAreaView, ImageBackground, Button } from 'react-native'
import React, { useState, useEffect, useRef } from 'react';
import Menu from '../components/Menu'
import DataService from '../services/DataService';
import { Video, ResizeMode } from 'expo-av';

let dataService = new DataService();

export default function UrlPlayer({ navigation }) {

  const video = useRef(null);
  const [status, setStatus] = React.useState({});
  const [image, setImage] = useState(null);
  const [videoUrl, setVideo] = useState(undefined);
  const [musica, setMusica] = useState();

  let loadBackground = async () => {
    if (JSON.parse(await dataService.obtenerBackground())) {
      let backgroundImage = JSON.parse(await dataService.obtenerBackground());
      setImage(backgroundImage.uri);
    }
  }

  let loadMultimedia = async () => {
    if (await dataService.obtenerDatos()) {
      let datos = await dataService.obtenerDatos();
      let video = datos.video;
      console.log(video)
      setVideo(video)
      let musica = datos.musica;
      setMusica(musica)
    }
  }

  useEffect(() => {
    loadBackground();
    loadMultimedia();
  }, []);

  return (
    <SafeAreaView style={[styles.container]}>
      <ImageBackground source={{ uri: image }} style={styles.image}>
        <Text style={{ backgroundColor: 'white', fontSize: 20, width: '80%', textAlign: 'center' }}>UrlPlayer</Text>
        {videoUrl ? (
          <>
            <Video
              style={styles.video}
              ref={video}
              source={{
                uri: videoUrl,
              }}              
              useNativeControls
              resizeMode={ResizeMode.CONTAIN}
              isLooping
              onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <Button
              title={status.isPlaying ? 'Pause' : 'Play'}
              onPress={() =>
                status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
              }
            />
          </>
        ) : (
          <></>
        )}
      </ImageBackground>
      <Menu navigation={navigation} />
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
  image: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    width: '80%',
    height: 200
  }
});
