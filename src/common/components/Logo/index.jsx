import React from "react";
import Box from "@mui/material/Box";
import logo from "../../../img/logo.png";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  main: {
    width: "70px",
    height: "70px",
    position: "fixed",
    zIndex: 1,
    top: 7,
    left: 17,
    background: `url('${logo}')`,
    backgroundSize: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
});

export default function Logo() {
  const classes = useStyles();

  return <Box className={classes.main}></Box>;
}
