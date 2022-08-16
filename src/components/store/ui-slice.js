import { createSlice } from "@reduxjs/toolkit";
const uiSlice= createSlice({
    name:'ui', //MUST BE UNIQ NAME
    initialState:{cartIsVisible:false, notification:null}, // CAN BE A VARIABLE WHICH YOU CAN DEFINE BEFORE,
    reducers:{
        toggle(state){
            state.cartIsVisible=!state.cartIsVisible; //TOOLKIT TRANSFORMS THIS CODE TO IMMUTABLE CODE AND SO YOU WONT FACE A PROBLEM,

        },
        showNotification(state,action){
            state.notification={status:action.payload.status, title:action.payload.title, message: action.payload.message}
        } // added new state for managing error state.
    }
});

export const uiActions =uiSlice.actions;

export default uiSlice;