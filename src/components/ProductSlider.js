import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useMemo } from 'react'
import { imageData } from '../utils/dummyData';
import AutoScroll from "@homielab/react-native-auto-scroll";
import { SCREEN_WIDTH } from '../utils/Constants';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen'

 
const ProductSlider = () => {
    const rows = useMemo(()=>{
        let result = [];
        for(let i=0;i<imageData?.length;i+=4){
            result.push(imageData.slice(i,i+4))
        }
        return result;
    },[]);
    const Row = ({row,rowIndex})=>{
        const hShift = rowIndex%2===0?-18:18;
        return(
            <View key={rowIndex} style={styles.flexRow}>
                {
                    row?.map((image,imageIndex)=>{
                        return (
                            <View key={imageIndex} style={[styles.imageContainer,{transform:[{translateX:hShift}]}]}>
                                <Image style={styles.image} source={image} key={imageIndex}/>
                            </View>
                        )
                    })
                }
            </View>
        )
    }
    const MemoisedRow = React.memo(Row);
  return (
    <View pointerEvents='none'>
      <AutoScroll style={styles.autoScroll} endPaddingWidth={0} duration={10000}>
        <View style={styles.gridContainer}>
            {
                rows?.map((row,index)=>{
                    return (
                        <MemoisedRow key={index} row={row} rowIndex={index} />
                    )
                })
            }
        </View>
      </AutoScroll>
    </View>
  )
}
const styles = StyleSheet.create({
    imageContainer:{
        height:SCREEN_WIDTH*0.26,
        width:SCREEN_WIDTH*0.26,
        backgroundColor:'#e9f7f8',
        alignItems:'center',
        marginHorizontal:10,
        marginBottom:wp(1),    
        borderRadius:25,
        justifyContent:'center'
    },
    image:{
      height:'100%',
      width:'100%',
      resizeMode:'contain'  
    },
    gridContainer:{

    },
    autoScroll:{
       zIndex:-2,
       overflow:'visible',
    },
    flexRow:{
        flexDirection:'row'
    }
})
export default ProductSlider