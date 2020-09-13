import React, { useEffect, useState } from 'react';
import logo from './logo.png';
import './Navbar.css';

function Navbar() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        })
        return () => {
            window.removeEventListener('scroll');
        }
    }, [])
    return (
        <div className={`navbar ${show && "navbar_black"}`}>
            <img className="navbar__logo" src={logo} alt="Netflix Logo" />
        </div>
    )
}


export default Navbar;