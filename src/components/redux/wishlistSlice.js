import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        wishlistItems: [],
    },
    reducers: {
        addToWishlist: (state, action) => {
            const item = state.wishlistItems.find(
                (p) => p.id === action.payload.id
            );
            if (item) {
                item.quantity++;
                item.price = item.oneQuantityPrice * item.quantity;
            } else {
                state.wishlistItems.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromWishlist: (state, action) => {
            state.wishlistItems = state.wishlistItems.filter(
              (p) => p.id !== action.payload.id
            );
            localStorage.setItem('wishlistItems', JSON.stringify(state.wishlistItems));
          },
        loadWishListItems: (state, action) => {
            state.wishlistItems = action.payload;
        },
    },

});

export const { addToWishlist, removeFromWishlist, loadWishListItems } = wishlistSlice.actions;
export default wishlistSlice.reducer;