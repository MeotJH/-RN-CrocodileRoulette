import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import Game from './Game';

export type RootStackParamList = {
  Home: undefined;
  Game: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();


const MainNavigator = () =>{
    return(
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Game" component={Game}/>
      </Stack.Navigator>
    );
}

 
export default MainNavigator;