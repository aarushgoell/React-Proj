import { useState } from "react";
import ItemList from "./ItemList";

export const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const [slideupflag, setslideupflag] = useState(true);

  const handleClick = () => {
    if (showItems == true) {
      showItems = false;
      setslideupflag(false);
    } else {
      setShowIndex();
    }
  };

  return (
    <div>
      {/* {Header} */}
      <div className="my-3 p-2 shadow-lg m-auto  bg-gray-200 w-6/12 rounded-xl">
        <div
          className=" flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="font-bold">{showItems ? "↑" : "↓"}</span>
        </div>

        {showItems && <ItemList itemCards={data.itemCards} />}
      </div>
      {/* Accordian Body */}
    </div>
  );
};
