import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={() => navigation.navigate('Page1')}>
        <Text>Page1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Page2')}>
        <Text>Page2</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Home;
