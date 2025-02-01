import { useEffect, useState } from "react";
import { leftHalfMenu } from "./constants";

const useRestroMenu = (resId) => {
  const [resInfo, setResInfo] = useState([]);

  useEffect(() => {
    menuData();
  }, []);

  const menuData = async () => {
    const jdata = await fetch(leftHalfMenu + resId);
    const realdata = await jdata.json();

    setResInfo(realdata);
  };

  return resInfo;
};

export default useRestroMenu;
