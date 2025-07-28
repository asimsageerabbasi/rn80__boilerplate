import { View, Text } from 'react-native'
import React from 'react';
import { styles } from './styles'
import FastImage from '../../components/FastImage'
import {Images} from '../../utils/images'
import { useSplash } from './splash-hook'
import Blink from './blink';
import Zepto from './zepto';
import { apps, Colors } from '../../utils/Constants';

const Splash = () => {
    const {} = useSplash();
  return (
    <View style={styles.flexOne}>
      <Zepto/>
    </View>
  )
}

export default Splash