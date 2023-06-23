import React from "react";
import { Box, Typography } from "@mui/material";
import LabelBottomNavigation from "../BottomNav";
import logo from "../../img/logo.png";
import Project from "./components/Project";
import { useSelector } from "react-redux";

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

    logo: {
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
      justifyContent: "center",
      flexWrap: "wrap",
      width: "100%",
      marginTop: "42px",
    },
  };

  return (
    <Box sx={styles.mainContainer}>
      <Typography variant="h1" sx={styles.h1}>
        My projects
      </Typography>
      <Box sx={styles.main}>
        <Box sx={styles.logo}></Box>
        <Box sx={styles.projectsWrapper}>
          {user ? user.projects.map((el) => <Project el={el} />) : null}
        </Box>
      </Box>
      <LabelBottomNavigation color={"#a9acdf"} />
    </Box>
  );
}
