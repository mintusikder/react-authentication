// import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/registerRBS">Register RBS</Link>
            <Link to="/registerBS">Register BS</Link>
        </div>
    );
};

export default Header;