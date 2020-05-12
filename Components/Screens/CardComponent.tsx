import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import NetInfo from "react-native-netinfo"

import { Container, Content, Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'

class CardComponent extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <Content>
                    <View>
                        <Card containerStyle={{padding: 0}}>
                            <CardItem cardBody>
                                <Image source={{uri: this.props.display_url}}style={{ height: 300, width: null, flex: 1 }} />
                            </CardItem>

                            <CardItem>
                                <Body>
                                    <Text>
                                        {this.props.post_text}
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                </Content>
        );
    }
}
export default CardComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});