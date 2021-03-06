import React from 'react';
import Login from './screen/Login';
import Registro from './screen/Registro';
import Principal from './screen/Principal';
import equipoTrabajo from './screen/Equipo de Trabajo';
import Herramientas from './screen/Herramientas';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Datos from './screen/Datos';


/*function loginView({ navigation }) {
  return (
    <Login></Login>
  );
}

function registroView() {
  return (
      <Registro></Registro>
  );
}*/

const Stack = createStackNavigator();

const App:() => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name='Datos' component={Datos} />
        <Stack.Screen name='Principal' component={Principal} />
        <Stack.Screen name='Herramientas' component={Herramientas} />
        <Stack.Screen name='Equipo de Trabajo' component={equipoTrabajo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
