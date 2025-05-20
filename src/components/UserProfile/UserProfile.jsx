import "./UserProfile.css";
import lionImage from "./lion.jpeg";


const UserProfile = ({ name, age, major }) => {
  return (
    <div className="profile-card">
      <img src={lionImage} className="profile-img"/>
      <div className="profile-top">
      <div className="profile-info">
        
        <p>이름: {name}</p>
        <p>나이: {age}</p>
        <p>학과: {major}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
