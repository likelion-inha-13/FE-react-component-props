import React from "react";
import "./UserProfile.css";
import lionImage from "./lion.jpeg";

const UserProfile = (props) => {
    return (
        <div class="profile-card">
            <div class="profile-top">
                <img src={lionImage} alt="아기사자" class="profile-img" />
            </div>
            <div class="profile-info">
                <p>{props.name}</p>
                <p>나이:{props.age}</p>
                <p>전공:{props.major}</p>
            </div>
        </div>
    );
};

export default UserProfile;
