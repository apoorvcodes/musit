import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Audi from './Audio';
import playAudio from './playAudio';

const Tab = createNativeStackNavigator();

export default function VideoStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Audi}
      />
      <Tab.Screen
        name="Play"
        options={{ headerShown: false }}
        component={playAudio}
      />
    </Tab.Navigator>
  );
}
