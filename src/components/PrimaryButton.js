import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import CustomText from './CustomText';
import { Colors, Fonts } from '../utils/Constants';
import {RFValue} from 'react-native-responsive-fontsize';

const PrimaryButton = (props) => {
    const {
        value,
        disabled=false,
        onPress,
        buttonContainer,
        buttonStyle
    }=props
  return (
    <View style={[styles.buttonContainer,buttonContainer]}>
       <TouchableOpacity 
            style={[styles.buttonStyle,buttonStyle]} 
            disabled={disabled}
            onPress={onPress}
            {...props}
        >
            <CustomText value={value}  
                textStyle={styles.buttonTextStyle} 
                textWrapperStyle={{marginTop:0}}
            />
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    buttonContainer:{
        marginTop:10,
        width:'100%'
    },
    buttonStyle:{
        backgroundColor:Colors.secondary,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        padding:16,
        
    },
    buttonTextStyle:{
        color:'#fff',
        fontFamily:Fonts.Bold,
        textAlign:'center'
    }
});
export default PrimaryButton