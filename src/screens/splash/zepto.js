import { View, Text } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';
import { Images } from '../../utils/images';
import {Colors, content, Face, textType } from '@utils/Constants';
import {FastImage, CustomText } from '@components/index';


const Zepto = () => {
  return (
      <LinearGradient colors={[Colors.primary,Colors.buttonPrimaryL2,Colors.primary]} style={styles.mainContainerBlinkit}>
        <FastImage
          resource={Images.logo}
          imageContainer={styles.imageContainer}
          imageStyle={styles.imageStyle}
        />
        <CustomText
          type={textType.m}
          face={Face.Medium}
          value={content?.global?.appSlogan}
          numberOfLines={2}
          textStyle={{textAlign:'center'}}
        />
      </LinearGradient>
  )
}

export default Zepto