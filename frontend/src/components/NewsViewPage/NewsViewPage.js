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
import Laptop from '../Assets/Laptop.png';


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

      <div className='container'>
<div className= 'market'>
      <h1>Market intelligence firm Sensor Tower</h1>
      <h1>conducts layoffs, several execs out</h1></div>

      <div className="profile-picture">
        <img className="profile" src={Profile} alt="Profile" />
     <span className="author">Sarah Follow</span>
    <p>9:01 PM WAT-September 11, 2023</p></div>

    <div className="Laptop">
    <img className="profile" src={Laptop} alt="Laptop" />
    </div>

      <div className="article-content">
        <p>
          Sensor Tower, a prominent market intelligence firm for the app
          economy, this week laid off a notable portion of its workforce,
          estimated at around 40 people out of the 270+ at the company,
          according to LinkedIn’s headcount. The layoffs included C-suite
          executives, TechCrunch has learned from multiple sources,
          including the CMO, CFO and chief product officer. Other teams
          impacted include finance and nearly all of marketing, we’re
          hearing. Sensor Tower, a prominent market intelligence firm for the app
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

      <h2 className='comment'>COMMENTS</h2>

      
      <div className="sarah"></div>
      <div className="profile-sarah">
          <img className="profile" src={Profile} alt="Profile" />{' '}
          <span className="autho">Sarah | September 11, 2023</span> </div>
          <p className="sarah-comment">
            This is a nice article, I have been looking for this link for a
            while now, I will be waiting for your next article and I will
            also give you a follow right now
          </p>

          <div className="sarah"></div>
      <div className="profile-sarah">
          <img className="profile" src={Profile} alt="Profile" />{' '}
          <span className="autho">Sarah | September 11, 2023</span> </div>
          <p className="sarah-comment">
            This is a nice article, I have been looking for this link for a
            while now, I will be waiting for your next article and I will
            also give you a follow right now
          </p>

          <div className="sarah"></div>
      <div className="profile-sarah">
          <img className="profile" src={Profile} alt="Profile" />{' '}
          <span className="autho">Sarah | September 11, 2023</span> </div>
          <p className="sarah-comment">
            This is a nice article, I have been looking for this link for a
            while now, I will be waiting for your next article and I will
            also give you a follow right now
          </p>

          <div className="sarah"></div>
      <div className="profile-sarah">
          <img className="profile" src={Profile} alt="Profile" />{' '}
          <span className="autho">Sarah | September 11, 2023</span> </div>
          <p className="sarah-comment">
            This is a nice article, I have been looking for this link for a
            while now, I will be waiting for your next article and I will
            also give you a follow right now
          </p>
          
        
      

      {/* Repeat the comment section as needed... */}

      <div className='comment-form'>
      <h2>Leave a comment</h2>
      <div className='comment-form'></div>
      <form>
        <div className='form-control'></div>
    <input type='text'  placeholder='Comment' />
      </form> </div>

      <button>Post comment</button>

      </div>
    
      </div>
        

        
  );
}
