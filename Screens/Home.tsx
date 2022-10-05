import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

const Hello = () => {
  return (
    <View style={tw`flex justify-center items-center bg-blue-700`}>
      <Text style={tw`text-5xl`}>Hi</Text>
    </View>
  );
};

export default Hello;
