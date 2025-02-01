import { useState } from "react";

export const Search_func = ({ lst, setlst }) => {
  const [searchdata, setsearchdata] = useState("");
  return (
    <div>
      <input
        type="text"
        className="ml-4 border-2 border-gray-700 focus:border-pink-600 ..."
        value={searchdata}
        onInput={(e) => {
          setsearchdata(e.target.value);
        }}
      ></input>
      <button
        className="px-4 bg-green-100 ml-3 py-0.5"
        onClick={() => {
          const newlis = lst.filter((res) => {
            return res?.info?.name
              ?.toLowerCase()
              .includes(searchdata.toLowerCase());
          });

          setlst(newlis);
        }}
      >
        Search
      </button>
    </div>
  );
};
