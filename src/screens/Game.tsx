import React, { useCallback, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import { Theme } from '../../style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import Teeth from './Teeth';
import { useNavigation } from '@react-navigation/core';

const Stack = createStackNavigator();

const Game = () =>{

    //얼럿창 보여주기 위한 함수
    const showAlert = () =>
    Alert.alert(
        "악어:",
        "악어가 이빨을 깨물었다!!",
        [
            { text: "OK", onPress: () => goBack() }
        ]
    );

    const navigation = useNavigation();
    const [ranNum, setRanNum] = useState<Number>(0)
    const [click, setClick] = useState<object>({})
    const goBack = useCallback(() => navigation.canGoBack() && navigation.goBack(), [])

    useEffect(() =>{
        setRanNum(randomNum());
    } ,[]);

    const downTeethTouch = 20
    const upTeethTouch = -20
    //난수와 이빨숫자의 값이 같을때 처리하는 함수
    const checkNum = (event: number) =>{

        let num = 'time' + event;

        const clickObj = {
            ...click,
            [num]: true 
          };

          setClick(clickObj);

        if( event === ranNum ){
            showAlert();
        }
    }
    

    //난수 생성 함수
    const randomNum = () =>{
        const num = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
        return num;
    }

    const TeethLoop = () =>{
        const weekArr = [5,7,9,11,13,15];
    
        const rendering = () => {
            const result = [];
            for (let i = 0; i < weekArr.length; i++) {

                if( weekArr[i] > 10){

                    result.push(
                        <View style={styles.subCon}>
                            <TouchableWithoutFeedback onPress={() => checkNum(weekArr[i])}>
                                <Image
                                style={{  marginTop : Object.keys(click).find( e => e === "time" + weekArr[i] ) === "time" + weekArr[i] ? downTeethTouch : 0 }}  
                                resizeMode={'contain'}
                                source={require('../../img/teethUp.png')}
                                ></Image>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => checkNum(weekArr[i]+1)}>
                                <Image
                                style={{  marginTop : Object.keys(click).find( e => e === "time" + String(weekArr[i]+1) ) === "time" + String(weekArr[i]+1) ? downTeethTouch : 0 }} 
                                resizeMode={'contain'}
                                source={require('../../img/teethUp.png')}
                                ></Image>
                            </TouchableWithoutFeedback>
                        </View>
                      );

                }else{

                    result.push(
                        <View style={styles.subCon}>
                            <TouchableWithoutFeedback onPress={() => checkNum(weekArr[i])}>
                                <Image
                                style={{  marginTop : Object.keys(click).find( e => e === "time" + weekArr[i] ) === "time" + weekArr[i] ? upTeethTouch : 0 }}  
                                resizeMode={'contain'}
                                source={require('../../img/teethDown.png')}
                                ></Image>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => checkNum(weekArr[i]+1)}>
                                <Image
                                style={{  marginTop : Object.keys(click).find( e => e === "time" + String(weekArr[i]+1) ) === "time" + String(weekArr[i]+1) ? upTeethTouch : 0 }} 
                                resizeMode={'contain'}
                                source={require('../../img/teethDown.png')}
                                ></Image>
                            </TouchableWithoutFeedback>
                        </View>
                      );

                }
              
            }
            return result;
        };
    
        return rendering();
    }
    
    return(
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
            <View style={{...styles.subCon,  marginTop: 50}}>
                <TouchableWithoutFeedback onPress={() => checkNum(1)}>
                    <Image
                    style={{  marginTop : (click as any).time1 ? upTeethTouch : 0 }} 
                    resizeMode={'contain'}
                    source={require('../../img/teethDown.png')}
                    ></Image>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => checkNum(2)}>
                    <Image 
                    style={{  marginTop : (click as any).time2 ? upTeethTouch : 0 }} 
                    resizeMode={'contain'}
                    source={require('../../img/teethDown.png')}
                    ></Image>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => checkNum(3)}>
                    <Image 
                    style={{  marginTop : (click as any).time3 ? upTeethTouch : 0 }} 
                    resizeMode={'contain'}
                    source={require('../../img/teethDown.png')}
                    ></Image>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => checkNum(4)}>
                    <Image
                    style={{  marginTop : (click as any).time4 ? upTeethTouch : 0 }}  
                    resizeMode={'contain'}
                    source={require('../../img/teethDown.png')}
                    ></Image>
                </TouchableWithoutFeedback>
            </View>
            {TeethLoop()}
            <View style={{...styles.subCon, marginBottom: 20}}>
                <TouchableWithoutFeedback onPress={() => checkNum(17)}>
                    <Image
                    style={{  marginTop : (click as any).time17 ? downTeethTouch : 0 }} 
                    resizeMode={'contain'}
                    source={require('../../img/teethUp.png')}
                    ></Image>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => checkNum(18)}>
                    <Image
                    style={{  marginTop : (click as any).time18 ? downTeethTouch : 0 }}  
                    resizeMode={'contain'}
                    source={require('../../img/teethUp.png')}
                    ></Image>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => checkNum(19)}>
                    <Image 
                    style={{  marginTop : (click as any).time19 ? downTeethTouch : 0 }} 
                    resizeMode={'contain'}
                    source={require('../../img/teethUp.png')}
                    ></Image>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => checkNum(20)}>
                    <Image
                    style={{  marginTop : (click as any).time20 ? downTeethTouch : 0 }}  
                    resizeMode={'contain'}
                    source={require('../../img/teethUp.png')}
                    ></Image>
                </TouchableWithoutFeedback>
            </View>
        </View>
      </SafeAreaView>
    );
}

//style.tsx파일에 존재
const styles = StyleSheet.create({
    container :{
        flex: 1,
        backgroundColor: "green",
    },
    innerContainer : {
        flex: 1,
        backgroundColor: "#dc143c",
        margin: 15,
    },
    teeth : Theme.white,
    subCon: {
        flex: 1,
        flexDirection: 'row',
        justifyContent : "space-between",
        marginHorizontal : 20,
    },
    subConTop:{
        marginTop: 30,
    },
    afterClick:{
        marginTop:20,
    }
})
 
export default Game;