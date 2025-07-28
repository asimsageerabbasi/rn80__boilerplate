import { StyleSheet } from "react-native";
import { Color, Colors, Fonts, SCREEN_WIDTH } from "../../utils/Constants";

export const styles = StyleSheet.create({
    mainContainerBlinkit:{
        flex:1,
        backgroundColor:Colors.primary,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontFamily:Fonts.Bold
    },
    flexOne:{
        flex:1
    },
    imageContainer:{
        width:SCREEN_WIDTH*0.3,
        height:SCREEN_WIDTH*0.16,
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