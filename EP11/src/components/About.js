import UserClass from "./UserClass";

import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Web Series</h2>
        <UserClass
          name={"Aarush Goel by classed based"}
          location={"Himachal"}
        ></UserClass>
      </div>
    );
  }
}

export default About;
