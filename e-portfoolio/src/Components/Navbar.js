import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <button onClick={() => navigate('/')}>Home</button>
            <button onClick={() => navigate('/about')}>About</button>
            <button onClick={() => navigate('/projects')}>Projects</button>
            <button onClick={() => navigate('/contact')}>Contact</button>
        </div>
    );
}

export default Navbar;