import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";

import { useParams } from "react-router";
import { leftHalfMenu } from "../utils/constants";

const RestroMenu = () => {
  const [resInfo, setResinfo] = useState([]);

  const { resId } = useParams();

  console.log(resId);

  useEffect(() => {
    menuData();
  }, []);

  const menuData = async () => {
    const jdata = await fetch(leftHalfMenu + resId);
    const realdata = await jdata.json();
    console.log(realdata);
    setResinfo(realdata);
  };

  if (resInfo.length == 0) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards?.[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  console.log(itemCards);
  return (
    <div className="menu">
      <h1>Name : {name}</h1>
      <h2>
        cuisines : {cuisines.join(", ")} : {costForTwoMessage}
      </h2>
      <h1>Menu : </h1>
      <ul>
        {itemCards?.map((e) => {
          const { name, defaultPrice, price, id } = e?.card?.info;
          return (
            <li key={id}>
              {name} : Rs {defaultPrice / 100 || price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestroMenu;

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7498676&lng=76.64110939999999&restaurantId=124176&catalog_qa=undefined&submitAction=ENTER

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7498676&lng=76.64110939999999&restaurantId=718479&catalog_qa=undefined&submitAction=ENTER
