import React, { useState } from "react";

// Components import start
import DropdownMenu from "../NewsPage/DropdownMenu";
import SearchdropDown from "../NewsPage/SearchdropDown";
// Components import end

import "./NewsViewPage.css"; // Import your CSS file

import Logo from "../Assets/Images/Logo.svg";
import Notification from "../Assets/Images/notification-line.svg";
import Profile from "../Assets/Images/Sarah-profile.svg";
import SearchIcon from "../Assets/Images/search.svg";
import DropDown from "../Assets/Images/drop-down-line.svg";
import Facebook from "../Assets/Facebook.png";
import LinkedIn from "../Assets/LinkedIn.png";
import Instagram from "../Assets/Instagram.png";
import ArrowUp from "../Assets/arrowup.png";
import ArrowRight from "../Assets/arrowRight.png";
import Laptop from "../Assets/Laptop.png";

export default function NewsViewPage() {
  // Search drop down for mobile start
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const toggleSearch = () => setSearchIsOpen(!searchIsOpen);
  // Search drop down for mobile end

  // Menu drop down for mobile start
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  // Menu drop down for mobile end

  return (
    <div>
      <header className="header">
        <img className="logo" src={Logo} alt="Logo" />

        <div className="header-search">
          <img className="search-icon-desktop" src={SearchIcon} alt="search" />
          <input className="search" type="search" placeholder="Search" />
        </div>
        <div className="header-right">
          <div className="not-div-1">
            <img
              onClick={toggleSearch}
              className="search-icon-mobile"
              src={SearchIcon}
              alt="search"
            />
            {searchIsOpen && <SearchdropDown />}
            <div className="not-div">
              <p className="not">0</p>
            </div>
            <img
              className="notification"
              src={Notification}
              alt="notification"
            />
          </div>

          <img
            onClick={toggleMenu}
            className="profile"
            src={Profile}
            alt="Profile"
          />
          <img
            onClick={toggleMenu}
            className="drop-down"
            src={DropDown}
            alt="drop down"
          />
          {showMenu && <DropdownMenu />}
        </div>
      </header>
      <div className="container">
        <div className="market">
          <h1 className="header-text">
            Market intelligence firm Sensor Tower <br />
            conducts layoffs, several execs out
          </h1>
        </div>

        <div className="profile-picture">
          <img className="profile-1" src={Profile} alt="Profile" />
          <div>
            <div className="author-div">
              <p className="author">Sarah</p>
              <span className="follow-author">Follow</span>
            </div>
            <p className="date">9:01 PM WAT-September 11, 2023</p>
          </div>
        </div>

        <div className="laptop">
          <img className="laptop-pic" src={Laptop} alt="Laptop" />
        </div>

        <div className="article-content">
          <p>
            Sensor Tower, a prominent market intelligence firm for the app
            economy, this week laid off a notable portion of its workforce,
            estimated at around 40 people out of the 270+ at the company,
            according to LinkedIn’s headcount. The layoffs included C-suite
            executives, TechCrunch has learned from multiple sources, including
            the CMO, CFO and chief product officer. Other teams impacted include
            finance and nearly all of marketing, we’re hearing. The company held
            an all-hands meeting to address the changes, which may still be
            underway as part of a larger reorg of Sensor Tower’s corporate
            structure. Sensor Tower confirmed the layoffs, but not the
            particulars, noting it would issue a fuller release next week.
            “Earlier this week, Sensor Tower’s management team took necessary
            steps to reorganize and right-size our business under a talented and
            experienced senior leadership team,” said Melissa Sheer, a publicist
            for Sensor Tower, in an emailed statement provided to TechCrunch.
            “We are excited about these changes as we position the company for a
            balance of continued growth and best-in-class profitability. We will
            provide more details in the coming days,” she said. A popular
            provider of third-party data and insights for app developers,
            brands, marketers and publishers, Sensor Tower has grown its
            headcount over the years following its $45 million investment in
            2020 from Riverwood Capital. The firm at the time cited 350
            enterprise-level customers, such as Morgan Stanley, Zynga and
            Tencent. But Sensor Tower was still a small team then — just 75
            employees — only a bit larger than the number of employees laid off
            this week. Sensor Tower grew again in 2021 with its acquisition of
            market intelligence company Pathmatics, which allowed it to offer an
            expanded set of digital and mobile advertising insights. The deal
            included an undisclosed growth investment from Riverwood Capital
            into Pathmatics. The company had then claimed it chose to raise more
            funds to further grow its business with investments in hiring,
            marketing and infrastructure, but noted it had been profitable since
            its launch. Today, Sensor Tower’s website touts its use by top
            brands, firms and marketers, like Dyson, L’Oréal, Target, Johnson &
            Johnson, Welch’s, Petco, Chanel, Revolut, Getir, Warner Bros.,
            Hershey, Wieden + Kennedy, ByteDance, Activision Blizzard, Allstate,
            Apple, Purina, Pepsico, Nike and more. Its data is regularly cited
            by top publications, including The Wall Street Journal, Fortune,
            CNBC, The New York Times, Bloomberg and others, including
            TechCrunch. Unfortunately, 2023 has been a tough year for layoffs,
            which have ranged from big names in tech like Google, Amazon,
            Microsoft, Yahoo, Meta, Zoom, Roku, Spotify and Shopify, to smaller
            startups across all sectors, including crypto, SaaS, enterprise,
            consumer and more.
          </p>

          {/* ... (rest of the article content) */}
        </div>

        <div className="comment-con">
          <h2 className="comment">COMMENTS</h2>

          <div className="sarah-comment-div">
            <div className="profile-sarah">
              <img className="profile-img" src={Profile} alt="Profile" />
              <p className="author-comment">Sarah | September 11, 2023</p>
            </div>
            <p className="sarah-comment">
              This is a nice article, I have been looking for this link for a
              while now, I will be waiting for your next article and I will also
              give you a follow right now
            </p>
          </div>
        </div>

        {/* Repeat the comment section as needed... */}

        <div className="comment-form">
          <h2 className="comment">Leave a comment</h2>
          <div className="comment-form"></div>
          <form>
            <div className="form-control"></div>
            <textarea
              className="comment-input"
              type="text"
              placeholder="Comment"
              cols={50}
              rows={10}
            />
          </form>
          <input className="submit-post" type="submit" value="Post comment" />
        </div>
      </div>
    </div>
  );
}
