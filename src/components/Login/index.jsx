import React from "react";
import { Box } from "@mui/material";
import Landing from "../../common/components/Landing";
import "./index.css";
import FormBox from "./components/FormBox";
import { MAIN_BACKGROUND_COLOR } from "../../constants/styles";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  main: {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    background: MAIN_BACKGROUND_COLOR,
    margin: 0,
    padding: 0,
    justifyContent: "space-around",
    "@media (max-width: 850px)": {
      justifyContent: "center",
      flexDirection: "column",
    },
  },
});

export default function Login() {
  const classes = useStyles();

  return (
    <Box className={classes.main}>
      <Landing />
      <Box>
        <FormBox />
      </Box>
    </Box>
  );
}
