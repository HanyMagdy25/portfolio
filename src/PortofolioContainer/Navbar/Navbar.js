import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { scroller } from "react-scroll";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const scrollToContact = () => {
    scroller.scrollTo("contact", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  const scrollToAbout = () => {
    scroller.scrollTo("about", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  const scrollToService = () => {
    scroller.scrollTo("portofolio", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

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
              <Link to="/about" className="nav-links" onClick={scrollToAbout}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={scrollToService}
              >
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={scrollToContact}
              >
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
