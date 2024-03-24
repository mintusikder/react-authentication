// import React from 'react';

const Regiter = () => {
  return (
    <div>
      <h2>Registration Form</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
};

export default Regiter;
