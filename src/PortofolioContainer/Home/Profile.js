import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Profile.css"

const Profile = () => {
  return (
    <div className="profile-container">
      <Navbar/>
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-details-links">
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
          <div className="profile-details-name">
            <h1 className="profile-title">
              Hello, I'M <span className="highlight-text">Fady</span>
            </h1>
            <p>
              Hello, I'M <span className="highlight-text">Fady</span>
            </p>
            <p className="profile-paragraph">
            I'm an IT Professional with 11+ years of experience in Microsoft Systems & Network Infrastructure and Cloud Services.
            </p>
          </div>
          <div className="profile-details-btns">
            <button className="btn primary-btn">Hire Me</button>
            <a href="Front.pdf" download="Fady.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>

        <div className="profile-picture">
            <div className="profile-picture-background"></div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,202.7C384,181,480,107,576,106.7C672,107,768,181,864,224C960,267,1056,277,1152,234.7C1248,192,1344,96,1392,48L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
  );
};

export default Profile;
