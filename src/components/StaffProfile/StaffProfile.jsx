// src/components/StaffProfile/StaffProfile.jsx
const StaffProfile = ({ name, part }) => {
  const cardStyle = {
    border: "1px solid #f5e6dc",
    borderRadius: "10px",
    padding: "20px",
    margin: "10px",
    width: "180px",
    textAlign: "center",
    backgroundColor: "#fdf7f1",
    boxShadow: "2px 2px 8px rgba(0,0,0,0.05)",
  };

  return (
    <div style={cardStyle}>
      <h3>이름: {name}</h3>
      <p>파트: {part}</p>
    </div>
  );
};

export default StaffProfile;
