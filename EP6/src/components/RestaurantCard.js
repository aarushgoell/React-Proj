// import React from "react";

import { RES_IMG } from "../utils/constants";

// const RestaurantCard = ({resname,rating} ) =>{
const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla } =
    props?.resdata?.info;

  // We can also destructure it on the fly

  // console.log(props);// It is object which contains resname and rating
  return (
    <div className="res-card">
      <img src={RES_IMG + cloudinaryImageId} />
      {/* <h3>Meghana Foods</h3>
        <h4>Biryani,North Indian, Asian</h4>
        <h4>4.3</h4>
        <h5>38 mins</h5> */}
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h5>{sla.deliveryTime}</h5>
    </div>
  );
};

export default RestaurantCard;
