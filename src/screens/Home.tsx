import React, { useCallback } from 'react';
import {
  StyleSheet,
  StatusBar,
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Theme } from '../../style';
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from  './MainNavigator'

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Game'>;

const Home = () =>{

    const navigation = useNavigation<homeScreenProp>();
    const goGame = useCallback(() => navigation.navigate('Game'),[])

    return(
      <SafeAreaView style={styles.container}>
        <View style={styles.innerConCrocoPic}>
        <Image
        style={styles.crocoPic}
        resizeMode={'contain'}
        source={require('../../img/crocodile.png')}
        />
        </View>
        <View style={styles.btnCon}>
            <TouchableOpacity onPress={goGame}>
            <Entypo name="login" size={150} color="red" />
            <Text style={styles.gameBtn}>악어 룰렛 Let's Go</Text>
            </TouchableOpacity>
        </View>
        <StatusBar/>
      </SafeAreaView>
    );
}

//style.tsx파일에 존재
const styles = StyleSheet.create({
    container : Theme.container,
    innerConCrocoPic : Theme.innerConCrocoPic,
    crocoPic : Theme.crocoPic,
    gameBtn : Theme.white,
    btnCon : {
        flex: 1,
        alignItems:"center",
      },
})
 
export default Home;