import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer>
            <a href="#home" className="footer__logo">
                Barni's Portfolio Page
            </a>
            <ul className="permalinks">
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;