import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import app from "../../friebase/firebase.config";

const auth = getAuth(app);

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const logUser = result.user;
      console.log(logUser);
      event.target.reset();
      setSuccess("User has been successfully registered.");
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    }
  };

  return (
    <div>
      <h3>Register</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="w-50 mb-4 rounded ps-2"
          type="email"
          name="email"
          required
          placeholder="Your Email"
        />{" "}
        <br />
        <input
          className="w-50 mb-4 rounded ps-2"
          type="password"
          name="password"
          required
          placeholder="Your Password"
        />{" "}
        <br />
        <button className="btn btn-primary" type="submit">Register</button>
      </form>
      {error && <p className="text-danger">{error}</p>}
      {success && <p className="text-success">{success}</p>}
    </div>
  );
};

export default Register;
