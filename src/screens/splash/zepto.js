import { View, Text } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';
import { Images } from '../../utils/images';
import FastImage from '../../components/FastImage';
import CustomText from '../../components/CustomText';
import { textType } from '../../utils/Constants';


const Zepto = () => {
  return (
   <LinearGradient colors={["#8410c7","#4c0394"]} style={styles.mainContainerBlinkit}>
        <FastImage 
            resource={Images.zeptoLogoWhite} 
            imageContainer={styles.imageContainer}
            imageStyle={styles.imageStyle}
        />
        <CustomText 
            textStyle={styles.zeptoSlogan}
            textWrapperStyle={{marginTop:0}}
            type={textType.xs}
        >10 Minutes Grocery Delivery
        </CustomText>
    </LinearGradient>
  )
}

export default Zepto