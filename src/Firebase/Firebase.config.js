// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqsJPb05CFSmNuQPFSePxITXfbd-RvZ9s",
  authDomain: "brand-shop-88a21.firebaseapp.com",
  projectId: "brand-shop-88a21",
  storageBucket: "brand-shop-88a21.appspot.com",
  messagingSenderId: "1017768684483",
  appId: "1:1017768684483:web:85250c278c0afaf044ab76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;