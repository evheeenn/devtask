import React from "react";
import Box from "@mui/material/Box";
import mainImage from "../../../../img/empty-page-banner.png";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  main: {
    width: "500px",
    height: "500px",
    background: `url('${mainImage}')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    "@media (max-width: 870px)": {
      marginTop: "12%",
    },
  },
});

export default function EmptyPageBanner() {
  const classes = useStyles();

  return <Box className={classes.main}></Box>;
}
