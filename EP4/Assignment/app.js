import React from "react";
import ReactDOM from "react-dom/client";

// - Build a `Food Ordering App`
//   - Think of a `cool name` for your app
//   - Build an `AppLayout`
//   - Build a `Header Component` with `Logo` & `Nav Items` & `Cart`
//   - Build a `Body Component`
//     - Build `RestaurantList Component`
//     - Build `RestaurantCard Component`
//       - Use `static data initially`
//       - Make your `card dynamic`(pass in props)
//         - `Props` - passing arguments to a function - `Use Destructuring` & `Spread operator`
//       - `Render` your cards with `dynamic data of restaurants`
//       - Use `Array.map` to render all the restaurants in the body component

const Header = () => {
  return (
    <div className="header">
      <div className="head-logo">
        <img src="https://png.pngtree.com/png-clipart/20220903/ourmid/pngtree-chef-restaurant-logo-png-image_6136204.png" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="Card-style">
      <img></img>
      <h1>Name</h1>
      <h2>cuisines</h2>
      <h2>rating</h2>
      <h2>Deliverytime</h2>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="card-container">
        <Cards></Cards>
      </div>
    </div>
  );
};

const Applayout = () => {
  return <div></div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Applayout);
