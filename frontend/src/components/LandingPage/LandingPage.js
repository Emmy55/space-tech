import React from "react";
import "./landingPage.css";

import Background from "../Assets/background-img.svg";
import Logo from "../Assets/Logo.png";
import Thinker from "../Assets/thinking.png";
import Team from "../Assets/team.png";
import BlogOne from "../Assets/blog_1.png";
import BlogTwo from "../Assets/blog_2.png";
import ProfilePics from "../Assets/profilepics.png";
import RecieveEmail from "../Assets/subscribe.png";
import Facebook from "../Assets/Facebook.png";
import LinkedIn from "../Assets/LinkedIn.png";
import Instagram from "../Assets/Instagram.png";
import ArrowUp from "../Assets/arrowup.png";
import ArrowRight from "../Assets/arrowRight.png";

function LandingPage() {
  return (
    <div>
      <div className="hero" id="hero">
        <div className="header-landing">
          <a href="./">
            <img className="logo" src={Logo} alt="Logo" />
          </a>
          <div className="nav-links">
            <a href=".">Home</a>
            <a href=".">Contact</a>
            <a className="signInBtn" href="">
              Sign In
            </a>
            <a className="getBtn" href="">
              Get started
            </a>
          </div>
        </div>
        <div className="content-container">
          <img className="back-img" src={Background} alt="bkg" />
          <div className="content">
            <h1>Stay Up to Date</h1>
            <h2>With technology</h2>
            <p>
              A place where you get updated about what's happening in the world
              of technology.
            </p>
            <button>Get Started</button>
          </div>
        </div>
      </div>
      <div className="next">
        <div className="left">
          <img src={Thinker} alt="thinker" />
          <div className="lefttext">
            <div className="txt">
              <h3>Stay In The Loop, Get the Tech Scoop!</h3>
              <p>
                Your go-to source for breaking tech news, trends, and updates
                from the ever-evolving world of technology.
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={Team} alt="team" />
          <div className="righttext">
            <div className="txt">
              <h3>Stay In The Know, Share the Tech Flow!</h3>
              <p>
                Stay informed about tech news and share your insights with
                others, contributing to the tech world's knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="recent">
        <div className="recentLeft">
          <h3>RECENTLY ADDED</h3>
          <div className="mainLeft">
            <div className="eachBlog">
              <a href=".">
                <img src={BlogOne} />
                <div className="text">
                  <h4>
                    Market intelligence firm Sensor Tower conducts layoffs,
                    several execs out
                  </h4>
                  <div className="details">
                    <img src={ProfilePics} />
                    <h5>Username |</h5>
                    <h6>Date posted</h6>
                  </div>
                  <p>
                    Sensor Tower, a prominent market intelligence firm for the
                    app economy, this week laid off a notable portion of its
                    workforce, estimated at around 40 people out of the 270+ at
                    the company, according to LinkedIn’s headcount. The layoffs
                    included C-suite executives, TechCrunch has learned from
                    multiple sources, including the...
                  </p>
                </div>
              </a>
            </div>
            {/* <hr className='hr'/> */}
          </div>
          <a className="seemore" href=".">
            See More
          </a>
        </div>
        <div className="recentRight">
          <h3>TOP CATEGORIES</h3>
          <div className="topic">
            <a href=".">
              <h6>Python</h6>
            </a>
            <a href=".">
              <h6>Space Tech</h6>
            </a>
            <a href=".">
              <h6>AI</h6>
            </a>
            <a href=".">
              <h6>Crypto</h6>
            </a>
            <a href=".">
              <h6>New Language</h6>
            </a>
          </div>
          <a href=".">See more topics</a>
          <h3 className="popular">POPULAR CONTENT</h3>
          <img src={ArrowRight} />
          <p className="eachitem">
            What is AI treats humans the way we treat animals?
          </p>
          <img src={ArrowRight} />
          <p className="eachitem">
            What is AI treats humans the way we treat animals?
          </p>
          <img src={ArrowRight} />
          <p className="eachitem">
            What is AI treats humans the way we treat animals?
          </p>
        </div>
      </div>

      <div className="footer">
        <div className="higherFooter">
          <a href="./">
            <img className="logo1" src={Logo} alt="Logo" />
          </a>
          <div className="middle">
            <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
            <p>
              To stay up-to-date with What’s happening in the TECH word, Enter
              your email to stay up yo date.
            </p>
            <form>
              <input className="email" type="text" placeholder="Email" />
              <input className="submit" type="submit" placeholder="SUBSCRIBE" />
            </form>
          </div>
          <div className="right">
            <img src={RecieveEmail} />
          </div>
        </div>

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
            <b>
              <p>Follow Us!</p>
            </b>
            <div className="follow">
              <a href="https://facebook.com/">
                <img src={Facebook} />
              </a>
              <a href="https://instagram.com/">
                <img src={Instagram} />
              </a>
              <a href="https://linkedin.com/">
                <img src={LinkedIn} />
              </a>
            </div>
            <a className="arrowUp" href="#hero">
              <img src={ArrowUp} />
            </a>
          </div>
        </div>
        <p className="copy">&copy; 2023-SpaceTech. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default LandingPage;
