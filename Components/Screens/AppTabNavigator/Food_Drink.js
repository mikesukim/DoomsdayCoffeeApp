import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

// Component Declaration using HOOK
function Food_Drink() {
    
    // Declare Datas
    const [foodsData, setFoodsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // DidcompononentMount
    useEffect(() => { 
        //Define Request
        async function getFoodsData() {
            const res = await fetch("http://192.168.1.42:8080/foods")
              .then(res => res.json())
              .then(res => {
                setFoodsData(res);
                setIsLoading(false);
              })
              .catch(err =>console.error(err));
          }

        // Initiate Request
        getFoodsData();

    }, []);


    //Render
    return(
        <View>
            {isLoading && <Text>LOADING..</Text>}
            {foodsData.length != 0 && (
                foodsData.map((food,index) =>(
                    <Text>{food.Name}</Text>
                ))

            )}
        </View>
    )

  }



const styles = StyleSheet.create({
});


export default Food_Drink;