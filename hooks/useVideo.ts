import { video } from "../interfaces/video";
import * as ImagePicker from 'expo-image-picker';

export async function useImage() :Promise<video | null>{
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  if(result.cancelled) return null
  return {
    uri: result.uri,
    type: result.type || "image"
  }
}