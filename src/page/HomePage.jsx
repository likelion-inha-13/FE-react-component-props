import React from "react";
import UserProfile from "../components/UserProfile/UserProfile";

const HomePage = () => {
  return (
    <div className="profiles">
      <UserProfile name="이보연" age="21" part="FE" major="전기전자공학부"/>
    </div>
  );
};

export default HomePage;
