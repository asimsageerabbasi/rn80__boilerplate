import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import { Colors, Fonts } from '../utils/Constants';

const fontSizes = {
    xxs:RFValue(8),
    xs: RFValue(10),
    sm: RFValue(12),
    m: RFValue(14),
    l: RFValue(16),
    xl: RFValue(18),
  };
const CustomText = (props) => {
    const {
        children,
        textStyle,
        type="sm",
        numberOfLines=1,
        value='',
        textWrapperStyle,
    } = props;
  let fontSize = fontSizes[type] || fontSizes.sm;

  return (
    <View style={[styles.textWrapperStyle,textWrapperStyle]}>
        <Text 
            numberOfLines={numberOfLines}
            style={[styles.textStyle(fontSize),textStyle]}
            {...props}
        > 
            {value || children}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    textStyle:(size)=>({
        fontSize:size,
        fontFamily:Fonts.Regular,
        color:Colors.text,
    }),
    textWrapperStyle:{
        marginTop:10
    }
});

export default React.memo(CustomText)