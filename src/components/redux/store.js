import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";
import authSlice from "./authSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        wishlist: wishlistSlice,
        auth: authSlice
    }
})