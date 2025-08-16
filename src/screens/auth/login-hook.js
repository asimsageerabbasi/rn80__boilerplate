import { View, Text, Animated } from 'react-native'
import React, { useEffect, useState,useRef } from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/Constants';
import useKeyboard from '../../hooks/keyboardHook';
import { useNavigation } from '@react-navigation/native';

export const useLogin = () => {
    const navigation = useNavigation();
    const [mobileNumber,setMobileNumber] = useState('');
    const [loginState,setLoginState] = useState({
        loading:false,
    });

    const keyboardHeight = useKeyboard();
    const animKeyboard = useRef(new Animated.Value(0)).current;

    const handleOnSubmit = ()=>{
        console.log("----->",mobileNumber);
        setTimeout(()=>{
            setLoginState((prev)=>({...prev,loading:false}));
            navigation.navigate('otpScreen',{mobileNumber})
        },1000)
        setLoginState((prev)=>({...prev,loading:true}));
    }
    const handleOnChangeText = (text)=>{
        setMobileNumber(text)
    }

    useEffect(()=>{
        if(keyboardHeight==0){
            Animated.timing(animKeyboard,{
                toValue:0,
                duration:500,
                useNativeDriver:true
            }).start();
        }else{
            Animated.timing(animKeyboard,{
                toValue:-keyboardHeight * 0.98,
                duration:500,
                useNativeDriver:true
            }).start();
        }
    },[keyboardHeight])

    return {
        mobileNumber,
        setMobileNumber,
        handleOnSubmit,
        handleOnChangeText,
        animKeyboard,
        disabled:mobileNumber?.length<10?true:false,
        loginState
    }
}

