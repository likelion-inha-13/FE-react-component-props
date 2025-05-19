import React from "react";
import StaffProfile from "../components/StaffProfile/StaffProfile";

const StaffPage = () => {
  const staffs = [
    { name: "JaeHyeok", part: "FE 파트장" },
    { name: "Hyori", part: "FE_부회장" },
    { name: "Subin", part: "FE_기획" },
    { name: "Yerin", part: "FE_홍보" },
  ];

  return (
  <div className= "staff-card-list">
    {staffs.map((item,index)=> (
      <StaffProfile
        key={index}
        name={item.name}
        part={item.part}
      />
    ))}
  </div>
  );
} //약간 포문 돌리는 감성..? 

export default StaffPage;
