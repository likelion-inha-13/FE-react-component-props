import UserProfile from "../components/UserProfile/UserProfile";

const HomePage = () => {
  return (
    <div>
      <UserProfile name="채부경" age={23} major="전기전자공학부"/>
    </div>
  );
};

export default HomePage;
