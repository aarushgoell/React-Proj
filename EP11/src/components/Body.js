// import React from "react";
import RestaurantCard, { CardwithLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import { Shimmer } from "./Shimmer";
import { Search_func } from "./Search_func";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";

import UserContext from "../utils/UserContext";

const Body = () => {
  const [newlist, setnewlist] = useState([]);

  const [finalst, setfinallst] = useState(newlist);

  const LabeledCard = CardwithLabel(RestaurantCard);

  console.log("reslist: ", newlist);

  useEffect(() => {
    const data = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7498676&lng=76.64110939999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const res = await data.json();

      const newdata =
        res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setnewlist(newdata);
      setfinallst(newdata);
    };
    data();
  }, []);

  if (useOnlineStatus() == false) {
    return <h1>You are curently offline </h1>;
  }

  const { setUserName, loggedInUser } = useContext(UserContext);

  return newlist.length == 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="body">
      <div className="flex mt-5">
        <Search_func lst={newlist} setlst={setfinallst}></Search_func>
        <button
          className="ml-5 bg-gray-200 hover:bg-gray-400 text-gray-800 py-1 px-3 rounded-s"
          onClick={function () {
            const finalist = newlist?.filter((res) => {
              return res.info.avgRating >= 4;
            });
            setfinallst(finalist);
          }}
        >
          Top rated restaurant
        </button>
        <div className="ml-5 search py-1 px-3">
          <label className=" bg-gray-200 hover:bg-gray-400 text-gray-800 py-1 px-2 rounded-s">
            ModifyContext:
          </label>
          <input
            className="border-2 border-black ml-3"
            value={loggedInUser}
            onChange={(e) => {
              return setUserName(e.target.value);
            }}
          ></input>
        </div>
      </div>

      <div className="res-container flex flex-wrap mt-5">
        {finalst?.map((res) => {
          return (
            <Link key={res.info.id} to={"/restro/" + res.info.id}>
              {res.info.avgRating > 4.3 ? (
                <LabeledCard resdata={res} />
              ) : (
                <RestaurantCard resdata={res}></RestaurantCard>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
