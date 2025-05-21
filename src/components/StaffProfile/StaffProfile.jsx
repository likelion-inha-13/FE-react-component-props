import React from "react";
import "./StaffProfile.css";

const StaffProfile = (props) => {
  return (
    <div class="staff-card">
      <p>이름:{props.name}</p>
      <p>파트:{props.part}</p>
    </div>
  );
};

export default StaffProfile;
