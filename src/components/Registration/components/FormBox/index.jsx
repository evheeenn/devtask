import React from "react";
import { Box } from "@mui/material";
import Form from "../Formik";
import { WHITEST } from "../../../../constants/styles";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  main: {
    width: "470px",
    height: "500px",
    borderRadius: "15px",
    background: WHITEST,
    boxShadow: "20px 20px 60px #b3b5cc, -20px -20px 60px #f3f5ff",
    "@media (max-width: 500px)": {
      width: "348px",
      height: "480px",
    },
    "@media (max-width: 382px)": {
      marginTop: "3px",
      width: "327px",
      height: "500px",
    },
  },
});

export default function FormBox() {
  const classes = useStyles();

  return (
    <Box className={classes.main}>
      <Form />
    </Box>
  );
}
