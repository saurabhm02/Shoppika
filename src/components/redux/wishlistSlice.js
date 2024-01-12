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






// import { createSlice } from "@reduxjs/toolkit";
// import { collection, addDoc, deleteDoc, doc, getDocs } from 'firebase/firestore';
// import { db, auth } from "../../firebase/config";

// export const wishlistSlice = createSlice({
//     name: "wishlist",
//     initialState: {
//         wishlistItems: [],
//     },
//     reducers: {
//       addToWishlist: (state, action) => {
//         const item = state.wishlistItems.find((p) => p.id === action.payload.id);
//         if (item) {
//           item.quantity++;
//           item.price = item.oneQuantityPrice * item.quantity;
//         } else {
//           state.wishlistItems.push({ ...action.payload, quantity: 1 });
//         }
//       },
      
//         removeFromWishlist: async (state, action) => {
//             state.wishlistItems = state.wishlistItems.filter((p) => p.id !== action.payload.id);

//             // Remove the item from Firestore
//             const wishlistCollectionRef = collection(db, `users/${auth.currentUser.uid}/wishlist`);
//             const querySnapshot = await getDocs(wishlistCollectionRef);
//             const itemDoc = querySnapshot.docs.find((doc) => doc.data().id === action.payload.id);

//             if (itemDoc) {
//                 await deleteDoc(doc(wishlistCollectionRef, itemDoc.id));
//             }
//         },
//     },
// });

// export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
// export const selectWishlistItems = (state) => state.wishlist.wishlistItems;
// export default wishlistSlice.reducer;
