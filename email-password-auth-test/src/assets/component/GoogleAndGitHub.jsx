// import React from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../friebase/firebase.config";
import { useState } from "react";

const GoogleAndGitHub = () => {
    const [user, setUser] = useState({})
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const handelGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const userData = result.user;
        setUser(userData)
        console.log(userData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handelGitHub= () =>{
    signInWithPopup(auth, gitHubProvider)
    .then(result=>{
        const gitHubUser = result.user
        console.log(gitHubUser)

    })
    .catch(error =>{
        console.log(error)
    })
  }

  return (
    <div>
      <button onClick={handelGoogle}>Google</button>
      <button onClick={handelGitHub}>Git Hub</button>
    </div>
  );
};

export default GoogleAndGitHub;
