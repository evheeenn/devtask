import { Box, Typography } from "@mui/material";
import React from "react";
import FormikProjectCreator from "./components/FormikProjectCreator";
import LabelBottomNavigation from "../../../common/components/BottomNav";
import { DARK_MAIN, MAIN_BLUE } from "../../../constants/styles";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  main: {
    width: "53%",
    height: "83%",
    display: "flex",
    flexDirection: "column",
    margin: "73px auto 0 auto",
    "@media (min-width: 600px) and (max-width: 850px)": {
      marginTop: "173px",
      width: "70%",
    },
    "@media (max-width: 500px)": {
      width: "90%",
    },
  },

  h1: {
    fontSize: "37px",
    fontWeight: 700,
    color: MAIN_BLUE,
    "@media (max-width: 850px)": {
      fontSize: "37px",
    },
    "@media (max-width: 500px)": {
      fontSize: "27px",
      margin: "27px 0 0 0",
    },
  },

  hint: {
    color: DARK_MAIN,
    "@media (max-width: 500px)": {
      fontSize: "12px",
      margin: "7px 0 0 0px",
    },
    "@media (max-width: 380px)": {
      fontSize: "12px",
      margin: "3px 0 0 17px",
    },
  },
});

export default function ProjectCreatorForm() {
  const classes = useStyles();
  return (
    <Box className={classes.main}>
      <Typography variant="h1" className={classes.h1}>
        Create a new project
      </Typography>
      <Typography variant="body1" className={classes.hint}>
        Use this constructor to create and customize your project planner
      </Typography>
      <FormikProjectCreator />
      <LabelBottomNavigation />
    </Box>
  );
}
