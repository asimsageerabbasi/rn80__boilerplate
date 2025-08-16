import { View, Text, StatusBar } from 'react-native';
import React from 'react'
import { content, Face, Fonts, SCREEN_WIDTH, textType, wp } from '@utils/Constants';
import {
  CustomText,
  CustomSafeAreaView,
  CustomInput,
  PrimaryButton,
  TermsAndPrivacy
} from '@components/index';
import { styles } from './styles';
import { useLogin } from './login-hook';
import {svgList} from '@utils/svgs';

const Zepto = () => {
     const {
        mobileNumber,
        setMobileNumber,
        handleOnSubmit,
        handleOnChangeText,
        disabled,
        loginState
      } = useLogin();
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
              numberOfLines={2}
              type={textType.xl}
              face={Face.Bold}
              textStyle={styles.slogan}
              value={content?.global?.appSlogan}
            /> 
            <CustomInput 
                onChangeText={handleOnChangeText}
                leftComp={<Text style={styles.inputLeftTextZepto}>+91</Text>}
                placeholder="Enter Phone Number"
                keyboardType="numeric"
                InputContainerStyle={styles.InputContainerStyle}
                inputStyle={styles.inputStyle}
                maxLength={10}
            />
            {/* <PrimaryButtonZepto value="Continue"/> */}
            <PrimaryButton 
              disabled={disabled}
              onPress={handleOnSubmit}
              loading={loginState?.loading}
            />
        </View>
        <TermsAndPrivacy/>
      </View>
    </CustomSafeAreaView>
  );
};



export default Zepto;
