// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP3k2E5ehlMuVf4w3seuXbHe_nD4SyuU4",
  authDomain: "moshi-saloan.firebaseapp.com",
  projectId: "moshi-saloan",
  storageBucket: "moshi-saloan.appspot.com",
  messagingSenderId: "925370896542",
  appId: "1:925370896542:web:1fbfbc63b9134dc2e7eb8f",
  measurementId: "G-H7S83DPCHC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
