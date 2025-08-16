import React from 'react';
import { View, Text, StyleSheet, TextStyle , ViewStyle, TextProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors, Fonts, fontSizes, lineHeights } from '@utils/Constants';

type FontSizeType = keyof typeof fontSizes;
type FontFaceType = keyof typeof Fonts;

interface CustomTextProps extends TextProps {
  children?: React.ReactNode;
  value?: string|'';
  type?: FontSizeType;
  face?: FontFaceType;
  numberOfLines?: number;
  textStyle?: TextStyle | TextStyle[] ;
  textWrapperStyle?: ViewStyle | ViewStyle[];
}
 
const CustomText: React.FC<CustomTextProps> = ({
  children,
  value = '',
  type = 'sm',
  face = 'Regular',
  numberOfLines = 1,
  textStyle,
  textWrapperStyle,
  ...rest
}) => {
  const fontSize = fontSizes[type];
  const lineHeight = lineHeights[type];
  const fontFamily = Fonts[face];

  return (
    <View style={[styles.textWrapperStyle, textWrapperStyle]}>
      <Text
        numberOfLines={numberOfLines}
        style={[textStyles(fontSize, lineHeight, fontFamily), textStyle]}
        {...rest}
      >
        {value || children}
      </Text>
    </View>
  );
};

 const textStyles = (fontSize: number, lineHeight: number, fontFamily: string): TextStyle => (
  {
    fontSize,
    lineHeight,
    fontFamily,
    color: Colors.text,
  });
  
const styles = StyleSheet.create({
  textWrapperStyle: {
   marginVertical: 2,
  },
});

export default React.memo(CustomText);
