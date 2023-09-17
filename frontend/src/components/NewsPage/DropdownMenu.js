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
          <img className="item-img" src={Write} alt="" />
          <a href="#">Menu</a>
        </div>
        <div className="item2">
          <img className="item-img" src={ProfileIcon} alt="" />
          <a href="#">Menu</a>
        </div>
        <div className="item2">
          <img className="item-img" src={Publish} alt="" />
          <a href="#">Menu</a>
        </div>
        <div className="item2">
          <img className="item-img" src="" alt="" />
          <a href="#">Menu</a>
        </div>
      </div>
      {/*  */}
      <div className="dropdown-box-2">
        <div className="item2">
          <img className="item-img" src="" alt="" />
          <a href="#">Menu</a>
        </div>
        <div className="item2">
          <img className="item-img" src="" alt="" />
          <a href="#">Menu</a>
        </div>
        <div className="item2">
          <img className="item-img" src="" alt="" />
          <a href="#">Menu</a>
        </div>
        <div className="item2">
          <img className="item-img" src="" alt="" />
          <a href="#">Menu</a>
        </div>
      </div>
    </div>
  );
}
