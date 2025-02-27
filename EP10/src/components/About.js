import UserClass from "./UserClass";

import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Web Series</h2>
        <div>
          LoggestInUser :
          <UserContext.Consumer>
            {(data) => {
              return (
                <h1 className="font-bold text-2xl">{data.loggedInUser}</h1>
              );
            }}
          </UserContext.Consumer>
        </div>
        <UserClass>
          name={"Aarush Goel by classed based"}
          location={"Himachal"}
        </UserClass>
      </div>
    );
  }
}

export default About;
