import React, { useState } from "react";

const Login = () => {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setError('')
    if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
        setError("Please Add Uppor Case");
        return;
    } else if (!/(?=.*[a-zA-Z!#$%&])/.test(password)) {
        setError("Please Add Special Character");
        return;
    }
    else if(password < 6){
            setError("Enter 6 Number")
            return;
    }
    // Clear error if validation passes
    setError('');
    // Perform further login logic
  };
  return (
    <div className="w-25 mx-auto">
      <form onSubmit={handelLogin}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            name="email"
            className="form-control"
            id="username"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" name="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        {error && <p className="text-danger">{error}</p>}
        <div className="mb-3">
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
