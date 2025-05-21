import React from "react";
import "./StaffProfile.css";

const StaffProfile = (props) => {
  return (
  <div className="staff-card">
    <h3>이름 : {props.name}</h3>
    <p>파트 : {props.part}</p>
  </div>);
  
};

export default StaffProfile;
