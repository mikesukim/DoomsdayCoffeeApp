import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { Icon } from 'native-base'

//import Redux
import { useSelector,connect } from 'react-redux'
import {
    reset,
    selectItem
} from "../../../redux/slices/itemSlice"



class TestTab extends Component{

    render(){
        return (    
            <View style={styles.container}>
                <Text>
                items From Redux: {this.props.value ? JSON.stringify(this.props.value) : "no data"}
                </Text>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

//connect Component to Redux
function mapStateToProps(state) {
    const { item } = state
    return item
  }
export default connect(mapStateToProps)(TestTab)