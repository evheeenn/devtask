import React from "react";
import { Box } from "@mui/material";
import logo from "../../img/logo.png";
import ProjectCreatorForm from "./Form";
import Logo from "../Logo";

export default function ProjectCreator() {
  const styles = {
    main: {
      width: "100%",
      height: "100vh",
      display: "flex",
      background: "#D3D5F0",
      margin: 0,
      padding: 0,
    },
  };
  return (
    <Box sx={styles.main}>
      <Logo/>
      <ProjectCreatorForm />
    </Box>
  );
}
