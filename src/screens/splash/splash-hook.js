import { View, Text, PermissionsAndroid,Platform } from 'react-native'
import React, { useEffect } from 'react'
import { resetAndNavigate } from '../../navigation/navigationRef'
import Geolocation from '@react-native-community/geolocation';
import { mmkvStorage } from '../../mmkvLocalStorage';
import SplashScreen from 'react-native-splash-screen';

export const useSplash = () => {
    const configureLocation = async () => {
        try {
            Geolocation.setRNConfiguration({
                locationProvider: 'auto',
                enableBackgroundLocationUpdates: true,
                authorizationLevel: 'always'
            });

            if (Platform.OS === 'android') {
                await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                );
            } else {
                Geolocation.requestAuthorization();
            }
        } catch (error) {
            console.log("getting location error:", error);
        }

    };
    const isUserLoggedIn= async()=>{
        const token = await mmkvStorage.getItem("token");
        if(!token){
            console.log("token expired");
            resetAndNavigate('preAuthNavigation');
            return false;
        }
        resetAndNavigate('postAuthNavigation'); 
    }
    
    useEffect(()=>{
        const init = async () => {
            await configureLocation();
            await isUserLoggedIn();
            SplashScreen.hide();
        };
        const timeOut = setTimeout(()=>{
            init();
        },2000);
        return ()=> clearTimeout(timeOut)
    },[]);
    return {
        
    }
}

