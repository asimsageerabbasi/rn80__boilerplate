import {StyleSheet, StatusBar, Platform } from 'react-native';
import React from 'react';
import {SafeAreaView as RNSafeAreaView} from 'react-native-safe-area-context';
import Header from './Header'
import { Colors, SCREEN_WIDTH, wp } from '@utils/Constants'

const CustomSafeAreaView = ({children,style={}}) => {
  return (
    <RNSafeAreaView edges={['top', 'bottom']} style={[styles.container,style]}>
      {children}
    </RNSafeAreaView>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.neutral.neutral1,
        paddingHorizontal:SCREEN_WIDTH*0.07
    }
})
export default CustomSafeAreaView