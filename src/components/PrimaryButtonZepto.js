import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import CustomText from './CustomText.tsx';
import { Colors, Fonts } from '../utils/Constants';
import {RFValue} from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';

const PrimaryButtonZepto = (props) => {
    const {
        value,
        disabled=false,
        onPress,
        buttonContainer,
        buttonStyle
    }=props
  return (
    <View style={[styles.buttonContainer,buttonContainer]}>
        <LinearGradient 
            colors={[Colors.buttonPrimaryL1,Colors.buttonPrimaryL2]} 
            style={[styles.buttonStyle,buttonStyle]} 
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}>
        <TouchableOpacity  
            disabled={disabled}
            onPress={onPress}
            {...props}
        >
            <CustomText value={value}  
                textStyle={styles.buttonTextStyle} 
                textWrapperStyle={{marginTop:0}}
            />
        </TouchableOpacity>
        </LinearGradient>
      
    </View>
  )
}
const styles = StyleSheet.create({
    buttonContainer:{
        marginTop:16,
        width:'100%'
    },
    buttonStyle:{
        //backgroundColor:Colors.secondary,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        height:52
        
    },
    buttonTextStyle:{
        color:'#fff',
        fontFamily:Fonts.SemiBold,
        textAlign:'center',
    }
});
export default PrimaryButtonZepto