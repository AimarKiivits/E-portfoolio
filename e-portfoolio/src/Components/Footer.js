import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} My E-Portfolio</p>
            <p>Email: <a>Aimar.kiivits@voco.ee</a></p>
            <p>Phone: <a>56254513</a></p>
        </footer>
    );
};

export default Footer;