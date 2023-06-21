import React from "react";
import { Box } from "@mui/material";
import LabelBottomNavigation from "./components/BottomNav";
import logo from "../../img/logo.png"

export default function Main() {
  const styles = {
    main: {
      width: "100%",
      height: "100vh",
      display: "flex",
      background: "#D3D5F0",
      margin: 0,
      padding: 0,
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
  };
  return (
    <Box sx={styles.main}>
      <Box sx={styles.logo}></Box>
      <LabelBottomNavigation color={'#a9acdf'}/>
    </Box>
  );
}
