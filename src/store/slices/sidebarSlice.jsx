import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen:false,
}

const sidebarSlice = createSlice({
    name:'sidebar',
    initialState,
    reducers:{
      setisOpen(state,action){
        state.isOpen = !state.isOpen
      },
      handleClosing(state,action){
        state.isOpen = action.payload
      }
    },
})

export const {setisOpen,handleClosing} =  sidebarSlice.actions;
export default sidebarSlice.reducer