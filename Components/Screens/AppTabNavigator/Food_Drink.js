import React, { Component,useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { Icon } from 'native-base'

function Food_Drink() {
    
    // Declare Datas
    const [foodsData, setFoodsData] = useState(0);
    const [drinksData, setDrinksData] = useState([]);
  
    // Similar to componentDidMount and componentDidUpdate:  
    useEffect(() => { 
        
        //Define Request
        const getDrinksData= async () => {
                try {
                    let response = await fetch(
                        // 'http://192.168.1.105:5000/drinks'
                        'http://192.168.1.42/drinks'
                    );
                    let json = await response.json();
                    this.setDrinksData({
                        drinksData: json
                    });
                } catch (error) {
                  console.error(error);
                }
        };
        const getFoodsData= async () => {
            try {
                let response = await fetch(
                    // 'http://192.168.1.105:5000/drinks'
                    'http://192.168.1.42/foods'
                );
                let json = await response.json();
                this.setFoodsData({
                    foodsData: 1
                });
            } catch (error) {
              console.error(error);
            }
        };

        // Initiate Request
        // getDrinksData();
        getFoodsData();

    });

        return (
            <View style={styles.container}>
                <Text>FOOD_DRINK</Text>
                <Text>{foodsData}</Text>
            </View>
        );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});


export default Food_Drink;