import React from "react";
import StaffProfile from "../components/StaffProfile/StaffProfile";

const StaffPage = () => {
  const staffs = [
    { name: "JaeHyeok", part: "FE 파트장" },
    { name: "Hyori", part: "FE_부회장" },
    { name: "Subin", part: "FE_기획" },
    { name: "Yerin", part: "FE_홍보" },
  ];

  return <div className="staff-card-list">
    {staffs.map((staff,index) => (
      <StaffProfile
        key={index} name={staff.name} part={staff.part} />
    ))}

  </div>;
};

export default StaffPage;
