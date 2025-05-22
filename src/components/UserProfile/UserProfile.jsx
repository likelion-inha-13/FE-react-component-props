import React from "react";
import "./UserProfile.css";
import lionImage from "./lion.jpeg"; // 기본 이미지 (없으면 props로 받을 수도 있음)

const UserProfile = (props) => {
  return (
    <div className="profile-card">
      <img src={props.image || lionImage} alt="프로필 이미지" className="profile-img" />
      <h2>{props.name}</h2>
      <p>나이: {props.age}</p>
      <p>학과: {props.major}</p>
    </div>
  );
};

export default UserProfile;
