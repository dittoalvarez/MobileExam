import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import txt from './txt';

const Page1 = () => {
  return (
    <ScrollView>
      <View>
        <Text>{txt}</Text>
      </View>
    </ScrollView>
  );
};

export default Page1;
