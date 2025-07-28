import { View} from 'react-native';
import React, { useRef } from 'react';
import { styles } from './styles';
import Blink from './blink'
import Zepto from './zepto'
import { apps, Colors } from '../../utils/Constants';

const Login = () => {

  return (
      <View style={styles.mainContainer}>
        {Colors.app===apps.Blinkit?<Blink/>:<Zepto/>}
      </View>
  )
}

export default Login