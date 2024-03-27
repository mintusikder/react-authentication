// import React from 'react';

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/registerrbs">Register Rbs</Link>
            <Link to="/registerboos">Register Roos</Link>
        </nav>
    );
};

export default Header;