import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MAIN_BLUE } from "../../../constants/styles";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  main: {
    position: "fixed",
    zIndex: 1,
    bottom: 0,
    right: 0,
    left: 0,
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();

  const navigate = useNavigate();

  const location = useLocation();

  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(`/${newValue}`);
  };

  let display =
    location.pathname === "/login"
      ? "none"
      : location.pathname === "/registration"
      ? "none"
      : "flex";

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.main}
      sx={{ display: display }}
    >
      <BottomNavigationAction
        label="Home"
        value=""
        icon={
          <HomeIcon
            sx={{ color: location.pathname == "/" ? MAIN_BLUE : "inherit" }}
          />
        }
      />
      <BottomNavigationAction
        label="New"
        value="newProject"
        icon={
          <AddCircleIcon
            sx={{
              color: location.pathname == "/newProject" ? MAIN_BLUE : "inherit",
            }}
          />
        }
      />
      <BottomNavigationAction
        label="Done"
        value="done"
        icon={
          <DoneAllIcon
            sx={{ color: location.pathname == "/done" ? MAIN_BLUE : "inherit" }}
          />
        }
      />
      <BottomNavigationAction
        label="Account"
        value="account"
        icon={
          <PersonIcon
            sx={{
              color: location.pathname == "/account" ? MAIN_BLUE : "inherit",
            }}
          />
        }
      />
    </BottomNavigation>
  );
}
