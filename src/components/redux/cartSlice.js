import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
    },
    reducers: {
        addToCart: ( state, action ) => {
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
        increaseQuantity: (state, action) => {
            const item = state.products.find(
                (item) => item.id === action.payload.id
            );
            if(item){
                item.quantity++;
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.products.find(
                (item) => item.id === action.payload.id
            );
            if(item.quantity === 1 ){
                item.quantity = 1;
            }
            else{
                item.quantity--;
            }
        },
        deleteItem: (state, action) => {
            state.products = state.products.filter(
                (item) => item.id !== action.payload
            );
        },
        clearCart: (state) => {
            state.products = [];
        },
    },
});

export const { addToCart, increaseQuantity, decreaseQuantity, deleteItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
