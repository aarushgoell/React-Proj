// import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { Search_func } from "./Search_func";
import { Link } from "react-router-dom";

const Body = () => {
  const [newlist, setnewlist] = useState([]);

  const [finalst, setfinallst] = useState(newlist);

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

  return newlist.length == 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="body">
      {console.log("bodyrendered")}
      <div className="search-maindiv">
        <Search_func lst={newlist} setlst={setfinallst}></Search_func>
        <button
          className="top-rated-funct"
          onClick={function () {
            const finalist = newlist?.filter((res) => {
              return res.info.avgRating >= 4;
            });
            setfinallst(finalist);
          }}
        >
          Top rated restaurant
        </button>
      </div>

      <div className="res-container">
        {finalst?.map((res) => {
          return (
            <Link key={res.info.id} to={"/restro/" + res.info.id}>
              <RestaurantCard resdata={res}></RestaurantCard>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
