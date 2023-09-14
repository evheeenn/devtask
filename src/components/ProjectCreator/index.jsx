import React from "react";
import { Box } from "@mui/material";
import ProjectCreatorForm from "./Form";
import Logo from "../../common/components/Logo";
import { MAIN_BACKGROUND_COLOR } from "../../constants/styles";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  main: {
    width: "100%",
    height: "100vh",
    display: "flex",
    background: MAIN_BACKGROUND_COLOR,
    margin: 0,
    padding: 0,
  },
});

export default function ProjectCreator() {
  const classes = useStyles();

  return (
    <Box className={classes.main}>
      <Logo />
      <ProjectCreatorForm />
    </Box>
  );
}
