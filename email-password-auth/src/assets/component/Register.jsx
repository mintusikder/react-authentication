// import React from 'react';

import { useState } from "react";

const Register = () => {
    const [email , setEmail] = useState('')

    const handelSubmit = (event) =>{
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email,password)
    }

    const handelEmailChange =(event) =>{
            console.log(event.target.value)
            setEmail(event.target.value)
    }

    const handelPasswordBlur = (event) =>{
            console.log(event.target.value)
    }
    return (
        <div>
            <h3>Register</h3>
            <form onSubmit={handelSubmit}>
                <input className="w-50 mb-4 rounded ps-2" onChange={handelEmailChange} type="email" name="email" id="email" placeholder="Your Email"/> <br />
                <input className="w-50 mb-4 rounded ps-2" onBlur={handelPasswordBlur} type="password" name="password" id="password" placeholder="Your Password"/> <br />
                <input className="btn btn-primary" type="submit" value="Register"/>
            </form>
        </div>
    );
};

export default Register;