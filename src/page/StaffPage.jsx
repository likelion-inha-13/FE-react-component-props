import StaffProfile from "../components/StaffProfile/StaffProfile";

const StaffPage = () => {
  const staffs = [
    { name: "JaeHyeok", part: "FE_파트장" },
    { name: "Hyori", part: "FE_부파트장" },
    { name: "Subin", part: "FE_기획" },
    { name: "Yerin", part: "FE_홍보" },
  ];

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "40px",
  };

  return (
    <div style={containerStyle}>
      {staffs.map((staff, index) => (
        <StaffProfile key={index} name={staff.name} part={staff.part} />
      ))}
    </div>
  );
};

export default StaffPage;
