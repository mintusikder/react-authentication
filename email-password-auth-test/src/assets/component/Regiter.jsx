// import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../friebase/firebase.config";
import { useState } from "react";

const Regiter = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(" ");
  const [showPassword, setShowPassword] = useState('')
  const [error, setError] = useState("");
  const auth = getAuth(app);
  const handelRejester = (event) => {
    event.preventDefault();
    if ((email, password)) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } else {
      setError("bro hobe na");
    }
  };
  console.log(email, password);
  return (
    <div>
      <h2>Registration Form</h2>
      <form>
        <div className="form-group">
          <p className="text-danger">{error}</p>
          <label htmlFor="email">Email:</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword? "text":"password"}
            id="password"
            name="password"
            required
          />
          <button onClick={() => setShowPassword(!showPassword)}>
            {showPassword? "See":"Hide"}
          </button>
        </div>
        <p className="text-primary">{error}</p>
        <div className="form-group">
          <input onClick={handelRejester} type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
};

export default Regiter;
