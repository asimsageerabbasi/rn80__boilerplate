import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../screens/splash'
import { navigationRef } from './navigationRef'
import Login from '../screens/auth/login'
import PreAuthNavigation from './PreAuthNavigation'
import PostAuthNavigation from './PostAuthNavigation'
const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
     <NavigationContainer ref={navigationRef} >
        <Stack.Navigator initialRouteName='splashScreen' screenOptions={{headerShown:false}}>
          <Stack.Screen name='splashScreen' component={Splash}/>
          <Stack.Screen name='preAuthNavigation' component={PreAuthNavigation} options={{animation:'fade'}}/>
          <Stack.Screen name='postAuthNavigation' component={PostAuthNavigation} options={{animation:'fade'}}/>
        </Stack.Navigator>
     </NavigationContainer>
  )
}

export default MainNavigation