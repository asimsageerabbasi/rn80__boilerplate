import { View, Text, Animated } from 'react-native'
import React, { useEffect, useState,useRef, useMemo, useCallback } from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/Constants';
import useKeyboard from '../../hooks/keyboardHook';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

type rootStackParamList = {
  otpScreen:{mobileNumber: string} 
};
type OtpScreenRouteProp = RouteProp<rootStackParamList>;
export const useOtp = () => {
    const navigation = useNavigation();
    const route = useRoute<OtpScreenRouteProp>();
    const {mobileNumber} = route?.params;
    const [otpState,setOtpState] = useState({
        loading:false,
        counter:60,
        otpFilled:false
    });
    const resendOtpRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const animOtpBox = useRef(new Animated.Value(0)).current;

    const otpResendCounter = useMemo(()=>{
        return otpState?.counter
    },[otpState?.counter]);
    const isOtpFilled = useMemo(()=>{
        return otpState?.otpFilled
    },[otpState?.otpFilled])

    const handleOtpSubmit = (otp:string | '')=>{
        console.log('your otp filled',otp)
        if(otp?.length===6) setOtpState(prev=>({...prev,otpFilled:true}));
    }
    const handleResendOtp = ()=>{
        handleOtpCounter();
    }

    const height = animOtpBox.interpolate({
        inputRange:[0,1],
        outputRange:[0,50]
    })

    const handleOtpCounter = useCallback(()=>{
        if(resendOtpRef.current) clearInterval(resendOtpRef.current);
        setOtpState(prev=>({...prev,counter:60}))
        resendOtpRef.current = setInterval(()=>{    
        setOtpState((prev)=>{
            if(prev.counter<=1){
                clearInterval(resendOtpRef.current)
                return {...prev,counter:0}
            }
            return {...prev,counter:prev.counter-1}
        })},1000);  
    },[]);

    useEffect(()=>{
        console.log('isOtpFilled',isOtpFilled);
        if(isOtpFilled){
            Animated.timing(animOtpBox,{
                toValue:1,
                duration:500,
                useNativeDriver:false
            }).start()
        }
    },[isOtpFilled]);

    useEffect(()=>{
        handleOtpCounter();
        return ()=> {
            if(resendOtpRef.current){
                clearInterval(resendOtpRef.current)
            }   
        }
    },[]);
  
    return {
        otpState,
        mobileNumber,
        otpResendCounter,
        handleResendOtp,
        handleOtpSubmit,
        height
    }
}

