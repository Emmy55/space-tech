import React from 'react';
import './landingPage.css';

import background from '../Assets/background-img.svg';
import Logo from '../Assets/Logo.png';

function LandingPage() {
  return (
    <div>
      <div className="header">
      <img src={Logo} alt="Logo" />
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Contact</a>
          <button>Sign In</button>
          <button>Get Started</button>
        </div>
      </div>
      <div className="content-container">
        <div className="content">
          <h1>Stay Up to Date</h1>
          <p>A place where you get updated about what's happening in the world of technology.</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
