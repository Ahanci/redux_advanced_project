import { createSlice } from "@reduxjs/toolkit";
const uiSlice= createSlice({
    name:'ui', //MUST BE UNIQ NAME
    initialState:{cartIsVisible:false}, // CAN BE A VARIABLE WHICH YOU CAN DEFINE BEFORE,
    reducers:{
        toggle(state){
            state.cartIsVisible=!state.cartIsVisible; //TOOLKIT TRANSFORMS THIS CODE TO IMMUTABLE CODE AND SO YOU WONT FACE A PROBLEM,

        }
    }
});
export const uiActions =uiSlice.actions;

export default uiSlice;