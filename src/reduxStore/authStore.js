import {createSlice, current} from "@reduxjs/toolkit"
const initialState ={
    currentOrder:null,
    user:null,
}

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setCurrentOrder:(state,action)=>{
            state.currentOrder = action.payload
        }
    }
});

export const {setCurrentOrder} = authSlice.actions;
export default authSlice.reducer;


