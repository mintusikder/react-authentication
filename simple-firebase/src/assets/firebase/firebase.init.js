// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCpKq5oluHmvvVwBrXnHkzCCfmh2NKFi4",
  authDomain: "simple-firebase-2a10a.firebaseapp.com",
  projectId: "simple-firebase-2a10a",
  storageBucket: "simple-firebase-2a10a.appspot.com",
  messagingSenderId: "1073790022196",
  appId: "1:1073790022196:web:da5784daba0b3e00e45061",
  measurementId: "G-X3B03V4K04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);