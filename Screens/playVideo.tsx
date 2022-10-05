import { View, Text } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { Video } from 'expo-av';
import VideoPlayer from 'expo-video-player';
import React, { useRef, useState } from 'react';

export default function Play({ route, navigation }: any) {
  const { uri, type } = route.params;
  const [inFullscreen, setInFullsreen] = useState(false);
  const refVideo = useRef<Video>();
  return (
    <View>
      <VideoPlayer
        videoProps={{
          shouldPlay: false,
          //   //@ts-ignore
          //   resizeMode: Video.RESIZE_MODE_CONTAIN,
          source: {
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
          },
          //@ts-ignore
          ref: refVideo
        }}
        fullscreen={{
          enterFullscreen: () => {
            setInFullsreen(!inFullscreen);
            //@ts-ignore
            refVideo.current.setStatusAsync({
              shouldPlay: true
            });
          },
          exitFullscreen: () => {
            setInFullsreen(!inFullscreen);
            //@ts-ignore
            refVideo.current.setStatusAsync({
              shouldPlay: false
            });
          },
          inFullscreen
        }}
        style={{ height: 360 }}
        slider={{
          visible: true
        }}
      />
    </View>
  );
}
