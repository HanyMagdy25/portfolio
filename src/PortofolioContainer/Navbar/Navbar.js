import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <Link to="/" className="navbar-logo">
              Fady
            </Link>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={handleClick}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links" onClick={handleClick}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={handleClick}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-links" onClick={handleClick}>
                Contact
              </Link>
            </li>
          </ul>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
