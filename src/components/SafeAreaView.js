import {SafeAreaView as RNSafeAreaView,StyleSheet, StatusBar, Platform } from 'react-native'
import React from 'react'
import Header from './Header'
import { Colors } from '../utils/Constants'

const SafeAreaView = ({children,style}) => {
  return (
    <RNSafeAreaView style={[styles.container,style]}>
        {children}
    </RNSafeAreaView>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:Platform.OS==='android'?StatusBar.currentHeight:0,
        backgroundColor:Colors.backgroundSecondary,
    }
})
export default SafeAreaView