import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { resetAndNavigate } from '../../navigation/navigationRef'
import Geolocation from '@react-native-community/geolocation';
import { mmkvStorage } from '../../mmkvLocalStorage';

export const useSplash = () => {
    Geolocation.setRNConfiguration({
        locationProvider:'auto',
        enableBackgroundLocationUpdates:true,
        authorizationLevel:"always"
    });
   
    const getLocationPermission = ()=>{
        try {
            Geolocation.requestAuthorization();  
        } catch (error) {
            console.log("getting location error:",error);
        }
    }
    const isUserLoggedIn= async()=>{
        const token = await mmkvStorage.getItem("token")
        if(token){
            console.log("in");
            return false;
        }
        resetAndNavigate('loginScreen') 
    }
    
    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            getLocationPermission();
            isUserLoggedIn()
        },2000)
        return ()=> clearTimeout(timeOut);
    },[]);
  
 
    return {
        
    }
}

