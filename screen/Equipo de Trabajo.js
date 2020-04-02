import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import { StyleSheet, Alert } from 'react-native';

export default class ListThumbnailExample extends Component {
  render() {
    return (
      <Container style={{backgroundColor: "#56DFD0"}}>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Jorge Noel Hernández Aguilar</Text>
                <Text note numberOfLines={1}>20 años</Text>
              </Body>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Jeronimo de Jesús Hernández Sánchez</Text>
                <Text note numberOfLines={1}>19 años</Text>
              </Body>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Cristopher Said Romero Juarez</Text>
                <Text note numberOfLines={1}>19 años</Text>
              </Body>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Victor Manuel Silva Monroy</Text>
                <Text note numberOfLines={1}>21 años</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}