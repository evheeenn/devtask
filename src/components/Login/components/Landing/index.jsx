import React from "react";
import landingImage from "../../../../img/landing.png";
import logo from "../../../../img/DevTask.png";
import { Box } from "@mui/material";

export default function Landing() {
  const styles = {
    main: {
      width: "700px",
      height: "700px",
      backgroundImage: `url(${landingImage})`,
      backgroundSize: "100%",
      "@media (max-width: 850px)": {
        width: "500px",
        height: "500px",
      },

      "@media (max-width: 500px)": {
        marginTop: "-73px",
        backgroundImage: `url(${logo})`,
        backgroundSize: "100%",
        backgroundPosition: "center",
        width: "348px",
        height: "172px",
        marginLeft: "9px",
      },

      "@media (max-width: 360px)": {
        width: "327px",
      },
    },
  };

  return <Box sx={styles.main}></Box>;
}
