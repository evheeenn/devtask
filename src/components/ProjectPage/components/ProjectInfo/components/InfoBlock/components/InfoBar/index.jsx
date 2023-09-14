import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { mainTheme } from "../../../../../../../../colorThemes/colorBase";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    width: "97%",
    height: "42px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "7px",
    margin: "7px auto 0 auto",
    background: mainTheme.barColor,
  },

  property: {
    color: mainTheme.backgroundColor,
    marginLeft: "17px",
  },

  value: {
    color: mainTheme.backgroundColor,
    marginRight: "17px",
  },
});

export default function InfoBar({ project, property, value }) {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Typography variant="body1" className={classes.property}>
        {property}
      </Typography>
      <Typography variant="body1" className={classes.value}>
        {value}
      </Typography>
    </Box>
  );
}
