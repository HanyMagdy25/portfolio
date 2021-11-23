import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h1 className="title-global">Fady</h1>
          <p className="footer-pragraph">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet.
          </p>
        </div>

        <div className="footer-links">
          <a href="https://www.facebook.com/FadyMounirSamy">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="https://www.linkedin.com/in/fadymounir/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/fadymounir/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.linkedin.com/in/fadymounir/">
            <i className="fab fa-twitter-square"></i>
          </a>
        </div>

        <div className="copyright">
            <span>Copyright © 2021 </span><a href="https://www.facebook.com/hany.magdy25" className="flores">Flores</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
