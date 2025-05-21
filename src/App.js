import "./App.css";
import HomePage from "./page/HomePage";
import StaffPage from "./page/StaffPage";
/* 여기에 Page들을 import 한 후 하나 씩 확인!! */
import UserProfile from "./components/UserProfile/UserProfile"
import StaffProfile from "./components/StaffProfile/StaffProfile";

const App = () => {
  const staffs = [
    {name: "jaehyeck", part: "FE 파트장"},
    {name: "Hyori", part: "FE_부회장"},
    {name: "Subin", part: "FE_기획"},
    {name: "Yerin", part: "FE_홍보"},
]

  return( 
  <div>
  <UserProfile name="홍수진" age={22} major="컴퓨터공학과" />

  <div className="staff-card-list">
  {staffs.map((item,index)=>(
    <StaffProfile key={index} name={item.name} part={item.part}/>
    ))}
  </div>
  </div>
  )
};


export default App;
