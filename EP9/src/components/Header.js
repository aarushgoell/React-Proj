// import React from "react";
import { LOGO_URL } from "../utils/constants";
import LoginLogout from "./LoginLogout";
import useOnlineStatus from "../utils/useOnlineStatus";

import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const OnlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>OnlineStatus: {OnlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About us</Link>
          </li>

          <li>
            <Link to="/Contact">Contact us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery </Link>
          </li>

          <LoginLogout></LoginLogout>
        </ul>
      </div>
    </div>
  );
};

export default Header;
