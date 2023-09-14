import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InfoBar from "./components/InfoBar";
import { mainTheme } from "../../../../../../colorThemes/colorBase";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import DeadlineBar from "../../../../../../common/components/DeadlineProgressBar";
import { calculateDeadline } from "../../../../../../Math";
import EditIcon from "@mui/icons-material/Edit";
import SprintBlock from "../../SprintBlock";
import CloseIcon from "@mui/icons-material/Close";
import ChangeProjectInfo from "../../../ChangeProjectInfo";

const useStyles = createUseStyles({
  main: {
    width: "100%",
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
    width: "73%",
    background: mainTheme.projectBlockColor,
    margin: "12px auto 0 auto",
    borderRadius: "12px",
    "@media (max-width: 850px)": {
      width: "99%",
    },
  },

  h1: {
    color: mainTheme.headlineColor,
    fontWeight: 600,
  },

  description: {
    display: "flex",
    flexDirection: "column",
    width: "87%",
    minHeight: "100px",
    margin: "10px 0 0 27px",
    wordWrap: "word-break",
  },
});

const stylesToTransfer = {
  deadline: {
    width: "95%",
    margin: "17px auto auto auto",
    height: 8,
    borderRadius: 5,
    color: "white",
    backgroundColor: "red",
    "@media (max-width: 850px)": {
      width: "87%",
    },
  },
};

export default function InfoBlock({ project }) {
  const classes = useStyles();

  const startDate = project.date;
  const deadline = project.deadline;
  const deadlineValue = calculateDeadline(startDate, deadline);

  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  return (
    <Box className={classes.main}>
      <Box className={classes.bannerWrapper}>
        <Box
          className={classes.banner}
          sx={{ height: !project.deadlineBullean ? "150px" : "238px" }}
        >
          <Box
            sx={{
              margin: "17px 0 0 27px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h1"
              className={classes.h1}
              sx={{
                fontSize:
                  project.name && project.name.length > 12 ? "25px" : "37px",
              }}
            >
              {project.name}
            </Typography>
            <EditIcon
              sx={{ color: "white", margin: "3px 27px 0 0", cursor: "pointer" }}
              onClick={handleEdit}
            />
          </Box>
          <Typography
            variant="body1"
            sx={{
              margin: "7px 3px 0 27px",
              color: mainTheme.textColor,
              fontSize: "12px",
            }}
          >
            {project.deadlineBullean
              ? `${project.date} - ${project.deadline}`
              : project.date}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              margin: "17px 0 0 27px",
              color: mainTheme.textColor,
              fontSize: "17px",
            }}
          >
            {`${project.description}`}
          </Typography>
          {project.deadlineBullean ? (
            <>
              <Typography
                variant="body1"
                sx={{
                  margin: "23px 0 0 27px",
                  color: mainTheme.textColor,
                  fontSize: "17px",
                }}
              >
                Deadline:
              </Typography>
              <DeadlineBar
                value={deadlineValue}
                style={stylesToTransfer.deadline}
              />
            </>
          ) : null}
        </Box>
      </Box>
      <ChangeProjectInfo isOpen={edit} setEdit={setEdit} project={project} />
    </Box>
  );
}
