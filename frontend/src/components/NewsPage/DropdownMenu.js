import React, { useState } from "react";
import "./DropdownMenu.css";

import AboutUs from "../Assets/Images/about-us-icon.svg";
import Help from "../Assets/Images/help-icon.svg";
import ProfileIcon from "../Assets/Images/profile-male.svg";
import Publish from "../Assets/Images/publish-icon.svg";
import Settings from "../Assets/Images/settings-icon.svg";
import Write from "../Assets/Images/write-icon.svg";

export default function DropdownMenu() {
  return (
    <div className="dropdown-menu">
      <div className="dropdown-box-1">
        <div className="item2">
          <img className="item-img" src={Write} alt="Write Icon" />
          <a href="#">Write</a>
        </div>
        <div className="item2">
          <img className="item-img" src={ProfileIcon} alt="Profile Icon" />
          <a href="#">Profile</a>
        </div>
        <div className="item2">
          <img className="item-img" src={Publish} alt="Published Icon" />
          <a href="#">Published</a>
        </div>
      </div>
      {/*  */}
      <div className="dropdown-box-2">
        <div className="item2">
          <img className="item-img" src={Settings} alt="Settings Icon" />
          <a href="#">Settings</a>
        </div>
        <div className="item2">
          <img className="item-img" src={Help} alt="Help Icon" />
          <a href="#">Help</a>
        </div>
        <div className="item2">
          <img className="item-img" src={AboutUs} alt="AboutUs Icon" />
          <a href="#">About Us</a>
        </div>
        <a className="sign-out" href="">
          Sign out
        </a>
      </div>
    </div>
  );
}
