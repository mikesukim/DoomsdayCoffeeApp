/*
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator  } from '@react-navigation/stack';
import HomeScreen from './Components/Screens/HomeScreen';

import LoginController from './LoginController';


const Stack = createStackNavigator();
export default class App extends React.Component {

  App = () => {return (<LoginController/>);};

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

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

import React, { Fragment } from 'react';
import LoginController from './LoginController';
const App = () => {return (<LoginController/>);};
export default App;