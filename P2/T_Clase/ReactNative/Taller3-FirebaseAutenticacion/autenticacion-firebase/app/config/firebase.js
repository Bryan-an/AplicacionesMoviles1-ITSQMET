// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfd8q-Yg8MLbnd7TTPcS0GuFxq5vnIwBk",
  authDomain: "autenticacion-usuarios-b9e90.firebaseapp.com",
  projectId: "autenticacion-usuarios-b9e90",
  storageBucket: "autenticacion-usuarios-b9e90.appspot.com",
  messagingSenderId: "131988686773",
  appId: "1:131988686773:web:8d2992befac880a4f5bbfc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
