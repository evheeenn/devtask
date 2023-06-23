import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function LabelBottomNavigation() {

  const navigate = useNavigate()

  const location = useLocation()

  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(`/${newValue}`)
  };

  const styles = {
    main: {
      position: "fixed",
      zIndex: 1,
      bottom: 0,
      right: 0,
      left: 0,
    },
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      sx={styles.main}
    >
      <BottomNavigationAction
        label="Home"
        value=""
        icon={<HomeIcon sx={{color: location.pathname == '/' ? '#535bc8' : 'inherit'}}/>}
      />
      <BottomNavigationAction
        label="New"
        value="newProject"
        icon={<AddCircleIcon sx={{color: location.pathname == '/newProject' ? '#535bc8' : 'inherit'}}/>}
      />
      <BottomNavigationAction
        label="Done"
        value="done"
        icon={<DoneAllIcon sx={{color: location.pathname == '/done' ? '#535bc8' : 'inherit'}}/>}
      />
      <BottomNavigationAction
        label="Account"
        value="account"
        icon={<PersonIcon sx={{color: location.pathname == '/account' ? '#535bc8' : 'inherit'}}/>}
      />
    </BottomNavigation>
  );
}
