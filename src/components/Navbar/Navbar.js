import React from 'react';
import "./Navbar.css";
import logo from "../../assets/images/logo.png"

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-icon">
        {/* Place your icon component or image here */}
        <img src={logo} alt="Icon" />
      </div>
      <div className="navbar-title">
        {/* Title or logo */}
        Ami Meditex
      </div>
      {/* <ul className="navbar-menu">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul> */}
    </nav>
  );
};

export default NavBar;
