import { Box, makeStyles } from "@mui/material";
import React from "react";
import { createUseStyles } from "react-jss";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import { Typography } from "antd";
import StatusBlock from "./components/StatusBlock";
import { calculateDeadline } from "../../../../../Math";
import DeadlineBar from "../../../../../common/components/DeadlineProgressBar";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    width: "73%",
    height: "114px",
    borderRadius: "8px",
    background: "#b8bbdb",
    margin: "7px auto 7px auto",
    "@media (max-width: 850px)": {
      width: "99%",
    },
    "@media (max-width: 450px)": {
      height: "100px",
    },
  },
  main: {
    display: "flex",
    width: "100%",
    height: "83px",
    alignItems: "center",
    "@media (max-width: 850px)": {
      width: "99%",
    },
    "@media (max-width: 450px)": {
      height: "73px",
    },
  },

  sprintName: {
    fontSize: "23px",
    fontWeight: 700,
    color: "#525363",
    marginLeft: "20px",
    "@media (max-width: 450px)": {
      marginLeft: "12px",
      fontSize: "15px",
    },
  },

  time: {
    fontSize: "12px",
    color: "#525363",
    marginTop: "0",
    marginLeft: "20px",
    float: "left",
    "@media (max-width: 450px)": {
      marginLeft: "12px",
      fontSize: "9px",
    },
  },
});

const stylesToTransfer = {
  deadline: {
    width: "95%",
    margin: "0px auto auto auto",
    height: 8,
    borderRadius: 5,
    color: "white",
    backgroundColor: "red",
    "@media (max-width: 850px)": {
      width: "87%",
    },
  },
};

export default function SprintBlock({ sprint }) {
  const classes = useStyles();

  const startDate = sprint.date;
  const deadline = sprint.deadline;

  const deadlineValue = calculateDeadline(startDate, deadline);

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.main}>
        <HistoryToggleOffIcon
          sx={{
            fontSize: 50,
            marginLeft: "23px",
            color: "#5a5b66",
            "@media (max-width: 450px)": {
              fontSize: 40,
              marginLeft: "12px",
            },
          }}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="body1" className={classes.sprintName}>
            {sprint.name}
          </Typography>
          <Typography
            variant="body1"
            className={classes.time}
          >{`${sprint.date} - ${sprint.deadline}`}</Typography>
        </Box>
        <StatusBlock value={deadlineValue} />
      </Box>
      <DeadlineBar value={deadlineValue} style={stylesToTransfer.deadline} />
    </Box>
  );
}
