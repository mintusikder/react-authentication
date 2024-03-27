import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import app from "./firebase/firebasez.config";
import { Link } from "react-router-dom";

const Register = () => {
  const auth = getAuth(app);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassoed] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');
    setSuccess("");
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;

    // Regex pattern to check if the password contains at least one letter
    const containsLetter = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/.test(password);

    if (!containsLetter) {
      setError("Password must contain at least one letter");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        event.target.reset();
        setSuccess("Registration successful");
        sendVerificationEmail(user);
        updateUserData(user, name);
      })
      .catch(error => {
        setError(error.message);
        setSuccess("");
      });
  };

  const sendVerificationEmail = (user) => {
    sendEmailVerification(user)
      .then(result => {
        console.log(result);
        alert("Please verify your email");
      })
      .catch(error => {
        console.log(error);
      });
  };

  const updateUserData = (user, name) => {
    updateProfile(user, {
      displayName: name
    })
      .then(() => {
        console.log("User name updated");
      })
      .catch(error => {
        console.log(error);
      });
  };

 const handelShowPassword = () =>{
  setShowPassoed(!showPassword)
 }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
        />
        <br /><br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
        />
        <br /><br />
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          placeholder="Enter your password"
        />
        <button type="button" onClick={handelShowPassword}>
          {showPassword? "Hide":"Show" } Password
        </button>
        <br /><br />
        <input type="submit" value="Register" />
      </form>
      <p><small>Already have an account? <Link to='/login'>Login</Link></small></p>
      {error && <p className="text-danger">{error}</p>}
      {success && <p className="text-success">{success}</p>}
    </div>
  );
};

export default Register;
