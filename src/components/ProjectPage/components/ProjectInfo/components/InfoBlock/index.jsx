import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InfoBar from "./components/InfoBar";
import { mainTheme } from "../../../../../../colorThemes/colorBase";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import ProgressBar from "../../../../../Main/components/Project/components/ProgressBar";
import DeadlineBar from "../../../../../Main/components/Project/components/DeadlineProgressBar";

export default function InfoBlock({ project }) {
  const styles = {
    main: {
      display: "flex",
      flexDirection: "column",
    },

    bannerWrapper: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },

    banner: {
      display: "flex",
      flexDirection: "column",
      width: "97%",
      height: "170px",
      background: mainTheme.projectBlockColor,
      margin: "12px auto 0 auto",
      borderRadius: "12px",
    },

    progressWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      width: "170px",
      height: "170px",
      background: mainTheme.textColor,
      margin: "17px auto 0 auto",
      borderRadius: "12px",
    },

    h1: {
      margin: "17px 0 0 27px",
      color: mainTheme.headlineColor,
      fontSize: "37px",
      fontWeight: 600,
    },

    description: {
      display: "flex",
      width: "87%",
      margin: "17px 0 0 27px",
    },

    deadlineBar: {
      width: "90%",
      margin: "37px auto 0 auto",
    },

    statWrapper: {
      width: "100%",
      height: "200px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },

    circularProgressWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: '50%',
      width: '124px',
      height: '124px',
      zIndex: 3,
      marginTop: '-47px ',
      position: 'absolute',
      background: mainTheme.textColor,
    },

    statDetailsWrapper: {
      width: "97%",
      height: "120px",
      marginTop: '83px',
      background: mainTheme.textColor,
      borderRadius: "12px",
    }

  };
  return (
    <Box sx={styles.main}>
      <Box sx={styles.bannerWrapper}>
        <Box sx={styles.banner}>
          <Typography variant="h1" sx={styles.h1}>
            {project.name}
          </Typography>
          <Box sx={styles.description}>
            <Typography
              variant="body1"
              sx={{ fontSize: "17px", color: mainTheme.textColor }}
            >
              {project.description}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.statWrapper}>
        <Box sx={styles.circularProgressWrapper}>
          <CircularProgress
            value={83}
            color={mainTheme.backgroundColor}
            style={{ marginTop: "29px"}}
            size="120px"
          >
            <CircularProgressLabel style={{ marginTop: "-12px" }}>
              <Typography
                sx={{ color: mainTheme.backgroundColor, fontSize: "27px" }}
              >
                83%
              </Typography>
            </CircularProgressLabel>
          </CircularProgress>
        </Box>
        <Box sx={styles.statDetailsWrapper}>

        </Box>
      </Box>
      <InfoBar
        project={project}
        property={"Created at:"}
        value={project.date}
      />
      {project.deadlineBullean ? (
        <InfoBar
          project={project}
          property={"Deadline:"}
          value={project.deadline}
        />
      ) : null}
      {project.sprintsBullean ? (
        <InfoBar
          project={project}
          property={"Sprints:"}
          value={project.sprints.length}
        />
      ) : project.tasks ? (
        <InfoBar
          project={project}
          property={"Tasks:"}
          value={project.tasks.length}
        />
      ) : null}
    </Box>
  );
}
