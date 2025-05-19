// src/components/UserProfile/UserProfile.jsx

const UserProfile = ({ name, age, major }) => {
  const cardStyle = {
    border: "2px solid #4CAF50",
    borderRadius: "10px",
    padding: "15px",
    margin: "10px",
    width: "200px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={cardStyle}>
      <h2>{name}</h2>
      <p>나이: {age}세</p>
      <p>전공: {major}</p>
    </div>
  );
};

export default UserProfile;
