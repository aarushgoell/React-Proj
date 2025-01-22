import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";

// https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7498676&lng=76.64110939999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

// PJXR+WCX, Guru Teg Bahadur Nagar, Kharar, Punjab 140301, India

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
