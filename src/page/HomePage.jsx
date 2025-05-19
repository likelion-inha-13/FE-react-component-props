import UserProfile from "../components/UserProfile/UserProfile";
import React from "react"

const HomePage = () => {
  return (
    <div className="profile-card">
      <UserProfile name="YEWON" age={22} major="컴공"/>
    </div>
  );
};

export default HomePage;
