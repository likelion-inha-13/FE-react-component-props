import React from "react";
import "./UserProfile.css";
import lionImage from "./lion.jpeg";

const UserProfile = ({Name,Age,Depart}) => {
    


    return (
        <div className="profile-card">
            <div className = "profile-top">
                <img src={lionImage} className = "profile-img"></img>
            </div>
            <div className = "profile-info">
            <p>{Name}</p>
            <p>나이:{Age}세</p>
            <p>학과:{Depart}과</p>
            </div>
        </div>
    );

}


export default UserProfile;
