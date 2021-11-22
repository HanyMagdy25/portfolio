import React from "react";
import "./AboutMe.css";
const AboutMe = () => {
  return (
    <>
      <div className="about">
        <div className="about-container">
          <div className="row">
            <div className="col-sm-5 col-xs-12 about-left">
                <div className="about-left-bg">
                    
                </div>
            </div>

            <div className="col-sm-7 col-xs-12 about-right">
                <h2 className="title-global">About Me</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nu pariatur excepteur sint occaecat.
              </p>
              <div className="about-details-btns">
                <a href="https://www.facebook.com/hany.magdy25/"><button className="btn second-btn">Hire Me</button></a>
                <a href="Front.pdf" download="Fady.pdf">
                  <button className="btn second-highlighted-btn">Get Resume</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
