import { createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from "../../firebase/config";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    previousURL: "",
  },
  reducers: {
    addToCart: async (state, action) => {
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

        // Add the item to Firestore
        const cartCollectionRef = collection(db, `users/${action.payload.userId}/cart`);
        await addDoc(cartCollectionRef, { ...action.payload, quantity: 1 });
      }
    },

    updateCart: async (state, action) => {
        const { userId } = action.payload;
      
        state.cartItems = state.cartItems.map(async (item) => {
          if (item.id === action.payload.id) {
            if (action.payload.key === "quantity") {
              const newQuantity = parseFloat(action.payload.val) || 0;
              const oneQuantityPrice =
                parseFloat(item.price) / item.quantity || 0;
      
              item.quantity = newQuantity;
              item.price = oneQuantityPrice * newQuantity;
              item.oneQuantityPrice = oneQuantityPrice;
      
              // Update the quantity in Firestore
              const cartCollectionRef = collection(db, `users/${userId}/cart`);
              const querySnapshot = await getDocs(cartCollectionRef);
              const itemDoc = querySnapshot.docs.find(
                (doc) => doc.data().id === action.payload.id
              );
      
              if (itemDoc) {
                await doc(cartCollectionRef, itemDoc.id).update({
                  quantity: newQuantity,
                });
              }
            } else {
              return { ...item, [action.payload.key]: action.payload.val };
            }
          }
          return item;
        });
      },

    removeFromCart: async (state, action) => {
      const { userId } = action.payload;

      // Remove the item from Firestore first
      const cartCollectionRef = collection(db, `users/${userId}/cart`);
      const querySnapshot = await getDocs(cartCollectionRef);
      const itemDoc = querySnapshot.docs.find(
        (doc) => doc.data().id === action.payload.id
      );

      if (itemDoc) {
        await deleteDoc(doc(cartCollectionRef, itemDoc.id));
      }

      state.cartItems = state.cartItems.filter(
        (p) => p.id !== action.payload.id
      );
    },

    loadCartItems: (state, action) => {
      state.cartItems = action.payload;
    },

    saveUrl: (state, action) => {
      console.log(action.payload);
      state.previousURL = action.payload;
    },
  },
});

export const {
  addToCart,
  updateCart,
  removeFromCart,
  loadCartItems,
  saveUrl,
} = cartSlice.actions;
export const selectPreviousUrl = (state) => state.cart.previousURL;
export const selectCartItems = (state) => state.cart.cartItems;
export default cartSlice.reducer;
