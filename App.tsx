/**
 * @format
 */
 import React from 'react';
 import 'react-native-gesture-handler'
 import { NavigationContainer } from '@react-navigation/native';
 import { enableScreens } from 'react-native-screens';
 import { SafeAreaProvider } from 'react-native-safe-area-context';


 import MainView from './src/screens/MainNavigator';
 
 const App = () => {
   return (
     <SafeAreaProvider>
       <NavigationContainer>
        <MainView/>
      </NavigationContainer>
     </SafeAreaProvider>
   );
 };
 
 export default App;
 