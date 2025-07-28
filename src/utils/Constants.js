import { Dimensions, Platform, StatusBar } from "react-native";
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Color = {
    primary : "#f7ca49",//"#8c5fad",//'#f7ca49',
    primary_light : '#ffe141',  
    secondary : '#753f9d',//8c5fad(purple color),cc4f51(red type color)  //#f4783c 
    text : '#363636',
    disabled : '#9197a6',
    border : "#d0d4dc",
    backgroundSecondary : '#f5f6fb',
    //#f5f6f7
    //lavender grey fir card F6F3F8
    //green #5daa80
    //0d8320--> secondary
}

export const ThemeBlinkit = {
    app:"bl",
    primary : "#f7ca49",
    primary_light : '#ffe141',  
    secondary : '#0d8320',
    text : '#363636',
    disabled : '#9197a6',
    border : "#d0d4dc",
    backgroundSecondary : '#f5f6fb',
    buttonPrimaryL1:'#ff3269',
    buttonPrimaryL2:'#ff794d',
    textLink:"#EF4372"
}
export const ThemeZepto = {
    app:'zp',
    primary : "#f7ca49",
    primary_light : '#ffe141',  
    secondary : '#753f9d',
    text : '#363636',
    disabled : '#9197a6',
    border : "#d0d4dc",
    backgroundSecondary : '#f5f6fb',
    buttonPrimaryL1:'#ff3269',
    buttonPrimaryL2:'#ff794d',
    textLink:"#EF4372"

}
export const ThemeMauEatz = {
  app: 'me', // app name prefix
  primary: '#E50914', // Netflix red
  primary_light: '#FF3B3F', // lighter red for hover/active
  secondary: '#221f1f', // dark background
  text: '#FFFFFF', // white text
  disabled: '#6e6e6e', // muted gray for disabled items
  border: '#333333', // subtle border color
  backgroundSecondary: '#141414', // dark background (Netflix black)
  buttonPrimaryL1: '#E50914', // red gradient start
  buttonPrimaryL2: '#B81D24', // red gradient end
  textLink: '#FF6B81', // light red/pinkish links (for contrast)
};
export const Colors = ThemeMauEatz;

export const Fonts = {
    Regular : 'Okra-Regular',
    Medium : 'Okra-Medium',
    Light : 'Okra-MediumLight',
    SemiBold : 'Okra-Bold',
    Bold : 'Okra-ExtraBold',
}

export const lightColors = [
    'rgba(255,255,255,1)',
    'rgba(255,255,255,0.9)',
    'rgba(255,255,255,0.7)',
    'rgba(255,255,255,0.6)',
    'rgba(255,255,255,0.5)',
    'rgba(255,255,255,0.4)',
    'rgba(255,255,255,0.003)',
];

export const darkWeatherColors = [
    'rgba(54, 67, 92, 1)',
    'rgba(54, 67, 92, 0.9)',
    'rgba(54, 67, 92, 0.8)',
    'rgba(54, 67, 92, 0.2)',
    'rgba(54, 67, 92, 0.0)',
];

export const textType = {
    xxs:'xxs',
    xs:'xs',
    sm:'sm',
    m:'m',
    l:'l',
    xl:'xl',
}

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const apps = {
    Blinkit:'bl',
    Zepto:'zp',
    MauEatz:'me'

}
export const BAR_HEIGHT = Platform.OS==='android'? StatusBar.currentHeight:0;
export const SCREEN_HEIGHT_WIDTH_BAR = BAR_HEIGHT + SCREEN_HEIGHT;
export {wp,hp};

