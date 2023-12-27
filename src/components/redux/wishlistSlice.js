import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        products: [],
    },
    reducers: {
        addToWishlist: ( state, action ) => {
            const item = state.products.find(
                (item) => item.id === action.payload.id
            );
            if(item){
                item.quantity += action.payload.quantity
            }
            else{
                state.products.push(action.payload);
            }
        },

        deleteItem: (state, action) => {
            state.products = state.products.filter(
                (item) => item.id !== action.payload
            );
        },
    },

});

export const { addToWishlist, deleteItem } = wishlistSlice.actions;
export default wishlistSlice.reducer;