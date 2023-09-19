import React from "react";
import "./NewsPage.css";
// import { Link } from "react-router-dom";
import Logo from "../Assets/Images/Logo.svg";
import Notification from "../Assets/Images/notification-line.svg";
import Profile from "../Assets/Images/Sarah-profile.svg";
import DropDown from "../Assets/Images/drop-down-line.svg";
import ProfileNews from "../Assets/Images/Sarah-for-news.svg";
import ProfileFollow from "../Assets/Images/Sarah-follow.svg";
import ProfileTopics from "../Assets/Images/sarah-hot-topics.svg";
import News1 from "../Assets/Images/News1.png";
import VerifyBadge from "../Assets/Images/verified.svg";
import SearchIcon from "../Assets/Images/search.svg";

export default function NewsPage() {
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
          <img className="drop-down" src={DropDown} alt="drop down" />
        </div>
      </header>
      <div className="header-links">
        <a
          style={{ color: "#3498DB" }}
          href="/news"
          className="header-links-mobile"
        >
          For you
        </a>
        <a href="/events" className="header-links-mobile">
          Following
        </a>
        <a href="/projects" className="header-links-mobile">
          Africa
        </a>
        <a href="/contact" className="header-links-mobile">
          Artificial intelligence
        </a>
        <img className="drop-down-mobile" src={DropDown} alt="drop down" />
        <a href="/contact" className="header-links-desktop">
          Software
        </a>
        <a href="/contact" className="header-links-desktop">
          Robotics
        </a>
        <a href="/contact" className="header-links-desktop">
          Space Tech
        </a>
        <a href="/contact" className="header-links-desktop">
          Programming
        </a>
        <a href="/contact" className="header-links-desktop">
          Virtual reality
        </a>
        <a href="/contact" className="header-links-desktop">
          Python
        </a>
      </div>

      <main className="main">
        <div className="main-left">
          <p className="for-you">For you</p>
          <div className="news-1">
            <div className="news-1-img">
              <img className="news-pic" src={News1} alt="News Pic" />
            </div>
            <div className="news-1-text">
              <div className="news-1-text-top">
                <img className="profile-news" src={ProfileNews} alt="Profile" />
                <p className="sarah">Sarah | September 11</p>
                <p className="follow">following</p>
              </div>
              <h3 className="news-header">
                Market intelligence firm Sensor Tower conducts layoffs, several
                execs out
              </h3>
              <p className="news-text">
                Sensor Tower, a prominent market intelligence firm for the app
                economy, this week laid off a notable portion of its workforce,
                estimated at around 40 people out of the 270+ at the company,
                according to LinkedIn’s headcount. The layoffs included C-suite
                executives, TechCrunch has learned from multiple sources,
                including the...
              </p>
              <div className="news-1-text-top-mobile">
                <img
                  className="profile-news-mobile"
                  src={ProfileNews}
                  alt="Profile"
                />
                <p className="sarah">Sarah | September 11</p>
              </div>
              <div className="news-1-text-bottom">
                <p>5 min read</p>
              </div>
            </div>
          </div>
          {/* News 2 start */}
          <div className="news-1">
            <div className="news-1-img">
              <img className="news-pic" src={News1} alt="News Pic" />
            </div>
            <div className="news-1-text">
              <div className="news-1-text-top">
                <img className="profile-news" src={ProfileNews} alt="Profile" />
                <p className="sarah">Sarah | September 11</p>
                <p className="follow">following</p>
              </div>
              <h3 className="news-header">
                Market intelligence firm Sensor Tower conducts layoffs, several
                execs out
              </h3>
              <p className="news-text">
                Sensor Tower, a prominent market intelligence firm for the app
                economy, this week laid off a notable portion of its workforce,
                estimated at around 40 people out of the 270+ at the company,
                according to LinkedIn’s headcount. The layoffs included C-suite
                executives, TechCrunch has learned from multiple sources,
                including the...
              </p>
              <div className="news-1-text-top-mobile">
                <img
                  className="profile-news-mobile"
                  src={ProfileNews}
                  alt="Profile"
                />
                <p className="sarah">Sarah | September 11</p>
              </div>
              <div className="news-1-text-bottom">
                <p>5 min read</p>
              </div>
            </div>
          </div>
          {/* News 2 End */}
          {/* News 3 start */}
          <div className="news-1">
            <div className="news-1-img">
              <img className="news-pic" src={News1} alt="News Pic" />
            </div>
            <div className="news-1-text">
              <div className="news-1-text-top">
                <img className="profile-news" src={ProfileNews} alt="Profile" />
                <p className="sarah">Sarah | September 11</p>
                <p className="follow">following</p>
              </div>
              <h3 className="news-header">
                Market intelligence firm Sensor Tower conducts layoffs, several
                execs out
              </h3>
              <p className="news-text">
                Sensor Tower, a prominent market intelligence firm for the app
                economy, this week laid off a notable portion of its workforce,
                estimated at around 40 people out of the 270+ at the company,
                according to LinkedIn’s headcount. The layoffs included C-suite
                executives, TechCrunch has learned from multiple sources,
                including the...
              </p>
              <div className="news-1-text-top-mobile">
                <img
                  className="profile-news-mobile"
                  src={ProfileNews}
                  alt="Profile"
                />
                <p className="sarah">Sarah | September 11</p>
              </div>
              <div className="news-1-text-bottom">
                <p>5 min read</p>
              </div>
            </div>
          </div>
          {/* News 3 End */}
        </div>

        <div className="main-right">
          <div className="who-to-follow-div">
            <p>Who to follow</p>
            <div className="person-1">
              <img
                className="profile-follow"
                src={ProfileFollow}
                alt="Profile"
              />
              <div className="person-1-text-div">
                <div className="name-div">
                  <p className="person-1-name">Chinaza Sunday</p>
                  <img className="badge" src={VerifyBadge} alt="Badge" />
                </div>
                <p className="person-1-info">
                  Frontend developer, fashion designer, Technical...
                </p>
              </div>
              <p className="person-1-follow">Follow</p>
            </div>
            {/* Person 2 start */}
            <div className="person-1">
              <img
                className="profile-follow"
                src={ProfileFollow}
                alt="Profile"
              />
              <div className="person-1-text-div">
                <div className="name-div">
                  <p className="person-1-name">Chinaza Sunday</p>
                  <img className="badge" src={VerifyBadge} alt="Badge" />
                </div>
                <p className="person-1-info">
                  Frontend developer, fashion designer, Technical...
                </p>
              </div>
              <p className="person-1-follow">Follow</p>
            </div>
            {/* Person 2 end */}
            {/* Person 3 start */}
            <div className="person-1">
              <img
                className="profile-follow"
                src={ProfileFollow}
                alt="Profile"
              />
              <div className="person-1-text-div">
                <div className="name-div">
                  <p className="person-1-name">Chinaza Sunday</p>
                  <img className="badge" src={VerifyBadge} alt="Badge" />
                </div>
                <p className="person-1-info">
                  Frontend developer, fashion designer, Technical...
                </p>
              </div>
              <p className="person-1-follow">Follow</p>
            </div>
            {/* Person 3 end */}
            {/* Person 4 start */}
            <div className="person-1">
              <img
                className="profile-follow"
                src={ProfileFollow}
                alt="Profile"
              />
              <div className="person-1-text-div">
                <div className="name-div">
                  <p className="person-1-name">Chinaza Sunday</p>
                  <img className="badge" src={VerifyBadge} alt="Badge" />
                </div>
                <p className="person-1-info">
                  Frontend developer, fashion designer, Technical...
                </p>
              </div>
              <p className="person-1-follow">Follow</p>
            </div>
            {/* Person 3 end */}

            <a href="" className="see-more-suggestions">
              See more suggestions
            </a>
          </div>
          <div className="hot-topics-div">
            <p className="hot">Hot Topics!</p>

            <div className="hot-topics">
              <div className="hot-topics-profile">
                <img
                  className="hot-topics-profile"
                  src={ProfileTopics}
                  alt="Profile"
                />
                <p className="hot-topics-name">Sarah</p>
              </div>
              <p className="hot-topics-text">
                Market intelligence firm Sensor Tower conducts layoffs, several
                execs out
              </p>
            </div>
            {/* Hot topics 2 start */}
            <div className="hot-topics">
              <div className="hot-topics-profile">
                <img
                  className="hot-topics-profile"
                  src={ProfileTopics}
                  alt="Profile"
                />
                <p className="hot-topics-name">Sarah</p>
              </div>
              <p className="hot-topics-text">
                Market intelligence firm Sensor Tower conducts layoffs, several
                execs out
              </p>
            </div>
            {/* Hot topics 3 end */}
            {/* Hot topics 2 start */}
            <div className="hot-topics">
              <div className="hot-topics-profile">
                <img
                  className="hot-topics-profile"
                  src={ProfileTopics}
                  alt="Profile"
                />
                <p className="hot-topics-name">Sarah</p>
              </div>
              <p className="hot-topics-text">
                Market intelligence firm Sensor Tower conducts layoffs, several
                execs out
              </p>
            </div>
            {/* Hot topics 3 end */}

            <a href="" className="see-more-suggestions">
              See more
            </a>
          </div>

          <div className="info-div">
            <a href="#">Team</a>
            <a href="#">About Us</a>
            <a href="#">Help</a>
          </div>
        </div>
      </main>
    </div>
  );
}
