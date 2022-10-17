import React, { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";

const About = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>About</h1>
      <h1>{user?.email}</h1>
    </div>
  );
};

export default About;
