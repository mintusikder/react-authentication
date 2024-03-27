// import React from 'react';
import { getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from "react";
import app from "./firebase/firebasez.config";
import { Link } from "react-router-dom";
const auth = getAuth(app);
const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const emailRef = useRef()


  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    setError("");
    if (!/(?=.*[A-Za-z])/.test(password)) {
      setError("Please set valid password");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setSuccess("User Login Success");
        console.log(user);
        setError('');
        event.target.reset();
        sendVerificationEmail(result.user)
      })
      .catch((error) => {
        setError(error.message);
        setSuccess("");
      });
  };

  const sendVerificationEmail = (user) =>{
    sendEmailVerification(user)
    .then(result=>{
        console.log(result)
        alert("Please varify your email")
    })
  }

  const handelResetPassword =(event) =>{
    const email = emailRef.current.value
    if(!email){
      alert("Please Provide Your Email")
      return
    }
    sendPasswordResetEmail(auth,email)
    .then(() =>{
      alert("Please cheak your email")
    })
    .catch(error =>{
      console.log(error)
    })
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            ref={emailRef}

          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
     

          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <p><small>Forgate Password <button onClick={handelResetPassword} className="btn btn-link">Reset Password</button></small></p>
      <p><small>New To This website? Please <Link to='/register'>Register</Link></small></p>
      <p className="text-danger">{error}</p>
      <p className="text-primary">{success}</p>
    </div>
  );
};

export default Login;
