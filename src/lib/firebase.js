// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { GoogleAuthProvider,getAuth } from "firebase/auth";

const provider = new GoogleAuthProvider();
const firebaseConfig = {
  apiKey: "AIzaSyC9uuc0Zd_WHH3Os80YgpkuWT_zB0JuHr4",
  authDomain: "crud-488b7.firebaseapp.com",
  projectId: "crud-488b7",
  storageBucket: "crud-488b7.appspot.com",
  messagingSenderId: "161501412365",
  appId: "1:161501412365:web:c50e34f2747460c70f6944",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const googleProvider = new GoogleAuthProvider()
export const auth = getAuth()