import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDark:false,
}

const themeCart = createSlice({
    name:'theme',
    initialState,
    reducers:{
        toggletheme(state,action){
            state.isDark = !state.isDark
        }
    },
})

export const {isDark,toggletheme} = themeCart.actions
export default themeCart.reducer