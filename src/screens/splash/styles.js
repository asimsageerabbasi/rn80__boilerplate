import { StyleSheet } from "react-native";
import { Color, Colors, Fonts, hp, SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils/Constants";

export const styles = StyleSheet.create({
    mainContainerBlinkit:{
        flex:1,
        backgroundColor:Colors.primary,
        alignItems:'center',
    },
    title:{
        fontFamily:Fonts.Bold
    },
    flexOne:{
        flex:1
    },
    imageContainer:{
        width:SCREEN_WIDTH*0.4,
        height:SCREEN_WIDTH*0.4,
        overflow:'hidden',
        marginTop:SCREEN_HEIGHT*0.35
    },
    imageStyle:{
        width:SCREEN_WIDTH*0.38,
        height:SCREEN_WIDTH*0.38,
    },
    zeptoSlogan:{
        color:"#fff",
        fontFamily:Fonts.Medium
    }
})