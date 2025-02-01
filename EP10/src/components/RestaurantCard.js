// import React from "react";

import { RES_IMG } from "../utils/constants";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla } =
    props?.resdata?.info;

  return (
    <div className="res-card p-4 w-[250px] bg-gray-200  m-4 rounded-xl hover:bg-gray-300">
      <img
        className="h-[200px] w-[100%] rounded-lg"
        src={RES_IMG + cloudinaryImageId}
      />
      <h3 className="font-bold py-3">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h5>{sla.deliveryTime}</h5>
    </div>
  );
};

export const CardwithLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white px-2 rounded -lg m-2">
          Promoted
        </label>
        <RestaurantCard {...props}></RestaurantCard>
      </div>
    );
  };
};

export default RestaurantCard;
