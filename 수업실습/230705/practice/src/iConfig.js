import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBqqQ9r8WFU42GTttdYUhmIabcahWe2Xuk",
  authDomain: "udemy-8d440.firebaseapp.com",
  projectId: "udemy-8d440",
  storageBucket: "udemy-8d440.appspot.com",
  messagingSenderId: "549371664021",
  appId: "1:549371664021:web:0e13987d69aacb9271ad9c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { createUserWithEmailAndPassword, signInWithEmailAndPassword };
