import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../utils/Constants'

const FastImage = (props) => {
    const {
        uri='',
        resource='',
        imageStyle,
        imageContainer,
        resizeMode='contain'
    }=props
  return (
    <View style={[styles.imageContainer,imageContainer]}>
    <Image 
        resizeMode={resizeMode}
        source={uri ? {uri:uri} : resource} 
        style={[styles.imageStyle,imageStyle]}
        {...props}
    />
    </View>
  )
}
const styles= StyleSheet.create({
    imageContainer:{
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        width:'100%'
    },
    imageStyle:{
        height: SCREEN_WIDTH * 0.5,
        width:SCREEN_HEIGHT * 0.5,
        resizeMode:'contain'
    }
})

export default FastImage