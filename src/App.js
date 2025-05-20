import "./App.css";
// import UserProfile from "./components/UserProfile/UserProfile";
import StaffProfile from "./components/StaffProfile/StaffProfile";
import HomePage from "./page/HomePage";
import StaffPage from "./page/StaffPage";
/* 여기에 Page들을 import 한 후 하나 씩 확인!! */

const App = () => {
  return (
    // <div> <HomePage></HomePage></div>
    <div><StaffPage></StaffPage></div>
  )
};

export default App;
