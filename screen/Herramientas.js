import React, {Component} from 'react';
import { Container, Content, Card, CardItem,Image,View, Body, Text, Button, Item, Input, Icon } from 'native-base';
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
                    <Button warning style={misEstilos.boton1}><Text>Desarmador</Text></Button>
                    </CardItem>
                    <CardItem header bordered>
                    <Button danger style={misEstilos.boton2}><Text>Llave</Text></Button>
                    </CardItem>
                    <CardItem header bordered>
                    <Button danger style={misEstilos.boton3}><Text>Dado</Text></Button>
                    </CardItem>
                    <CardItem header bordered>
                    <Button warning style={misEstilos.boton4}><Text>Iman</Text></Button>
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
boton1: {
    textAlign: 'center',
    marginLeft: '30%'
},
boton2: {
    textAlign: 'center',
    marginLeft: '37%'
},
boton3: {
    textAlign: 'center',
    marginLeft: '37%'
},
boton4: {
    textAlign: 'center',
    marginLeft: '37%'
}
});

export default Principal;