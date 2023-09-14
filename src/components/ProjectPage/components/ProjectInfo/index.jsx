import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InfoBlock from "./components/InfoBlock";
import { createUseStyles } from "react-jss";
import SprintBlock from "./SprintBlock";
import { MAIN_BLUE, SEROBUROMALINOVII } from "../../../../constants/styles";

const useStyles = createUseStyles({
  main: {
    width: "100%",
    minHeight: "100vh",
    "@media (max-width: 850px)": {
      width: "100%",
    },

    sprintWrapper: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    },

    sprintsAreHere: {
      display: "flex",
      flexDirection: "column",
      paddingTop: "77px",
      paddingBottom: "73px",
    },
  },
});

export default function ProjectInfo({ project }) {
  const classes = useStyles();

  return (
    <Box className={classes.main}>
      <InfoBlock project={project} />
      <Box className={classes.sprintWrapper}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "73%",
            height: "50px",
            margin: "20px auto 0 auto",
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontSize: "27px", fontWeight: 700, color: "#5a5b66" }}
          >
            Project sprints
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingBottom: "100px",
          }}
        >
          {project && project.sprints
            ? project.sprints.map((el) => (
                <SprintBlock sprint={el} key={el.name} />
              ))
            : null}
        </Box>
      </Box>
    </Box>
  );
}
