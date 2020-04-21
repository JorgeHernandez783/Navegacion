import React, {Component} from 'react';
import { Container, Content, Card, CardItem, Body, Text, Button, Item, Input, Icon } from 'native-base';
import { StyleSheet, Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class Principal extends Component{
  constructor (props){
    super(props);

    this.state = {
        isLoading: true
    }
  } //end constructor

  render(){
    const navegar = this.props.navigation;

    return(
        <Container style={{backgroundColor: "#9A5025"}}>
            <Content padder contentContainerStyle = {misEstilos.content}>
                <Card >
                    <CardItem header bordered>
                    <Button success style = {misEstilos.bot} onPress = {() => navegar.navigate('Herramientas')}><Text>Activar</Text></Button>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
}
}

const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center'
},
bot: {
  textAlign: 'center',
  marginLeft: '36%'
}
});

export default Principal;