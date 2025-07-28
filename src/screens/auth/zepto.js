import { View, Text, StatusBar } from 'react-native';
import React from 'react';
import SafeAreaView from '../../components/SafeAreaView';
import { SCREEN_WIDTH, textType } from '../../utils/Constants';
import SVGZepto from "../../assets/images/zeptobg.svg";
import SVGZeptoLogo from "../../assets/images/zeptologored.svg";
import CustomText from '../../components/CustomText';
import { styles } from './styles';
import CustomInput from '../../components/CustomInput';
import { useLogin } from './login-hook';
import PrimaryButtonZepto from '../../components/PrimaryButtonZepto';


const Zepto = () => {
     const {
        mobileNumber,
        setMobileNumber,
        handleOnSubmit,
        handleOnChangeText,
      } = useLogin();
  return (
    <SafeAreaView>
      <View style={styles.backgroundContainer}>
        <SVGZepto 
          width="100%" 
          height="100%"
          preserveAspectRatio="xMidYMid slice" 
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.logoAndSloganZepto}>
            <SVGZeptoLogo />
            <Text numberOfLines={3} style={styles.sloganZepto}
            >Groceries delivered in 10 minutes</Text>
        </View>
        <View style={styles.inputWrapper}>
            <CustomInput 
                onChangeText={handleOnChangeText}
                leftComp={<Text style={styles.inputLeftTextZepto}>+91</Text>}
                placeholder="Enter Phone Number"
                keyboardType="numeric"
                InputContainerStyle={styles.InputContainerStyle}
                inputStyle={styles.inputStyle}
            />
            <PrimaryButtonZepto value="Continue"/>
        </View>
        <View style={{flex:1,justifyContent:'flex-end'}}>
            <View style={{justifyContent:'center',alignItems:'center',marginBottom:40}}>
            <Text style={styles.zeptoPolicyText}>By continuing you are agree to our</Text>
            <Text style={styles.zeptoPolicyLink}>Terms of Service <Text style={styles.zeptoPolicyText}>&</Text> Privacy Policy</Text>
            </View>
           
        </View>
      </View>
    </SafeAreaView>
  );
};



export default Zepto;
