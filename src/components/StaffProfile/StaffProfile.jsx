import React from "react";
import "./StaffProfile.css";

const StaffProfile = ({ name, part }) => {
  return (
    <div className="staff-card">
      <h3>이름: {name}</h3>
      <p>파트: {part}</p>
    </div>
  );
};

export default StaffProfile;