import React from "react";
import "./UserProfile.css";
import lionImage from "./lion.jpeg";

const UserProfile = ({name,age,major}) => {
    return (
    <div className="profile-card">
      
      <div className="profile-top">
      <img src={lionImage} alt="profile" className="profile-img" />
      </div>
      

      <div className="profile-info">
      <h2>{name}</h2>
      <p>나이: {age}세</p>
      <p>학과: {major}</p>
      </div>
  </div>
  
  
  )
};

export default UserProfile;
