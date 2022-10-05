import { View } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { useRef, useState } from 'react';
export default function PlayVid(uri: string, ref: any) {
  const [status, setStatus] = useState<AVPlaybackStatus | null>(null);
  return (
    <View className="t">
      <Video
        ref={ref}
        source={{ uri: uri }}
        useNativeControls
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View>
  );
}
