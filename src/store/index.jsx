import { configureStore } from "@reduxjs/toolkit";
import themeCart from "./slices/themeCart";
import sidebarSlice from "./slices/sidebarSlice";
import productSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
    reducer:{
        theme:themeCart,
        sidebar:sidebarSlice,
        products:productSlice,
        cart:cartSlice,
    }
})

export default store