import { useState } from "react";

const User = ({ name }) => {
  const [value, setvalue] = useState(0);

  return (
    <div className="user-card">
      <h1>count : {value}</h1>
      <h2>Name : {name}</h2>
      <h3>Location : Dehradun</h3>
      <h4>Contact :aarushgoell</h4>
    </div>
  );
};

export default User;
