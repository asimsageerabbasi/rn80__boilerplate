import { View, Text } from 'react-native';
import React,{FC} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/login'
const Stack = createNativeStackNavigator();

const PreAuthNavigation: FC = () => {
  return (
        <Stack.Navigator initialRouteName='splashScreen' screenOptions={{headerShown:false}}>
          <Stack.Screen name='loginScreen' component={Login} options={{animation:'fade'}}/>
        </Stack.Navigator>
  )
}

export default PreAuthNavigation