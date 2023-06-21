import { Route, Routes } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Main from "./components/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/registration" element={<Registration/>}/>
    </Routes>
  );
}

export default App;
