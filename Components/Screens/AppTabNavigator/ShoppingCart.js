import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView
} from "react-native";

import { Icon,  Container, Header, Content, Card, CardItem, Body, ListItem, CheckBox,List, Button, Right, Left  } from 'native-base'
import { Value } from "react-native-reanimated";

class ShoppingCart extends Component {

    //constructor for shoppingCart
    constructor(props){
        super(props);
        this.state = {
            primaryText : "Your Cart is Empty",
            total : this.calculateTotal().toFixed(2),
            data : dummyOrder,
            removedIndex : []    
        }
    }

    updateCart = () =>
    {
        if(dummyOrder.length != 0)
        {
            this.setState({
                primaryText : this.updatePrimaryText(),
                total :  this.calculateTotal().toFixed(2),
            })
        }
        else
        {
            this.setState({primaryText : "Your Cart is Empty",
                            total: 0,})
        }
    }

    updatePrimaryText = () =>
    {
        var primaryTextString =""
        dummyOrder.forEach(element => primaryTextString += element.Name + ": " + element.Price.toString() + "\n" )
        return primaryTextString
    }

    purchaseCoffee = () =>
    {
        dummyOrder.push(dummyItem1)
        this.updateCart()
    }

    removeCoffee = () =>
    {
        var index = dummyOrder.indexOf(dummyItem1)
        if(dummyOrder.length > 1)
        {
            dummyOrder.splice(index, 1)
        }
        else if(dummyOrder[0] == dummyItem1)
        {
            dummyOrder = []
        }
        this.setState({data : dummyOrder})
        this.updateCart()
    }

    purchaseSandwich = () =>
    {
        dummyOrder.push(dummyItem2)
        this.setState({data : dummyOrder})
        this.updateCart()
    }

    removeSandwich = () =>
    {
        var index = dummyOrder.indexOf(dummyItem2)
        if(dummyOrder.length > 1)
        {
            dummyOrder.splice(index, 1)
        }
        else if(dummyOrder[0] == dummyItem2)
        {
            dummyOrder = []
        }
        this.setState({data : dummyOrder})
        this.updateCart()
    }

    purchasePastry = () =>
    {
        dummyOrder.push(dummyItem3)
        this.updateCart()
    }

    removePasrty = () =>
    {
        var index = dummyOrder.indexOf(dummyItem3)
        if(dummyOrder.length > 1)
        {
            dummyOrder.splice(index, 1)
        }
        else if(dummyOrder[0] == dummyItem3)
        {
            dummyOrder = []
        }
        this.setState({data : dummyOrder})
        this.updateCart()
    }

    calculateTotal = () =>
    {
        var total = 0;
        dummyOrder.forEach(element => total += element.Price)
        return total
    }

    //removes selected item from the cart
    onCheckBoxPressItem = (Item, index) =>
    {
        dummyOrder.splice(index, 1);
        this.updateCart();
    }


    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="Cart" style={{ color: tintColor }} />
        )
    }

    render() {

        let display = this.state.data.map((Item, index) => {
            return (
                <View>
                   <ShoppingItem Name={Item.Name} boxChecked={() => this.onCheckBoxPressItem(Item, index)} Total={'$' + Item.Price} bgColor={'white'} txtColor={'black'} beenClicked={false}/>
                </View>
            )
        });

        return (
            <Container style={styles.container}>
                <ListItem itemHeader>
                        <Left><Text>Total</Text></Left>
                        <Right><Text>${this.state.total}</Text></Right>
                        <Right><Button transparent onPress={() => alert("Bought")}><Icon active style={{color:'black'}} name='cart'/></Button></Right>
                    </ListItem>
                <Content style={styles.context}>
                    {display}
                </Content>
            </Container>
            
            /*<SafeAreaView style={styles.container}>
                <Text>{this.state.primaryText}</Text>
                <Text>{this.state.total}</Text>
                <Button id="purchase" title="Update Cart" 
                onPress={this.updateCart}/>
                <Button id="buyCoffee" title="Buy Coffee" 
                onPress={this.purchaseCoffee}/>
                <Button id="removeCoffee" title="remove Coffee" 
                onPress={this.removeCoffee}/>
                <Button id="buySandwich" title="Buy Sandwich" 
                onPress={this.purchaseSandwich}/>
                <Button id="removeSandwich" title="remove Sandwich" 
                onPress={this.removeSandwich}/>
                <Button id="buyPastry" title="Buy Pastry" 
                onPress={this.purchasePastry}/>
                <Button id="removePastry" title="remove Pastry" 
                onPress={this.removePasrty}/>
            </SafeAreaView>*/  
        );
    }
}
export default ShoppingCart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        /*alignItems: 'center',
        justifyContent: 'center',*/
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


var dummyItem1 = {"id":"1122334455",
                   "Name" : "Coffee",
                    "Price" : 3.99,
                    "image" : "null",
                    "ingredients" : 
                    ["beans", "water",
                    "sugar", "milk"]
}

var dummyItem1 = {"id":"1122334455",
                   "Name" : "Coffee",
                    "Price" : 3.99,
                    "image" : "null",
                    "ingredients" : 
                    ["beans", "water",
                    "sugar", "Oat milk"],
                    "quantity": "1"
}

var dummyItem2 = {"id":"1223344556",
                   "Name" : "Sandwich",
                    "Price" : 16.78,
                    "image" : "null",
                    "ingredients" : 
                    ["bread", "cheese",
                    "meat", "sauce"],
                    "quantity": "1"
}

var dummyItem3 = {"id":"2345678901",
                   "Name" : "Pastry",
                    "Price" : 2.09,
                    "image" : "null",
                    "ingredients" : 
                    ["dough", "water",
                    "sugar", "milk",
                    "Fruit", "cinnamon"],
                    "quantity": "1"
}

var dummyOrder =[dummyItem1, dummyItem2, dummyItem3, dummyItem3, dummyItem2,dummyItem1, dummyItem2, dummyItem3, dummyItem3, dummyItem2]
var dumString = "dummmyString"//dummyItem1.parse(JSON)


class ShoppingItem extends Component {
    
    constructor(props) {
        super(props);
       /* this.props.beenClicked = false;
        this.state = {
            beenClick:false,
        }*/
    }

    onClick = () =>
    {
        alert("CLick")
    }

    render() {
        return (
            <Content>
                <List>
                    <ListItem  style={{backgroundColor:this.props.bgColor}}>
                        <Body>
                            <Text style={{color:this.props.txtColor}}>{this.props.Name}</Text>
                        </Body>
                        <Right><Text>{this.props.Total}</Text></Right>
                        <Right>
                            <Button transparent onPress={this.props.boxChecked}><Icon active style={{color:'black'}} name='close'/></Button>
                        </Right>    
                    </ListItem>
                </List>
            </Content>
          );
    }
};