import "./App.css";
import HomePage from "./page/HomePage";
import StaffPage from "./page/StaffPage";
import UserProfile from "./components/UserProfile/UserProfile";
/* 여기에 Page들을 import 한 후 하나 씩 확인!! */

const App = () => {
  return <div>
    {/*<HomePage/>*/}
    <StaffPage/>
  </div>;
};

export default App;
