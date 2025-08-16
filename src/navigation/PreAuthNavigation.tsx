import { View, Text } from 'react-native';
import React,{FC} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/login'
import Otp from '@screens/auth/otp';
const Stack = createNativeStackNavigator();

const PreAuthNavigation: FC = () => {
  return (
        <Stack.Navigator initialRouteName='loginScreen' screenOptions={{headerShown:false}}>
          <Stack.Screen name='loginScreen' component={Login} options={{animation:'fade'}}/>
          <Stack.Screen name='otpScreen' component={Otp} options={{animation:'ios_from_left'}}/>
        </Stack.Navigator>
  )
}

export default PreAuthNavigation