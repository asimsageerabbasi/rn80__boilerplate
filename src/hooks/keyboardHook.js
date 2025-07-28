import { useEffect, useState } from "react"
import { Keyboard } from "react-native"

export default function useKeyboard(){
    const [keyboardHeight,setKeyboardHeight] = useState(0);
    useEffect(()=>{
        const androidKeyboardShow = Keyboard.addListener('keyboardDidShow',e=>{
            setKeyboardHeight(e.endCoordinates.height);
        }); 
        const androidKeyboardHide = Keyboard.addListener('keyboardDidHide',e=>{
            setKeyboardHeight(0);
        }); 

        const iosKeyboardShow = Keyboard.addListener('keyboardWillShow',e=>{
            setKeyboardHeight(e.endCoordinates.height);
        }); 
        
        const iosKeyboardHide = Keyboard.addListener('keyboardWillHide',e=>{
            setKeyboardHeight(e.endCoordinates.height);
        });
        
        return ()=>{
            androidKeyboardShow.remove();
            androidKeyboardHide.remove();
            iosKeyboardHide.remove();
            iosKeyboardShow.remove(); 
        }
    },[])
    return keyboardHeight;
}