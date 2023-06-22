import { Route, Routes } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Main from "./components/Main";
import ProjectCreator from "./components/ProjectCreator";
import LabelBottomNavigation from "./components/BottomNav";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/main" element={<Main />} />
        <Route path="/newProject" element={<ProjectCreator />} />
      </Routes>
      <LabelBottomNavigation color={"#a9acdf"} />
    </>
  );
}

export default App;
