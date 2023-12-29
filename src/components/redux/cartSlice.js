import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const item = state.cartItems.find((p) => p.id === action.payload.id);
            if (item) {
                item.quantity++;
            } else {
                const newCartItem = {
                    ...action.payload,
                    quantity: 1,
                    oneQuantityPrice: parseFloat(action.payload.price) || 0,
                };
        
                state.cartItems.push(newCartItem);
            }
        },
        
        updateCart: (state, action) => {
            state.cartItems = state.cartItems.map((item) => {
                if (item.id === action.payload.id) {
                    if (action.payload.key === "quantity") {
                        const newQuantity = parseFloat(action.payload.val) || 0;
                        const oneQuantityPrice = parseFloat(item.price) / item.quantity || 0;
        
                        item.quantity = newQuantity;
                        item.price = oneQuantityPrice * newQuantity;
                        item.oneQuantityPrice = oneQuantityPrice;
        
                        // console.log("New Quantity:", newQuantity);
                        // console.log("One Quantity Price:", oneQuantityPrice);
                        // console.log("Old Price:", item.price);
                        // console.log("Updated Price:", item.price);
                    } else {
                        return { ...item, [action.payload.key]: action.payload.val };
                    }
                }
                return item;
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
