// import React from "react";
import RestaurantCard from "./RestaurantCard";

import { allres } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [newlist, setnewlist] = useState(allres);
  return (
    <div className="body">
      <button
        onClick={function () {
          const finalist = newlist?.filter((res) => {
            return res.info.avgRating >= 4;
          });
          setnewlist(finalist);
        }}
      >
        Top rated restaurant
      </button>

      <div className="res-container">
        {newlist?.map((res) => {
          return (
            <RestaurantCard key={res.info.id} resdata={res}></RestaurantCard>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
