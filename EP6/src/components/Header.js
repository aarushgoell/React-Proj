// import React from "react";
import { LOGO_URL } from "../utils/constants";
import LoginLogout from "./LoginLogout";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Home</li>
          <LoginLogout></LoginLogout>
        </ul>
      </div>
    </div>
  );
};

export default Header;
