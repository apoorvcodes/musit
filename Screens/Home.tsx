import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import tw from 'twrnc';

const Hello = () => {
  return (
    <View style={tw`flex justify-center items-center min-h-full bg-[#231942]`}>
      <Image source={require('../img/disc.png')} />
      <Text style={tw`text-7xl font-extrabold text-purple-400 pt-2 `}>
        Vidius
      </Text>

      <Text style={tw`text-xl text-white font-bold pt-2 text-center `}>
        The next gen media player made with react-native and expo
      </Text>
      <View style={tw`flex flex-row pt-1`}>
        <Button
          title="Video"
          color="#ffffff"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          title="Audio"
          color="#ffffff"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </View>
  );
};

export default Hello;
