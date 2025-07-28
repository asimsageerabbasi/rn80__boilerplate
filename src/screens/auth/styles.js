import { StyleSheet } from "react-native";
import { BAR_HEIGHT, Colors, Fonts, SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils/Constants";
import {wp} from '@utils/Constants'

export const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:Colors.backgroundSecondary,
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
    footerContainer:{flex:1,justifyContent:'flex-end'},
    footerWrapper:{
        justifyContent:'center',
        alignItems:'center',
        marginBottom:wp(5)
    },
    // zepto styles
    logoAndSloganZepto:{
        marginTop:wp(20)
    },
    sloganZepto:{
        fontSize:wp(7),
        fontFamily:Fonts.Bold,
        color:'#fff',
        width:wp(50),
        marginTop:wp(3)
    },
    backgroundContainer: {
        position: 'absolute',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT+BAR_HEIGHT,
       
      },
      contentContainer: {
        flex: 1,
        marginHorizontal:SCREEN_WIDTH*0.07
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
        color:Colors.text,
        fontFamily:Fonts.Medium,
        marginLeft:wp(3),
      },
      inputWrapper:{
        marginTop:wp(10)
      },
      inputLeftTextZepto:{
        fontFamily:Fonts.Medium
    },
    zeptoPolicyText:{
        color:'#fff',
        fontFamily:Fonts.Regular,
        fontSize:wp(3)
    },
    zeptoPolicyLink:{
        color:Colors.textLink,
        fontFamily:Fonts.SemiBold,
        fontSize:wp(3),
        lineHeight:20
    }

});