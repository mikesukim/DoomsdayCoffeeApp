import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { Icon } from 'native-base'


class TestTab extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            data: this.props.route.params ? this.props.route.params.order : [],
        };
    }

    render(){
        const { navigate } = this.props.navigation;
        const { route } = this.props.route;
        return (    
            <View style={styles.container}>
                <Text>
                name: {this.props.route.params ? this.props.route.params.order : "nothin"}
                {/* name: {this.data} */}
                </Text>
            </View>
        );5
    }

    
}
export default TestTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});