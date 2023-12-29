import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const item = state.cartItems.find(
                (p) => p.id === action.payload.id
            );
            if (item) {
                item.quantity++;
                item.price = item.oneQuantityPrice * item.quantity;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        updateCart: (state, action) => {
            state.cartItems = state.cartItems.map((p) => {
                if (p.id === action.payload.id) {
                    if (action.payload.key === "quantity") {
                        p.price =
                            p.oneQuantityPrice * action.payload.val;
                    }
                    return { ...p, [action.payload.key]: action.payload.val };
                }
                return p;
            });
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
              (p) => p.id !== action.payload.id
            );
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
          },
        loadCartItems: (state, action) => {
            state.cartItems = action.payload;
        },
    },
});

export const { addToCart, updateCart, removeFromCart, loadCartItems } = cartSlice.actions;
export default cartSlice.reducer;
