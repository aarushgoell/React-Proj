import { Shimmer } from "./Shimmer";

import { useParams } from "react-router";

import useRestroMenu from "../utils/useRestroMenu";

import { RestaurantCategory } from "./RestaurantCategory";
import { useState } from "react";

const RestroMenu = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(-1);

  const resInfo = useRestroMenu(resId);

  if (resInfo.length == 0) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards?.[2]?.card?.card?.info;

  const categories =
    resInfo?.data?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">Name : {name}</h1>
      <p className="font-bold text-xl">
        {cuisines.join(", ")} : {costForTwoMessage}
      </p>
      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            key={category.card.card.title}
            data={category.card.card}
            showItems={index == showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default RestroMenu;

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7498676&lng=76.64110939999999&restaurantId=124176&catalog_qa=undefined&submitAction=ENTER

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7498676&lng=76.64110939999999&restaurantId=718479&catalog_qa=undefined&submitAction=ENTER
