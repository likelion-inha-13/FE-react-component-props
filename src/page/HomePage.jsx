
//HomePage.jsx
import React from "react";
import UserProfile from "../components/UserProfile/UserProfile";

const HomePage = () => {
  return (
    <div>
      <UserProfile name="전수빈" age={25} major="statics" />
    </div>
  );
};

export default HomePage;