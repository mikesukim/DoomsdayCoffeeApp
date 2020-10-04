import React, { useState, useEffect, useRef } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView
} from "react-native";
import { Container, Content, Icon } from 'native-base'
import Carousel from 'react-native-snap-carousel';

// Component Declaration using HOOK
function Food_Drink() {
    
    // Declare Datas
    const [foodsData, setFoodsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Declare Data for Carousel
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);

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

    const _renderItem = ({item, index}) => {
        return (
          <View style={{
              backgroundColor:'purple',
              borderRadius: 5,
              height: 250,
              padding: 50,
              marginLeft: 25,
              marginRight: 25, }}>
            <Text style={{fontSize: 30}}>{item.Name}</Text>
            <Text>{item.Price}</Text>
          </View>
    
        );
    };

    //Render
    return(
        <Container style={styles.container}>
        <Content style={styles.context}>
            {isLoading && <Text>LOADING..</Text>}
            {foodsData.length != 0 && (
                // foodsData.map((food,index) =>(
                //     <Text>{food.Name}</Text>
                // ))

                <SafeAreaView style={{flex: 1, backgroundColor:'white', paddingTop: 50, }}>
                <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', backgroundColor:'white' }}>
                    <Carousel
                      layout={"default"}
                      ref={carouselRef}
                      data={foodsData}
                      sliderWidth={300}
                      itemWidth={300}
                      renderItem={_renderItem}
                      onSnapToItem = { index => setActiveIndex(index) } />
                </View>
              </SafeAreaView>

            )}
            
        </Content>
    </Container>
    )

  }



  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    context: {
        flex: 1,
        backgroundColor: 'white'
    },
    view:{
        flex: 1
    }
});

export default Food_Drink;