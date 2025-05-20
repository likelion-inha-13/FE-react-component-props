import React from "react";
// import UserProfile from "../components/UserProfile/UserProfile";
import StaffProfile from "../components/StaffProfile/StaffProfile";

const StaffPage = () => {
  const staffs = [
    { name: "JaeHyeok", part: "FE 파트장" },
    { name: "Hyori", part: "FE_부회장" },
    { name: "Subin", part: "FE_기획" },
    { name: "Yerin", part: "FE_홍보" },
  ];

  return ( 
  <div style = {{display : "flex" ,flexdirection : "row", gap: "10px"}}>
    {staffs.map(({name,part}) => (
      <StaffProfile
          Name= {name}
          Part = {part}
          />
    ))}
  </div>
  );
};

export default StaffPage;
