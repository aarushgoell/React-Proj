// import React from "react";
import { LOGO_URL } from "../utils/constants";
import LoginLogout from "./LoginLogout";
import useOnlineStatus from "../utils/useOnlineStatus";

import UserContext from "../utils/UserContext";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const OnlineStatus = useOnlineStatus();

  const data = useContext(UserContext);

  // selector

  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  return (
    <div className="flex justify-between shadow-lg pl-4 pr-4 bg-green-200">
      <div className="logo-container">
        <img className="w-26" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li>OnlineStatus: {OnlineStatus ? "✅" : "🔴"}</li>
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>

          <li className="px-3">
            <Link to="/about">About us</Link>
          </li>

          <li className="px-3">
            <Link to="/Contact">Contact us</Link>
          </li>
          <li className="px-3">
            <Link to="/grocery">Grocery </Link>
          </li>
          <li className="px-3 font-bold text-xl ">
            <Link to="/cart">Cart-({cartItems.length} items)</Link>
          </li>

          <LoginLogout className="px-3"></LoginLogout>

          <li className="px-3 font-bold">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
