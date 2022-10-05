import { View, Text, Button } from "react-native";
import { useVideo } from "../hooks/useVideo";
import { useState, useRef } from "react";
import { video } from "../interfaces/video";
import { AVPlaybackStatus, ResizeMode } from 'expo-av'
import VideoPlayer from 'expo-video-player'
export default function Home({navigation} :any) {
    const ref = useRef(null)
    const [vidData, setVidData] = useState<video | null>(null)
    const [status, setStatus] = useState<AVPlaybackStatus | null>(null)

    async function vidHook() {
        const result = await useVideo()
        if(result) {
            setVidData(result)
        }
        console.log(result)
        return
    }
    return (
        <View className="flex text-6xl">
            <Button title="Get vid" onPress={vidHook}/> 
            {vidData ? 
            <View>
                <Text>Hi</Text>
                <VideoPlayer
  videoProps={{
    shouldPlay: true,
    
    resizeMode: ResizeMode.COVER,
    // ❗ source is required https://docs.expo.io/versions/latest/sdk/video/#props
    source: {
      uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
  }}
/>
            </View>
            : <Text className="text-blue-200 text-4xl">No vid</Text> }
        </View>
    )
}

