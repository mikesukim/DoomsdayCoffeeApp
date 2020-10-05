import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform
} from "react-native";

import HomeTab from './AppTabNavigator/HomeTab'
import MenuTab from './AppTabNavigator/MenuTab'
import CartTab from './AppTabNavigator/CartTab'
//import AddMediaTab from './AppTabNavigator/AddMediaTab'
//import LikesTab from './AppTabNavigator/LikesTab'
import ProfileTab from './AppTabNavigator/ProfileTab'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs'
//import { Icon } from 'native-base'
import Icon from 'react-native-ionicons'

const Tab = createBottomTabNavigator();


class MainScreen extends Component {

    static navigationOptions = {

        //headerLeft: <Icon name="ios-camera-outline" style={{ paddingLeft: 10 }} />,
        title: "Doomsday Coffee",
        //headerRight: <Icon style={{ paddingRight: 10 }} name="ios-send-outline" />
    }

    render() {
        return (
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeTab} options={{tabBarIcon:() => (<Icon name="home" color="#000000"/>)}}/>
                    <Tab.Screen name="Menu" component={MenuTab} options={{tabBarIcon:() => (<Icon name="menu" color="#000000"/>)}}/>
                    <Tab.Screen name="Shopping Cart" component={CartTab} options={{tabBarIcon:() => (<Icon name="cart" color="#000000"/>)}}/>
                    <Tab.Screen name="Profile" component={ProfileTab} options={{tabBarIcon:() => (<Icon name="person" color="#000000"/>)}}/>
                </Tab.Navigator>
        );
    }
}
export default MainScreen;

/*{

    HomeTab: {
        screen: HomeTab
    },
    SearchTab: {
        screen: SearchTab

    },
    AddMediaTab: {
        screen: AddMediaTab
    },
    LikesTab: {
        screen: LikesTab
    },
    ProfileTab: {
        screen: ProfileTab
    }

}, {
        animationEnabled: true,
        swipeEnabled: true,
        tabBarPosition: "bottom",
        tabBarOptions: {
            style: {
                ...Platform.select({
                    android: {
                        backgroundColor: 'white'
                    }
                })
            },
            activeTintColor: '#000',
            inactiveTintColor: '#d1cece',
            showLabel: false,
            showIcon: true
        }
    })*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});