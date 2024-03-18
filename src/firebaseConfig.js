// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwMIljhqNkuU44xW4aDgk-6Jv620vsc6s",
  authDomain: "ecommerce-34182.firebaseapp.com",
  projectId: "ecommerce-34182",
  storageBucket: "ecommerce-34182.appspot.com",
  messagingSenderId: "889789484717",
  appId: "1:889789484717:web:92f797283a2eccbbb5c024",
  measurementId: "G-CLJ0YBDWGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)

export {app,auth}