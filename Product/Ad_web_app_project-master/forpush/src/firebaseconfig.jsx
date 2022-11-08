// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzGQkMCOOtz3ROlWPmc9sQ1VMXa-LLrj4",
  authDomain: "awap-2853b.firebaseapp.com",
  projectId: "awap-2853b",
  storageBucket: "awap-2853b.appspot.com",
  messagingSenderId: "267471038068",
  appId: "1:267471038068:web:c61d3a4a89c16c03d91321",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
