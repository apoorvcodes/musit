import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Play from './playVideo';
import Video from './Video';

const Tab = createNativeStackNavigator();

export default function VideoStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Video}
      />
      <Tab.Screen
        name="Play"
        options={{ headerShown: false }}
        component={Play}
      />
    </Tab.Navigator>
  );
}
