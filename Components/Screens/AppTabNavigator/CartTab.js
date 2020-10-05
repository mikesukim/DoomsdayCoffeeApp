import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { Icon } from 'native-base'

class CartTab extends Component {

    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-add-circle" style={{ color: tintColor }} />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>CartTab</Text>
            </View>
        );
    }
}
export default CartTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});