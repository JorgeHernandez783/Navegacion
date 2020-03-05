import React,{Component} from 'react';
import {StyleSheet, ActivityIndicator,Modal,View} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body,Button,Item,Input,Icon } from 'native-base';


class Login extends Component {

  constructor(props){
    super(props);
    this.state={
      nombre:'',
      contraseña:'',
      isloading: true,
    } 
  } //End constructor
  ShowHideActivityIndicator = () =>{
    const navegar=this.props.navigation;
    if(this.state.isLoading == true)
    {
      this.setState({isLoading: false})
    }
    else
    {
      this.setState({isLoading: true})
      setTimeout(() => {
        navegar.navigate('Principal',{nombre:this.state.nombre,contraseña:this.state.contraseña});
        this.setState({isLoading: false})
      },1500);
    }
  }

  render(){
    const navegar = this.props.navigation;
    return (
      <Container>
          <Content padder contentContainerStyle={misEstilos.content}>
            <Card>
              {
                this.state.isLoading ?  
                <Modal
                  transparent = {true} 
                  animationType = {'none'} 
                  visible = {this.state.isLoading}> 
                    <View style = {misEstilos.modalBackground}> 
                      <View style = {misEstilos.activityIndicator}> 
                        <ActivityIndicator style={{padding: 20}}/> 
                      </View> 
                    </View> 
                </Modal> : null
                }
                <CardItem header bordered>
                  <Text style={misEstilos.textCenter}>Inicio de sesión</Text>
                </CardItem>
                <CardItem bordered>
                  <Body>
                    <Item inlineLabel>
                      <Icon type='FontAwesome' name='user' />
                        <Input placeholder="Nombre de usuario" value={this.state.nombre} onChangeText={(nombre)=> this.setState({nombre}) } />
                      </Item>
                      <Item inlineLabel last>
                        <Icon type='FontAwesome' name='lock' />
                        <Input placeholder="Contraseña" value={this.state.contraseña} onChangeText={(contraseña)=> this.setState({contraseña}) } /> 
                    </Item>
                  </Body>
                </CardItem>
             <Button success style={misEstilos.boton} onPress={this.ShowHideActivityIndicator}>
              <Text> 
                  Entrar 
              </Text>
             </Button>
              <Button primary style={misEstilos.boton1} onPress={() => {
                  navegar.navigate('Registro', {
                    titulo: 'Registro',
                  });
                }}>
                <Text>REGISTRATE</Text>
              </Button>
            </Card>
          </Content>
    </Container>
    ); //End return
  } //End render
} //End class

const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  textCenter: {
    textAlign: 'center',
    fontSize: 20
  },
  modalBackground : {
    flex : 1 ,
    alignItems : 'center' ,
    flexDirection : 'column' ,
    justifyContent : 'space-around' ,
    backgroundColor : '#FFFFFF'
  } ,
  activityIndicator : {
    backgroundColor : '#FFFFFF' ,
    height : 100 ,
    width : 100 ,
    borderRadius : 20 ,
    display : 'flex' ,
    alignItems : 'center' ,
    justifyContent : 'space-around'
  },
  boton: {
    marginLeft: '75%',
    justifyContent: 'center',
  },
  boton1: {
    marginLeft: '69%'
  }
});

const style = {
    color: 'white',
    fontSize: 30,
};

export default Login;