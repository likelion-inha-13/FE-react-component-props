import React from "react";
import "./UserProfile.css";
import lionImage from "./lion.jpeg";

const UserProfile = ({name,age,major}) => {

return (
    <div className="profile-card">
        <div className="profile-top">
            <img src = {lionImage} alt="사자 사진"  className="profile-img"/>
        </div>
            <div className="profile-info">
                <h3>{name}</h3>
                <p>나이: {age}세</p>
                <p>전공: {major}</p>
            </div>
    </div>
);
};
export default UserProfile;
