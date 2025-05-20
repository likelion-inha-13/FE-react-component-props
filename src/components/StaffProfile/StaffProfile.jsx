import "./StaffProfile.css";

const StaffProfile = ({ name, part }) => {
  return (
    <div className="staff-card">
      <p> 이름: {name}</p>
      <p>파트: {part}</p>
    </div>
  );
};

export default StaffProfile;
