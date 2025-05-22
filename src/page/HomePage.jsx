import React from "react";
import UserProfile from "../components/UserProfile/UserProfile";
import myImage from "../assets/my-photo.jpg"; // 이미지 경로는 프로젝트 구조에 맞게 조정

const HomePage = () => {
  return (
    <div>
      <UserProfile
        name="이다솜"
        age="21"
        major="조선해양공학과과"
        image={myImage}
      />
    </div>
  );
};

export default HomePage;
