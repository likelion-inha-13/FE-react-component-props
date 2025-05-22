import React from "react";

const staffList = [
  {
    name: "jaehyeck",
    part: "fe파트장",
   
  },
  {
    name: "효리",
    role: "부회장",
    image: img2
  },
  {
    name: "수빈",
    role: "기획",
    image: img3
  },
  {
    name: "예린",
    role: "홍보",
    image: img3
  }
];

const StaffPage = () => {
  return (
    <div className="staff-page">
      {staffList.map((staff, index) => (
        <StaffProfile
          key={index}
          name={staff.name}
          part={staff.part}
         
        />
      ))}
    </div>
  );
};

export default StaffPage;