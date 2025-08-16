import { View, Text, Animated} from 'react-native'
import React, { useRef } from 'react'
import { styles } from './styles'
import FastImage from '../../components/FastImage'
import {Images} from '../../utils/images'
import SafeAreaView from '../../components/SafeAreaView'
import ProductSlider from '../../components/ProductSlider'
import CustomText from '../../components/CustomText.tsx'
import {textType } from '../../utils/Constants'
import CustomInput from '../../components/CustomInput'
import { useLogin } from './login-hook'
import PrimaryButton from '../../components/PrimaryButton';

const Blink = () => {
  const {
    mobileNumber,
    setMobileNumber,
    handleOnSubmit,
    handleOnChangeText,
    animKeyboard
  } = useLogin();

  return (
        <SafeAreaView>
          <ProductSlider/>
          <Animated.ScrollView 
            keyboardDismissMode='on-drag'
            bounces={false}
            keyboardShouldPersistTaps='handled'
            contentContainerStyle={styles.subContainer}
            style={{transform:[{translateY:animKeyboard}]}}
          >
            <View style={styles.content}>
              <FastImage 
                resource={Images.logo} 
                imageContainer={styles.logoContainer} 
                imageStyle={styles.logo}
              />
              <CustomText value="India's Last Minute App" type={textType.m} textStyle={[styles.boldText,styles.title]} />
              <CustomText value="Login or Sign up" type={textType.sm} textStyle={styles.title} />
              <CustomInput 
                onChangeText={handleOnChangeText}
                leftComp={<Text style={styles.inputLeftText}>+91</Text>}
                placeholder="Enter Mobile Number"
                keyboardType="numeric"
              />
              <PrimaryButton value="Continue"/>
            </View>
          </Animated.ScrollView>
        </SafeAreaView>
  )
}

export default Blink