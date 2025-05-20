import React from "react";
import "./StaffProfile.css";

const StaffProfile = ({Name, Part}) => {
  return (
  <div className = "staff-card" 
       >

    <p>이름:{Name}</p>
    <p>파트:{Part}</p>
  </div>
  );
};

export default StaffProfile;
