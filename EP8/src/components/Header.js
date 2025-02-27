// import React from "react";
import { LOGO_URL } from "../utils/constants";
import LoginLogout from "./LoginLogout";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About us</Link>
          </li>

          <li>
            <Link to="/Contact">Contact us</Link>
          </li>

          <LoginLogout></LoginLogout>
        </ul>
      </div>
    </div>
  );
};

export default Header;
