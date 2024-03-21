// import React from 'react';
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import app from "../firebase/firebase.init";
const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handelGoogleLogin = () =>{
    console.log("Button")
  }
  return (
    <div>
      <button onClick={handelGoogleLogin}>Google Login</button>
    </div>
  );
};

export default Login;
