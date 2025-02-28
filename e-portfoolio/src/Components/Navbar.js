import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="navbar">
            <button 
                onClick={() => navigate('/')} 
                className={location.pathname === "/" ? "active" : ""}
            >
                Home
            </button>
            <button 
                onClick={() => navigate('/about')} 
                className={location.pathname === "/about" ? "active" : ""}
            >
                About
            </button>
            <button 
                onClick={() => navigate('/projects')} 
                className={location.pathname === "/projects" ? "active" : ""}
            >
                Projects
            </button>
            <button 
                onClick={() => navigate('/contact')} 
                className={location.pathname === "/contact" ? "active" : ""}
            >
                Contact
            </button>
        </div>
    );
}

export default Navbar;