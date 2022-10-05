import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const Stack = createMaterialBottomTabNavigator();
import Home from './screens/Home';
import Video from './screens/VideoStack';
import Audio from './screens/Audio';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
   
               barStyle={{ backgroundColor: '#5e548e' }}
               activeColor="#ffffff"
               inactiveColor="#ffffff"
               
               >
       <Stack.Screen name="Home" component={Home} options={{ tabBarIcon:() => ( <AntDesign name="home" size={24} color="white" />)}}/>

        <Stack.Screen
        options={{ tabBarIcon:() => (<MaterialIcons name="multitrack-audio" size={24} color="white" />)}}
          name="Audio"
          component={Audio}
        />
        <Stack.Screen
        options={{ tabBarIcon:() => ( <Feather name="video" size={24} color="white" /> )}}
          name="Video"
          component={Video}
 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
