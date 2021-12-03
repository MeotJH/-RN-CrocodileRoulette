import React from 'react'
import {
    Text,
    StyleSheet,
  } from 'react-native';
  import { Theme } from '../../style';
const Teeth = (props: any) =>{

    const checkNum = (event: any) =>{
        console.info(event.nativeEvent + `머임?`);
        console.info(event.nativeEvent.target.num);
        
    }

    return <Text style={styles.teeth}>{props.num}</Text>;
}

const styles = StyleSheet.create({
    teeth : Theme.white,
})

export default Teeth;