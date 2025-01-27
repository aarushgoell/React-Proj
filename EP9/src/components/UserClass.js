import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userinfo: {
        login: "dummy",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/aarushgoell");

    const dataj = await data.json();

    console.log(dataj);

    this.setState({
      userinfo: dataj,
    });
  }

  render() {
    const { login, avatar_url } = this.state.userinfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h3>name: {login}</h3>
      </div>
    );
  }
}

export default UserClass;
