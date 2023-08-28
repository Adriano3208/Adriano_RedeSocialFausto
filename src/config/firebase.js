import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDHh3F2VZIe__wAcfuZRWSvchQWtug4sOw",
  authDomain: "redesocialfausto.firebaseapp.com",
  projectId: "redesocialfausto",
  storageBucket: "redesocialfausto.appspot.com",
  messagingSenderId: "912210952449",
  appId: "1:912210952449:web:66f780b23a0beb9e6a9b00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);