import React from 'react';
import './NewsViewPage.css'; // Import your CSS file

import Logo from "../Assets/Images/Logo.svg";
import Notification from "../Assets/Images/notification-line.svg";
import Profile from "../Assets/Images/Sarah-profile.svg";
import SearchIcon from "../Assets/Images/search.svg";
import Facebook from "../Assets/Facebook.png";
import LinkedIn from "../Assets/LinkedIn.png";
import Instagram from "../Assets/Instagram.png";
import ArrowUp from "../Assets/arrowup.png";
import ArrowRight from '../Assets/arrowRight.png';

export default function NewsViewPage() {
  return (
    <div>
      <header className="header">
        <img className="logo" src={Logo} alt="Logo" />

        <div className="header-right">
          <div className="header-search">
            <img
              className="search-icon-desktop"
              src={SearchIcon}
              alt="search"
            />
            <input className="search" type="search" placeholder="Search" />
          </div>

          <div className="not-div-1">
            <img className="search-icon-mobile" src={SearchIcon} alt="search" />
            <div className="not-div">
              <p className="not">0</p>
            </div>
            <img
              className="notification"
              src={Notification}
              alt="notification"
            />
          </div>

          <img className="profile" src={Profile} alt="Profile" />
          
        </div>
      </header>

      <h1>Market intelligence firm Sensor Tower</h1>
      <h1>conducts layoffs, several execs out</h1>

      <div className="profile-picture">
        <img className="profile" src={Profile} alt="Profile" />
      </div>

      <p>
        <span className="author">Sarah Follow</span>
      </p>
      <p>9:01 PM WAT-September 11, 2023</p>

      <div className='Laptop'></div>
      <img className="profile" src={Profile} alt="Profile" />

      <div className="article-content">
        <p>
          Sensor Tower, a prominent market intelligence firm for the app
          economy, this week laid off a notable portion of its workforce,
          estimated at around 40 people out of the 270+ at the company,
          according to LinkedIn’s headcount. The layoffs included C-suite
          executives, TechCrunch has learned from multiple sources,
          including the CMO, CFO and chief product officer. Other teams
          impacted include finance and nearly all of marketing, we’re
          hearing.
        </p>

        {/* ... (rest of the article content) */}
      </div>

      <h2>COMMENTS</h2>

      <div className="comment">
        <div className="profile-picture">
          <img className="profile" src={Profile} alt="Profile" />{' '}
          <span className="author">Sarah | September 11, 2023</span>
          <p>
            This is a nice article, I have been looking for this link for a
            while now, I will be waiting for your next article and I will
            also give you a follow right now
          </p>
        </div>
      </div>

      {/* Repeat the comment section as needed... */}

      <h2>Leave a comment</h2>
      <div className='comment-form'></div>
      <form>
        <div className='form-control'></div>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' placeholder='Comment' />
      </form>

      <button>Post comment</button>

      <div className="lowerFooter">
        <h3>SpaceTech</h3>
        <div className="about">
          <b>
            <p>About</p>
          </b>
          <a href=".">SpaceTech</a>
          <a href=".">Contact Us</a>
          <a href=".">Staff</a>
          <a href=".">Site Map</a>
        </div>

        <div className="work">
          <b>
            <p>Work With Us</p>
          </b>
          <a href=".">How to publish</a>
          <a href=".">Set up profile</a>
        </div>

        <div className="social">
          <p>Follow Us!</p>
          <div className="follow">
            <a href="https://facebook.com/">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="https://instagram.com/">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="https://linkedin.com/">
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
          </div>
          <a className="arrowUp" href="#hero">
            <img src={ArrowUp} alt="ArrowUp" />
          </a>
        </div>
      </div>

      <p className="copy">&copy; 2023-SpaceTech. All Rights Reserved.</p>
    </div>
  );
}
