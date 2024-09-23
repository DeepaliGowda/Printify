
import React, { useState } from 'react';
import '../styles/Navbar.css'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#logo">Printify</a>
      </div>
      <div className="hamburger" onClick={toggleNavbar}>
        ☰
      </div>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#home">Catalog</a></li>
        <li><a href="#works">How it works</a></li>
        <li><a href="#price">Pricing</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#help">Need help?</a></li>


      </ul>
      <div className="navbar-auth">
        <button className="navbar-login">Login</button>
        <button className="navbar-signup">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
