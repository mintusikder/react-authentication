// import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);
  
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  
  const handelGoToGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
    <div>
      <button onClick={handelGoToGoogle}>Go to Google</button>
      <div>
        <h3>User: {user ? user.displayName : "Not logged in"}</h3>
      </div>
    </div>
  );
};

export default Login;
