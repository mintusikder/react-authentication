// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWO2B3NdSQEOxEwMwjaS1v62kicb6I5c0",
  authDomain: "email-password-auth-test.firebaseapp.com",
  projectId: "email-password-auth-test",
  storageBucket: "email-password-auth-test.appspot.com",
  messagingSenderId: "206681438456",
  appId: "1:206681438456:web:ef36f34770ce19315de30d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;