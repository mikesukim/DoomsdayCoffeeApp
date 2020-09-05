import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator  } from '@react-navigation/stack';
import HomeScreen from './Components/Screens/HomeScreen';


const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="DoomsdayCoffee" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

}

/*{

  Main: {
    screen: HomeScreen
  }
})*/


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});