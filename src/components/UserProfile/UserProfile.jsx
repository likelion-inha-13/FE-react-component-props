import React from "react";
import "./UserProfile.css";
import lionImage from "./lion.jpeg";

const UserProfile = (props) => {
    const { name, age, major } = props;
    return (
        <div className="profile-card">
            <div className="profile-top">
                <img src={lionImage} alt="lion" className="profile-img"/>
            </div>
            <div className="profile-info">
                <h2>{name}</h2>
                <p>나이: {age}</p>
                <p>전공: {major}</p>
            </div>
        </div>
    )
};

export default UserProfile;
