import React, { Component,useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

// Component Declaration using HOOK
function Food_Drink() {
    
    // Declare Datas
    const [foodsData, setFoodsData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    // DidcompononentMount
    useEffect(() => { 
        
        //Define Request
        async function getFoodsData() {
            const res = await fetch("http://192.168.1.42:8080/foods");
            res
              .json()
              .then(res => setFoodsData(res))
              .then(console.log(foodsData))
              .then(setIsLoading(false))
              .catch(err =>console.error(err));
          }

        // Initiate Request
        getFoodsData();

    });


    //Render
    if(!isLoading){
        return foodsData.map((food) => {
            return (
              <View><Text>{food.Name}</Text></View>
            )
          })
    }
    else{
        return (
            <View><Text>loading</Text></View>
        )
    }
  }



const styles = StyleSheet.create({
});


export default Food_Drink;