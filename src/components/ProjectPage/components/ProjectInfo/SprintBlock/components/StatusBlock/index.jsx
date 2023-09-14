import { Box, Typography } from "@mui/material";
import React from "react";
import { createUseStyles } from "react-jss";
import {
  DEADLINE_DANGER,
  DEADLINE_WELL,
} from "../../../../../../../constants/styles";

const useStyles = createUseStyles({
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100px",
    height: "40px",
    position: "absolute",
    right: "20%",
    zIndex: 0,
    borderRadius: "5px",
    "@media (max-width: 940px)": {
      right: "20%",
    },
    "@media (max-width: 840px)": {
      right: "20%",
    },
    "@media (max-width: 769px)": {
      right: "8%",
    },
    "@media (max-width: 570px)": {
      right: "12%",
    },
    "@media (max-width: 415px)": {
      right: "12%",
    },
    "@media (max-width: 398px)": {
      right: "12%",
      width: "75px",
      height: "35px",
      zIndex: 0,
      marginLeft: "20px",
    },
    "@media (max-width: 378px)": {
      marginLeft: "20px",
    },
    "@media (max-width: 364px)": {
      marginLeft: "10px",
    },
  },

  text: {
    color: "#dedede",
    fontWeight: 700,
    "@media (max-width: 450px)": {
      fontSize: 12,
    },
  },
});

export default function StatusBlock({ value }) {
  const classes = useStyles();

  const color = value == 100 ? DEADLINE_WELL : DEADLINE_DANGER;

  return (
    <Box className={classes.main} sx={{ background: color }}>
      <Typography variant="body1" className={classes.text}>
        {value == 100 ? "Finished" : "Pending"}
      </Typography>
    </Box>
  );
}
