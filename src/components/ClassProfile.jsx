import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    // create state
    this.state = {
      userInfo: { name: "dummy name", location: "dummy location" },
    };
    console.log("render constructor");
  }

  async componentDidMount() {
    // api calls
    const data = await fetch("https://api.github.com/users/safeercsfr");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });

    console.log("component did mount");
  }

  render() {
    const { name, bio,avatar_url } = this.state.userInfo;
    console.log("render");
    return (
      <div>
        <h1>hello class base Component</h1>
        <img src={avatar_url} alt="logo" />
        <p>Name: {name}</p>
        <p>status: {bio}</p>
      </div>
    );
  }
}
export default Profile;
