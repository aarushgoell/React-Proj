import { useState } from "react";

const LoginLogout = () => {
  const [change, unchange] = useState("login");
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
