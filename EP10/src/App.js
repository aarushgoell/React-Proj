import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { Contact } from "./components/Contact";
import { ErrorComp } from "./components/ErrorComp";
import RestroMenu from "./components/RestroMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery"));

// https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7498676&lng=76.64110939999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

// PJXR+WCX, Guru Teg Bahadur Nagar, Kharar, Punjab 140301, India

const AppLayout = () => {
  const [userName, setUserName] = useState("DefaultUser");

  useEffect(() => {
    // made a fetch call and send the username and password

    const data = {
      name: "Aarush Goel",
    };

    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider
      value={{
        loggedInUser: userName,
        setUserName,
      }}
    >
      <div className="app">
        <Header></Header>
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Hello the page is loading</h1>}>
            <Grocery />,
          </Suspense>
        ),
      },
      {
        path: "/restro/:resId",
        element: <RestroMenu />,
      },
    ],
    errorElement: <ErrorComp />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
