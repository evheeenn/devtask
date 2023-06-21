import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DoneAllIcon from '@mui/icons-material/DoneAll';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
        value="home"
        icon={<HomeIcon color="primary" />}
      />
      <BottomNavigationAction
        label="New"
        value="new"
        icon={<AddCircleIcon />}
      />
      <BottomNavigationAction
        label="Done"
        value="done"
        icon={<DoneAllIcon />}
      />
      <BottomNavigationAction
        label="Account"
        value="account"
        icon={<PersonIcon />}
      />
    </BottomNavigation>
  );
}
