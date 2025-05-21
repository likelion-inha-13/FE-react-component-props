import React from "react";
import "./UserProfile.css";
import lionImage from "./lion.jpeg";

const UserProfile = (props) => {
    return (
      <div className="profile-card">
        <div className="profile-top">
          <img src={lionImage} alt="lion" className="profile-img" />
        </div>
        <div className="profile-info"> 
          <h2>이름: {props.name}</h2>
          <p>나이: {props.age}</p>
          <p>파트: {props.part}</p>
          <p>전공: {props.major}</p>
          </div>
    </div>
  );};

export default UserProfile;
