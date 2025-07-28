import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../utils/Constants';
import {RFValue} from 'react-native-responsive-fontsize'

const CustomInput = (props) => {
    const {
        onChangeText,
        value,
        inputStyle,
        leftComp,
        InputContainerStyle,
    }=props;

  return (
    <View style={[styles.container,InputContainerStyle]}>
        {leftComp && <View style={styles.left}>{leftComp}</View>}
        <TextInput 
            onChangeText={onChangeText}
            value={value}
            style={[styles.inputStyle,inputStyle]}
            placeholderTextColor={Colors.disabled}
            {...props} 
        />
        
        
    </View>
  )
}

const styles = StyleSheet.create({
    inputStyle:{
        color:Colors.text,
        fontFamily:Fonts.SemiBold,
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        height:'100%',
        fontSize:RFValue(11.5),
        marginLeft:4,
        bottom:-1
    },
    container:{
        borderWidth:0.5,
        borderColor:Colors.border,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:10,
        width:'100%',
        height:54,
        backgroundColor:'#fff',
        paddingHorizontal:5,
        shadowColor:Colors.border,
        shadowOffset:{width:1,height:1},
        shadowRadius:2,
        shadowOpacity:0.6,
        elevation:5 
    },
    left:{
        justifyContent:'center',
        alignItems:'center',
        width:'10%',
        height:'100%',
        marginLeft:10
    },
    
})
export default CustomInput