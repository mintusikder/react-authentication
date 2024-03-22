import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.cofig";
import { useState } from "react";
const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handelGoToGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const userData = result.user;
        console.log(userData);
        setUser(userData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handelSignOut = () =>{
    signOut(auth)
    .then(reault => {
        console.log(reault)
        setUser(null)
    })
    .catch(error =>{
        console.log(error)
    })
  }
  return (
    <div>
     {user? 
         <button onClick={handelSignOut}>Sign Out</button>:
         <button onClick={handelGoToGoogle}>Go to google</button>
     }
      {user && (
        <>
          <h3>User: {user ? user.displayName : "Not Found"}</h3>
          <p>User: {user ? user.email : "Not Found"}</p>
          <img src={user? user.photoURL: "Not Found"} alt="" />
        </>
      )}
    </div>
  );
};

export default Login;
