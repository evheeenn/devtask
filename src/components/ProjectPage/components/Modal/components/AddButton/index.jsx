import { Box, Typography } from "@mui/material";
import React from "react";
import { createUseStyles } from "react-jss";
import { mainTheme } from "../../../../../../colorThemes/colorBase";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

const useStyles = createUseStyles({
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "170px",
    height: "50px",
    borderRadius: "25px",
    background: mainTheme.projectBlockColor,
    position: "absolute",
    zIndex: 5,
    right: 23,
    bottom: 70,
    transition: "1s",
    cursor: "pointer",
    "&:hover": {
      background: mainTheme.backgroundColor,
    },
  },

  someText: {
    fontSize: "17px",
    color: "white",
    fontWeight: 500,
  },
});

export default function AddButton({ sometext }) {
  const classes = useStyles();

  return (
    <Button className={classes.main}>
      <Typography variant="body1" className={classes.someText}>
        {sometext}
      </Typography>
      <AddIcon sx={{ color: "white", marginLeft: "7px", fontSize: "38px" }} />
    </Button>
  );
}
