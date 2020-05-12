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
        this.state = {
            isLoading: false,
            data: [],
        };
    }

    componentDidMount() {
        //NetInfo.isConnected.fetch().then(isConnected => {
            if (true) {
                this.setState({isConnected: true})
                this.getHomeScreenData();
            } else {
                this.setState({
                    isLoading: false
                })
            }
        //})
    }

    async getHomeScreenData() {
        try {
          let response = await fetch(
            'http://3.91.79.177/home'
          );
          let json = await response.json();
          this.setState({
            data: json
        });
          //return json;
        } catch (error) {
          console.error(error);
        }
      }

    render() {
        const images = {

            "1": require('../../assets/feed_images/1.jpg'),
            "2": require('../../assets/feed_images/2.jpg'),
            "3": require('../../assets/feed_images/3.png')
        }

        //getHomeScreenData();

        let display = this.state.data.map(function (Post, index) {
            return (
                <View key={Post.id}>
                    <Card>
                        <CardItem cardBody>
                            <Image source={{uri: Post.display_url}}style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>

                        <CardItem>
                            <Body>
                                <Text>
                                    {Post.edge_media_to_caption.edges[0].node.text}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </View>
            )
        });


        return (
            <Container>
                <Content>
                    {display}
                </Content>
            </Container>
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