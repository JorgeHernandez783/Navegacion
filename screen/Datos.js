import React, { Component } from 'react';
import { Container, Content, CardItem,Text, Button } from 'native-base';
import {StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class IconTextboxExample extends Component {
    render() {
        const navegar = this.props.navigation;
      return (
        <Container>
          <Content padder contentContainerStyle = {styles.content}>
             <CardItem header bordered>
                <Text style={styles.textCenter}>{this.props.route.params.titulo}</Text>
              </CardItem>
              <CardItem>
              <Text style={styles.textCenter}>{this.props.route.params.nombre}</Text>
              </CardItem>
              <CardItem>
              <Text style={styles.textCenter}>{this.props.route.params.contraseña}</Text>
              </CardItem>
              <Button dark style={{justifyContent:'center', marginLeft: '26%', width: 170, margin: 10}}
            onPress={() => navegar.navigate('Login') }>
              <Text>Cerrar sesión</Text></Button>
          </Content>
        </Container>
      );
    }
  }

const styles = StyleSheet.create({
    content: {
      flex: 1,
      justifyContent: 'center', 
    },
    textCenter: {
      textAlign: 'center',
      width: '100%'
    }
});