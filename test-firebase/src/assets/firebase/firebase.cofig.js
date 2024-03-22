// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIVlUZL1Lgxsvmmb7Yej0yHTz6jQ3I2Aw",
  authDomain: "test-firebase-ae888.firebaseapp.com",
  projectId: "test-firebase-ae888",
  storageBucket: "test-firebase-ae888.appspot.com",
  messagingSenderId: "470938015652",
  appId: "1:470938015652:web:ea4f907e7dd26200c31331"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app