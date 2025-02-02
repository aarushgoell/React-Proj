import { useEffect, useState } from "react";

const LoginLogout = () => {
  const [change, unchange] = useState("login");
  useEffect(() => {}, [change]);
  return (
    <button
      onClick={() => {
        change == "login" ? unchange("logout") : unchange("login");
      }}
    >
      {change}
    </button>
  );
};

export default LoginLogout;
