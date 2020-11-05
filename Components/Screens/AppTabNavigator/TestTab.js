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
                <Text style={styles.baseText}>
                    <Text style={styles.subTitleText}>
                        number of Items: 
                    </Text>
                    <Text> {this.props.value.length}{"\n"}</Text>
                    <Text style={styles.subTitleText}>
                        items From Redux:
                    </Text>
                    <Text>{this.props.value ? JSON.stringify(this.props.value) : "no data"}</Text>
                </Text>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    baseText: {
        fontFamily: "Cochin",
        textAlign: 'center',
      },
    subTitleText: {
        fontWeight: "bold"
      },
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