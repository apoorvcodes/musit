import { View, Text, Button } from 'react-native';
import { useVideo } from '../hooks/useVideo';
import { useState, useRef } from 'react';
import { video } from '../interfaces/video';
export default function Video({ navigation }: any) {
  const [vidData, setVidData] = useState<video | null>(null);
  const [vidArray, setArray] = useState<video[]>([]);
  async function vidHook() {
    const result = await useVideo();
    if (result) {
      setVidData(result);
      setArray(vidArray => [...vidArray, result]);
    }
    console.log(result);
    return;
  }

  return (
    <View className="">
      <Button title="Get vid" onPress={vidHook} />
      {vidArray.map((v: video, i: number) => {
        return (
          <View>
            <Text
              onPress={() =>
                navigation.navigate('Video', {
                  screen: 'Play',
                  params: {
                    uri: v.uri,
                    type: v.type
                  }
                })
              }
            >
              {`${i}. ${v.type} hai iska type lol`}{' '}
            </Text>
          </View>
        );
      })}
    </View>
  );
}
