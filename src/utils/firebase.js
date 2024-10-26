// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIm5V23DmzoAbYBjmn3Yf_gItRYJjXqx4",
  authDomain: "revispy-c77a4.firebaseapp.com",
  projectId: "revispy-c77a4",
  storageBucket: "revispy-c77a4.appspot.com",
  messagingSenderId: "478903485336",
  appId: "1:478903485336:web:366e8067c65ca20067a1ed",
  measurementId: "G-ZTQK489TFG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();

export const auth = getAuth();
export const db = getFirestore(app);
export { signInWithPopup};
