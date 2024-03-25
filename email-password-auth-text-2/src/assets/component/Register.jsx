// import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>This is register</h2>
            <form >
                <input type="email" id="email" name="email" placeholder="Enter Your email" /> <br />
                <input type="password" id="password" name="password" placeholder="Enter Your password" />
            </form>
            <button>Register</button>
        </div>
    );
};

export default Register;