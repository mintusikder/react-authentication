import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.target.email.value); 
  };

  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePasswordBlur = (e) => {
    console.log(e.target);
  };

  return (
    <div>
      <h2>This is register</h2>
      <form onSubmit={handleRegister}>
        <input
          onChange={handleEmail}
          type="email"
          id="email"
          name="email"
          placeholder="Enter Your email"
        />
        <br />
        <input
          onBlur={handlePasswordBlur}
          type="password"
          id="password"
          name="password"
          placeholder="Enter Your password"
        />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
