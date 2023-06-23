import { Route, Routes } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Main from "./components/Main";
import ProjectCreator from "./components/ProjectCreator";
import LabelBottomNavigation from "./components/BottomNav";
import PrivateRoute from "./components/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserThunk } from "./store/actions";
import { useLocation } from "react-router-dom";

function App() {

  const dispatch = useDispatch()
  const localUserID = JSON.parse(localStorage.getItem("user"))

  useEffect(() => {
    if(localUserID){
      dispatch(getUserThunk(localUserID))
    }
  }, [])
  
  const user = useSelector((store) => store.user)

  const userBullean = localUserID ? true : false;

  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={
          <PrivateRoute isAuth={userBullean}>
            <Main />
          </PrivateRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/newProject" element={<ProjectCreator />} />
      </Routes>
    </>
  );
  
}

export default App;
