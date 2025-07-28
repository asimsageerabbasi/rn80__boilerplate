import {MMKV} from "react-native-mmkv";

export const asyncStorage = new MMKV({
    id:'shazz',
    encryptinKey:'shaz123'
}); 

export const storage = new MMKV({
    id:'shazz',
    encryptionKey:"shaz123"
});

export const mmkvStorage = {
    setItem:async(key,value)=>{
        storage.set(key,value);
    },
    getItem:async(key)=>{
       const value =  storage.getString(key);
       return value !== undefined ? value : null;
    },
    removeItem:async(key)=>{
        storage.delete(key)
    }
}



