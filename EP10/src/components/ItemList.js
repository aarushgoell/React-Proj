import { RES_IMG } from "../utils/constants";

const ItemList = ({ itemCards }) => {
  return (
    <div>
      {itemCards.map((itm) => {
        const { id, name, defaultPrice, price, description, imageId } =
          itm.card.info;
        return (
          <div
            key={id}
            className="text-left border-b-1 border-gray-400  flex justify-between p-2 m-2 "
          >
            <div className="w-9/12">
              <div className="py-2">
                <span className="text-gray-800 font-bold text-l">{name}</span>
                <span className="font-semibold">
                  - ₹ {price ? price / 100 : defaultPrice / 100}
                </span>
                <p className=" text-gray-700 text-sm ">{description}</p>
              </div>
            </div>
            <div className="content-center w-3/12 p-3">
              <div className="absolute">
                <button className="p-2 rounded-lg mx-6 text-white bg-black shadow-lg">
                  Add +
                </button>
              </div>
              <img src={RES_IMG + imageId} className="w-full" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
