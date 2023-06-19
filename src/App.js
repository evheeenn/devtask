import { Route, Routes } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/registration" element={<Registration/>}/>
    </Routes>
  );
}

export default App;
