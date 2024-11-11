// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUhwQELL_G1Y4CbCXz7mskYOB3tvlp3lE",
  authDomain: "email-password-auth-2-1b266.firebaseapp.com",
  projectId: "email-password-auth-2-1b266",
  storageBucket: "email-password-auth-2-1b266.firebasestorage.app",
  messagingSenderId: "953582047061",
  appId: "1:953582047061:web:8e42eb29824877584129dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);