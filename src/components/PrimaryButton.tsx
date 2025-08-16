import { 
    View,StyleSheet,TouchableOpacity, 
    GestureResponderEvent,
    ViewStyle, 
    Pressable,
    ActivityIndicator
} from 'react-native';
import type {TouchableOpacityProps} from 'react-native';
import React, { FC, useMemo } from 'react'
import CustomText from './CustomText.tsx';
import { Colors, Fonts, wp } from '../utils/Constants';

interface primaryButtonProps extends TouchableOpacityProps{
    value?:string;
    disabled?:boolean;
    onPress?:(event : GestureResponderEvent)=>void;
    buttonContainer?:ViewStyle | ViewStyle[];
    buttonStyle?:ViewStyle | ViewStyle[],
    loading?:boolean
}
const PrimaryButton:FC<primaryButtonProps> = (props) => {
    const {
        value="Continue",
        disabled=false,
        onPress,
        buttonContainer,
        buttonStyle,
        loading = false
    }=props

    const btnPressableStyle =(pressed:boolean,disabled:boolean)=>[
        styles.buttonStyle,buttonStyle,
        disabled && styles.buttonStyleDisabled,
        pressed && !disabled && styles.buttonStylePressed
    ];
  return (
    <View style={[styles.buttonContainer,buttonContainer]}>
       <Pressable 
            style={({pressed})=>btnPressableStyle(pressed,disabled)} 
            disabled={disabled}
            onPress={onPress}
            {...props}
        >
            { loading ? <ActivityIndicator size={'small'} color={Colors.neutral.neutral1} /> :
                <CustomText value={value}
                    textStyle={styles.buttonTextStyle}
                    textWrapperStyle={{ marginTop: 0 }}
                />}
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer:{
        marginTop:10,
        width:'100%'
    },
    buttonStyleDisabled:{
        backgroundColor:Colors.btnDisabled,
    },
    buttonStylePressed:{
        backgroundColor:Colors.secondary
    },
    buttonStyle:{
        backgroundColor:Colors.backgroundSecondary,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        padding:wp(3.5),  
        flexDirection:'row'
    },
    buttonTextStyle:{
        color:'#fff',
        fontFamily:Fonts.Bold,
        textAlign:'center'
    }
});
export default PrimaryButton