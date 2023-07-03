import React from "react";
import { Box, Typography } from "@mui/material";
import LabelBottomNavigation from "../BottomNav";
import Project from "./components/Project";
import { useSelector } from "react-redux";
import EmptyPageBanner from "./components/EmptyPageBanner";
import Logo from "../Logo";

export default function Main() {
  const user = useSelector((store) => store.user);

  const styles = {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    },

    main: {
      width: "100%",
      background: "#D3D5F0",
      margin: 0,
      paddingBottom: "140px",
    },

    h1: {
      fontSize: "47px",
      fontWeight: 700,
      color: "#535bc8",
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
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

    },
  };

  return (
    <Box sx={styles.mainContainer}>
      <Logo/>
      <Typography variant="h1" sx={styles.h1}>
        My projects
      </Typography>
      {user.projects && user.projects.length < 1 ? 
        <Box sx={styles.noProjectsWrapper}>
          <EmptyPageBanner/>
        </Box>
       : (
        <Box sx={styles.main}>
          <Box sx={styles.projectsWrapper}>
            {user ? user.projects.map((el) => <Project el={el} />) : null}
          </Box>
        </Box>
      )}
      <LabelBottomNavigation color={"#a9acdf"} />
    </Box>
  );
}
