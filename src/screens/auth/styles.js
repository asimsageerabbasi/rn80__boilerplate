import { StyleSheet } from "react-native";
import { BAR_HEIGHT, Colors, Fonts, SCREEN_HEIGHT, SCREEN_WIDTH,wp } from "@utils/Constants";
import { Typography } from "@utils/Typography";
export const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:Colors.neutral.neutral1,
        // justifyContent:'center',
        // alignItems:'center',
    },
    title:{
        textAlign:'center',
        fontFamily:Fonts.Bold
    },
    inputLeftText:{
        fontFamily:Fonts.SemiBold
    },
    subContainer:{
        justifyContent:'flex-end',
        flex:1,
        alignItems:'center',
        backgroundColor:'#fff',
    },
    content:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        paddingHorizontal:20,
        paddingBottom:20
    },
    logo:{width:100,height:100,borderRadius:10},
    logoContainer:{width:100,height:100,marginBottom:10},
   
    // zepto styles
    logoAndSloganZepto:{
        marginTop:wp(2),
        justifyContent:'center',
        alignItems:'center'
    },
    slogan:{
        color:'#fff',
        //width:wp(50),
        marginVertical:wp(2),
    },
    backgroundContainer: {
        position: 'absolute',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT+BAR_HEIGHT,
        backgroundColor:Colors.primary
      },
      contentContainer: {
        flex: 1,
        //marginHorizontal:SCREEN_WIDTH*0.07,
        //justifyContent: 'center',
        //alignItems: 'center',
      },
      InputContainerStyle:{
        borderWidth:0.5,
        borderColor:'transparent',
        borderRadius:25,
        elevation:0,
        height:52,

      },
      inputStyle:{
        color:Colors.darkText,
        fontFamily:Fonts.Medium,
        marginLeft:wp(3),
      },
      inputWrapper:{
        marginTop:wp(4)
      },
      inputLeftTextZepto:{
        fontFamily:Fonts.Medium
    },
    otpContentStyle:{
        marginBottom:wp(2)
    },
    resendOtpWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:wp(3)
    },
    alignItemsFlexend:{
        flex:1,
        alignItems:'flex-end'
    }
});