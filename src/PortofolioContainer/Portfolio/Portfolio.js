import React from "react";
import "./Portfolio.css";
const Portfolio = () => {
  return (
    <div className="portofolio">
      <div className="services">
        <h1 className="title-global">Services</h1>
        <p className="pragraph-global">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
          omnis iste natur
        </p>
      </div>
      <div className="all-cards">
        <div className="card-one">
          <div className="card-content">
            <h2 className="card-title">First Card</h2>
            <p className="card-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="https://www.facebook.com/hany.magdy25/">
              <button className="btn primary-btn">Read More</button>
            </a>
          </div>
        </div>

        <div className="card-two">
          <div className="card-content">
            <h2 className="card-title">Second Card</h2>
            <p className="card-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="https://www.facebook.com/hany.magdy25/">
              <button className="btn primary-btn">Read More</button>
            </a>
          </div>
        </div>

        <div className="card-three">
          <div className="card-content">
            <h2 className="card-title">Third card</h2>
            <p className="card-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="https://www.facebook.com/hany.magdy25/">
              <button className="btn primary-btn">Read More</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
