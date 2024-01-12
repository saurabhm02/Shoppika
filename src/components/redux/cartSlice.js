// import { createSlice } from "@reduxjs/toolkit";
// import { collection, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
// import { db, auth } from "../../firebase/config";

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     cartItems: [],
//     previousURL: "",
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       const item = state.cartItems.find((p) => p.id === action.payload.id);
//       if (item) {
//         item.quantity++;
//       } else {
//         const newCartItem = {
//           ...action.payload,
//           quantity: 1,
//           oneQuantityPrice: parseFloat(action.payload.price) || 0,
//         };

//         state.cartItems.push(newCartItem);

//         // Add the item to Firestore
//         const cartCollectionRef = collection(db, `users/${auth.currentUser.uid}/cart`);
//         addDoc(cartCollectionRef, newCartItem);
//       }
//     },

//     updateCart: (state, action) => {
//       state.cartItems = state.cartItems.map((item) => {
//         if (item.id === action.payload.id) {
//           if (action.payload.key === "quantity") {
//             const newQuantity = parseFloat(action.payload.val) || 0;
//             const oneQuantityPrice = parseFloat(item.price) / item.quantity || 0;

//             item.quantity = newQuantity;
//             item.price = oneQuantityPrice * newQuantity;
//             item.oneQuantityPrice = oneQuantityPrice;

//             // Update the item in Firestore
//             const cartItemDocRef = doc(db, `users/${auth.currentUser.uid}/cart`, item.id);
//             updateDoc(cartItemDocRef, { quantity: newQuantity });
//           } else {
//             return { ...item, [action.payload.key]: action.payload.val };
//           }
//         }
//         return item;
//       });
//     },

//     removeFromCart: (state, action) => {
//       state.cartItems = state.cartItems.filter((p) => p.id !== action.payload.id);

//       // Remove the item from Firestore
//       const cartItemDocRef = doc(db, `users/${auth.currentUser.uid}/cart`, action.payload.id);
//       deleteDoc(cartItemDocRef);
//     },

//     saveUrl: (state, action) => {
//       state.previousURL = action.payload;
//     },
//   },
// });

// export const {
//   addToCart,
//   updateCart,
//   removeFromCart,
//   saveUrl,
// } = cartSlice.actions;
// export const selectPreviousUrl = (state) => state.cart.previousURL;
// export const selectCartItems = (state) => state.cart.cartItems;
// export default cartSlice.reducer;




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

        saveUrl: (state, action) => {
          console.log(action.payload);
          state.previousURL = action.payload;
        },
    },
});
export const { addToCart, updateCart, removeFromCart,saveUrl, loadCartItems } = cartSlice.actions;
export const selectPreviousUrl = (state) => state.cart.previousURL;
export const selectCartItems = (state) => state.cart.cartItems;
export default cartSlice.reducer;