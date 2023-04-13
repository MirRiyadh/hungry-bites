import React from "react";

import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdoutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";

const Navbar = () => (
  <div className="app_navbar">
    <div className="app_navbar-logo">
      <img src={images.gericht} alt="logo" />
    </div>

    <ul className="app_navbar-links">
      <li className="p__opensans">
        <a href="#home">Home</a>
      </li>
      <li className="p__opensans">
        <a href="#home">About</a>
      </li>
      <li className="p__opensans">
        <a href="#home">Menu</a>
      </li>
      <li className="p__opensans">
        <a href="#home">About us</a>
      </li>
      <li className="p__opensans">
        <a href="#home">Contact</a>
      </li>
    </ul>

    <div className="app_navbar-login">
      <a href="#login" className="p__opensans">
        Log In / Registration
      </a>
      <div />
      <a href="/" className="p__opensans">
        Book Table
      </a>
    </div>

    <div className="app__navbar-smallscreen"></div>
  </div>
);

export default Navbar;
