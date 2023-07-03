import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InfoBlock from "./components/InfoBlock";

export default function ProjectInfo({ project }) {
  const styles = {
    main: {
      width: "50%",
      height: "100%",
      "@media (max-width: 850px)": {
        width: '100%'
      },
    },
  };

  return (
    <Box sx={styles.main}>
      <InfoBlock project={project}/>
    </Box>
  );
}
