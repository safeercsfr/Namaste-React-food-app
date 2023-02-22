import { Outlet } from "react-router-dom";
import FunctionComponent from "./Profile";
import Profile from "./ClassProfile";

const About = () => {
  return (
    <>
      <h1>About</h1>
      <FunctionComponent name={"safeer"}/>
      <Profile name={"safeer"}/>
      {/* <Outlet name={"safeerClass"}/> */}
    </>
  );
};

export default About;
