import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import FastImage from '../../components/FastImage'
import { Images } from '../../utils/images'

const Blink = () => {
  return (
    <View style={styles.mainContainerBlinkit}>
        <FastImage resource={Images.splashLogo} />
    </View>
  )
}

export default Blink