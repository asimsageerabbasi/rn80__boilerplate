import { View, Text, Pressable, Animated } from 'react-native';
import React, { FC, useRef } from 'react';
import { styles } from './styles';
import CustomSafeAreaView from '@components/SafeAreaView';
import { content, Face, textType, wp } from '@utils/Constants';
import { svgList } from '@utils/svgs';
import { TermsAndPrivacy } from '@components/index';
import CustomText from '@components/CustomText';
import OtpInput from '@components/OtpInput';
import { useRoute,RouteProp } from '@react-navigation/native';
import { useOtp } from './otp-hook';
import { transformer } from '../../../metro.config';

interface otpProps {
    title?: string | ''
}
const Otp: FC<otpProps> = (props) => {
    const {
        otpState,
        mobileNumber,
        otpResendCounter,
        handleResendOtp,
        handleOtpSubmit,
        height
    } = useOtp();
    const {title} = props;
    console.log('translateY',height)
    return (
        <CustomSafeAreaView>
            <View style={styles.backgroundContainer}>
                <svgList.loginBg
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                />
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.logoAndSloganZepto}>
                    <svgList.mauLogo
                        width={wp(50)}
                        height={wp(50)}
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <CustomText
                        type={textType.l}
                        face={Face.Light}
                        textStyle={styles.slogan}
                        value={content?.otp?.otpTitle}
                    />
                    <CustomText
                        numberOfLines={2}
                        type={textType.xs}
                        face={Face.Light}
                        value={`${content?.otp.otpSentContent}\n+91 ${mobileNumber}`}
                        textStyle={styles.otpContentStyle}
                    /> 
                    <Animated.View style={{height}}>
                        <CustomText
                        numberOfLines={2}
                        type={textType.l}
                        face={Face.Light}
                        value={content?.otp?.verifyOtp}
                        textStyle={styles.otpContentStyle}
                    /> 
                    </Animated.View>
                    <OtpInput otpHasFilled={handleOtpSubmit}/>

                    <View style={styles.resendOtpWrapper}>
                        {otpResendCounter > 0 ? 
                        <CustomText
                            type={textType.sm}
                            face={Face.Light}
                            value={`${content?.otp?.otpResendContent} 0:${otpResendCounter}`}
                            textStyle={styles.otpContentStyle}
                        /> :
                            <View style={styles.alignItemsFlexend}>
                                <Pressable onPress={handleResendOtp}>
                                    <CustomText
                                        type={textType.sm}
                                        face={Face.Light}
                                        value={`${content?.otp?.resend}`}
                                        textStyle={styles.otpContentStyle}
                                    />
                                </Pressable>
                            </View>
                        }
                    </View>
                     
                </View>
                <TermsAndPrivacy/> 
            </View>
        </CustomSafeAreaView>
    )
}

export default Otp