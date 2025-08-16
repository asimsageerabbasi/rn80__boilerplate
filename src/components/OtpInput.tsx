import { StyleSheet, TextInput, View } from "react-native";
import {Colors, Fonts, fontSizes, OTP_LENGTH, wp } from "@utils/Constants";
import { FC, useEffect, useRef, useState } from "react";

interface OtpInputProps {
  otpHasFilled?: (otp: string) => void;
}
const OtpInput:FC<OtpInputProps> = (
    {
        otpHasFilled=()=>{}
    }
)=>{
    const boxes = Array(OTP_LENGTH).fill('');
    const [otp,setOtp] = useState<string[]>(boxes);
    const otpRefs = useRef<TextInput[]>([]);

    const handleOtp = (value: string, index: number) => {
        if (!/^\d*$/.test(value)) return;
        let newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp)
        if (value && index < otp?.length - 1) {
            otpRefs.current[index + 1]?.focus();
        }
    }
    const handleKeyPress = (event:any,index:number)=>{
        console.log(event.nativeEvent);
        if(event.nativeEvent.key==='Backspace' && otp[index]==='' && index>0){
            otpRefs.current[index-1]?.focus();
        }
    }
    useEffect(()=>{
        const allOtpsEntered = otp?.every((digit)=>digit!=='');
        if(allOtpsEntered){
           const otps = otp?.join('');//otp?.reduce((acc,v)=>acc+v);
           otpHasFilled(otps)
        }
    },[otp])
    return(
        <View style={styles.otpBox}>
            {otp.map((num, index) => {
                return (
                    <TextInput
                        style={[styles.otpInput,{marginLeft:index>0 ? wp('3%'):0}]}
                        ref={(ref)=>void(otpRefs.current[index] = ref!)}
                        value={num}
                        maxLength={1}
                        key={index}
                        autoFocus={index===0?true:false}
                        keyboardType="numeric"
                        onChangeText={(value)=>handleOtp(value,index)}
                        onKeyPress={(e)=>handleKeyPress(e,index)}
                    />
                )
            })}

        </View>
    )
}
const styles = StyleSheet.create({
    otpBox:{
        flexDirection:'row',
        //justifyContent:'space-between',
    },
    otpInput:{
        color:Colors.darkText,
        fontSize:fontSizes.xl,
        fontFamily:Fonts.Medium,
        textAlign:'center',
        borderRadius:wp(1),
        borderWidth:1,
        borderColor:Colors?.neutral.neutral1,
        width:wp(12),
        backgroundColor:Colors.neutral.neutral1,
    }
})

export default OtpInput;