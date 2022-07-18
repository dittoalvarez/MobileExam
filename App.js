import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
// import Home from './src/screens/Home';
import Page1 from './src/screens/Page1';
import Page2 from './src/screens/Page2';
const HomeScreen = ({navigation}) => {
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

const Stack = createNativeStackNavigator();
// const AppStack = () => {
//   <Stack.Navigator initialRouteName="Home" component={Home}>
//     <Stack.Screen name="Home" component={Home} />
//     <Stack.Screen name="Page1" component={Page1} />
//     <Stack.Screen name="Page2" component={Page2} />
//   </Stack.Navigator>;
// };
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name="Page1"
          component={Page1}
          options={{title: 'Page1'}}
        />
        <Stack.Screen
          name="Page2"
          component={Page2}
          options={{title: 'Page2'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
