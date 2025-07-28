import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { Colors } from '../utils/Constants'

const Header = () => {
  return (
    <View>
        <StatusBar barStyle={'dark-content'} translucent backgroundColor={Colors.primary} />
      <Text>Header</Text>
    </View>
  )
}

export default Header