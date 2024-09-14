// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAACGTvNUiUtX_h_8Y3Zq2iBrHkitajQMk",
  authDomain: "resturent-booking.firebaseapp.com",
  projectId: "resturent-booking",
  storageBucket: "resturent-booking.appspot.com",
  messagingSenderId: "333538892261",
  appId: "1:333538892261:web:631ac68c5c59f1c4f0f70c",
  measurementId: "G-W298T8LRN0"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
