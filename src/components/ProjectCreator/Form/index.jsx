import { Box, Typography } from "@mui/material";
import React from "react";
import FormikProjectCreator from "./components/FormikProjectCreator";
import LabelBottomNavigation from "../../BottomNav";

export default function ProjectCreatorForm() {
  const styles = {
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
      color: "#535bc8",
      "@media (max-width: 850px)": {
        fontSize: "37px",
      },
      "@media (max-width: 500px)": {
        fontSize: "27px",
        margin: "27px 0 0 0",
      },
    },

    hint: {
      color: "#4a4c6f",
      "@media (max-width: 500px)": {
        fontSize: "12px",
        margin: "7px 0 0 0px",
      },
      "@media (max-width: 380px)": {
        fontSize: "12px",
        margin: "3px 0 0 17px",
      },
    },
  };

  return (
    <Box sx={styles.main}>
      <Typography variant="h1" sx={styles.h1}>
        Create a new project
      </Typography>
      <Typography variant="body1" sx={styles.hint}>
        Use this constructor to create and customize your project planner
      </Typography>
      <FormikProjectCreator />
      <LabelBottomNavigation color={"#a9acdf"} />
    </Box>
  );
}
