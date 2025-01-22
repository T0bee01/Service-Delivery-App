import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"; // Import the CSS file for styling

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
