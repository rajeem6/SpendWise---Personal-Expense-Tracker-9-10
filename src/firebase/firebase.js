// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj7asq0_IpvE1v_cvMTeuwPSnNhfi4rFs",
  authDomain: "spendwise-firebase.firebaseapp.com",
  projectId: "spendwise-firebase",
  storageBucket: "spendwise-firebase.firebasestorage.app",
  messagingSenderId: "1032762524976",
  appId: "1:1032762524976:web:20b5a6b0176d80bcbeb4f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth = getAuth()