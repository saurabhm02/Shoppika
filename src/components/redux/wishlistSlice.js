import { createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from "../../firebase/config";

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlistItems: [],
  },
  reducers: {
    addToWishlist: async (state, action) => {
      const { userId } = action.payload;

      const item = state.wishlistItems.find(
        (p) => p.id === action.payload.id
      );
      if (item) {
        item.quantity++;
        item.price = item.oneQuantityPrice * item.quantity;
      } else {
        state.wishlistItems.push({ ...action.payload, quantity: 1 });
        const wishlistCollectionRef = collection(db, `users/${userId}/wishlist`);
        await addDoc(wishlistCollectionRef, { ...action.payload, quantity: 1 });
      }
    },
    
    removeFromWishlist: async (state, action) => {
      const { userId } = action.payload;

      const wishlistCollectionRef = collection(db, `users/${userId}/wishlist`);
      const querySnapshot = await getDocs(wishlistCollectionRef);
      const itemDoc = querySnapshot.docs.find((doc) => doc.data().id === action.payload.id);

      if (itemDoc) {
        await deleteDoc(doc(wishlistCollectionRef, itemDoc.id));
      }

      state.wishlistItems = state.wishlistItems.filter((p) => p.id !== action.payload.id);
    },

    loadWishListItems: (state, action) => {
      state.wishlistItems = action.payload;
    },
  },
});

export const { addToWishlist, removeFromWishlist, loadWishListItems } = wishlistSlice.actions;
export const selectWishlistItems = (state) => state.wishlist.wishlistItems;
export default wishlistSlice.reducer;
