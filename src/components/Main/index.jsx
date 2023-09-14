import React from "react";
import { Box, Typography } from "@mui/material";
import LabelBottomNavigation from "../../common/components/BottomNav";
import Project from "./components/ProjectBlock";
import { useSelector } from "react-redux";
import EmptyPageBanner from "./components/EmptyPageBanner";
import Logo from "../../common/components/Logo";
import { MAIN_BACKGROUND_COLOR, MAIN_BLUE } from "../../constants/styles";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },

  main: {
    width: "100%",
    background: MAIN_BACKGROUND_COLOR,
    margin: 0,
    paddingBottom: "140px",
  },

  h1: {
    fontSize: "47px",
    fontWeight: 700,
    color: MAIN_BLUE,
    margin: "94px 0 0 83px",
    "@media (max-width: 850px)": {
      fontSize: "37px",
    },
    "@media (max-width: 500px)": {
      fontSize: "27px",
      margin: "83px 0 0 17px",
    },
  },

  projectsWrapper: {
    display: "flex",
    flexWrap: "wrap",
    width: "90%",
    marginTop: "42px",
    marginLeft: "73px",
    "@media (max-width: 870px)": {
      width: "100%",
      marginLeft: "0px",
      justifyContent: "center",
    },
  },

  noProjectsWrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Main() {
  const user = useSelector((store) => store.user);

  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      <Logo />
      <Typography variant="h1" className={classes.h1}>
        My projects
      </Typography>
      {user.projects && user.projects.length < 1 ? (
        <Box className={classes.noProjectsWrapper}>
          <EmptyPageBanner />
        </Box>
      ) : (
        <Box className={classes.main}>
          <Box className={classes.projectsWrapper}>
            {user
              ? user.projects.map((el) => <Project el={el} key={el.name} />)
              : null}
          </Box>
        </Box>
      )}
      <LabelBottomNavigation />
    </Box>
  );
}
