// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR14I_RfB4EotuaC8_EK9U3bWuimRR9ug",
  authDomain: "email-password-auth-ba3c8.firebaseapp.com",
  projectId: "email-password-auth-ba3c8",
  storageBucket: "email-password-auth-ba3c8.appspot.com",
  messagingSenderId: "485497616511",
  appId: "1:485497616511:web:0a4be5f0e443b3adc8a74a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app