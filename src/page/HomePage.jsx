import UserProfile from "../components/UserProfile/UserProfile";

const HomePage = () => {
  return (
    <div>
      <UserProfile name="임병윤" age={23} major="정보통신공학과"/>
    </div>
  );
};

export default HomePage;
