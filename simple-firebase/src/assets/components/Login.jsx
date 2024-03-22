// import React from 'react';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const handelGoToGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handelSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handelGithubLogin =() =>{
    signInWithPopup(auth,gitHubProvider)
    .then(result => {
      const loggedInUser= result.user
      console.log(loggedInUser)
      setUser(loggedInUser)
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <div>
      {user ? (
        <button onClick={handelSignOut}>Sign Out</button>
      ) : (
        <>
          <button onClick={handelGoToGoogle}>Go to Google</button>
          <button onClick={handelGithubLogin}>GitHub Login</button>
        </>
      )}
      {user && (
        <div>
          <h3>User: {user ? user.displayName : "Not logged in"}</h3>
          <h3>Email: {user ? user.email : "Not logged in"}</h3>
          <img src={user ? user.photoURL : "Not Image"} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
