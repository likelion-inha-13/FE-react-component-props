import React from "react";
import "./StaffProfile.css";

function StaffProfile({ name, part}) {
  return (
    <div className="staff-card">
      
      <h3>{name}</h3>
      <p>{part}</p>
    </div>
  );
}

export default StaffProfile;