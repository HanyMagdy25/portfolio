import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AboutMe from './PortofolioContainer/AboutMe/AboutMe';
import Profile from './PortofolioContainer/Home/Profile';
import Portfolio from './PortofolioContainer/Portfolio/Portfolio';
import Footer from './PortofolioContainer/Footer/Footer';



function App() {
  return (
    <>
      <Router>
        <Profile/>
        <AboutMe/>
        <Portfolio/>
        <Footer/>
      </Router>
      
    </>
  );
}

export default App;
