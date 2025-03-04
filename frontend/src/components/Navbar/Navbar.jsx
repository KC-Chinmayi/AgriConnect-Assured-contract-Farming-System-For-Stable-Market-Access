import React from "react";
import { Link as ScrollLink } from "react-scroll"; // Alias to avoid conflict
import { Link } from "react-router-dom"; // For page navigation links
import logo from "../assets/logo.jpg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <div className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <nav className="nav-links-container">
          <ul className="nav-links">
            <li>
              <Link to="/" >
                Home
              </Link>
            </li>
            <li>
              <ScrollLink to="about" smooth={true} duration={500}>
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="missions" smooth={true} duration={500}>
                Missions
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="what-we-do" smooth={true} duration={500}>
                What We Do
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" smooth={true} duration={500}>
                Contact
              </ScrollLink>
            </li>
          </ul>
        </nav>
        <div className="buttons-container">
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
          <Link to="/signup">
            <button className="signup-btn">Sign Up</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
