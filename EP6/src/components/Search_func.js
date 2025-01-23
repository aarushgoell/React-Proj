import { useState } from "react";

export const Search_func = ({ lst, setlst }) => {
  const [searchdata, setsearchdata] = useState();
  return (
    <>
      <input
        type="text"
        className="search-box"
        value={searchdata}
        onInput={(e) => {
          setsearchdata(e.target.value);
        }}
      ></input>
      <button
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
    </>
  );
};
