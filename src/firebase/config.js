import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyBueOmZWJz_XL3ahv7HLfSf6Dn5f-sUhBg",
  authDomain: "shoppika.firebaseapp.com",
  projectId: "shoppika",
  storageBucket: "shoppika.appspot.com",
  messagingSenderId: "624820526898",
  appId: "1:624820526898:web:d4db09aa55a6e2ab01c12b",
  measurementId: "G-8LMYFM5DYQ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;