import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import DeadlineBar from "../../../../common/components/DeadlineProgressBar";
import ProgressBar from "../../../../common/components/ProgressBar";
import { calculateDeadline } from "../../../../Math";
import { useNavigate } from "react-router-dom";
import { mainTheme } from "../../../../colorThemes/colorBase";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  main: {
    width: "378px",
    height: "200px",
    background: mainTheme.projectBlockColor,
    margin: "17px 17px 7px 17px",
    borderRadius: "12px",
    cursor: "pointer",
  },

  headerWrapper: {
    display: "flex",
    justifyContent: "space-between",
    margin: "27px 27px 0 27px",
  },

  count: {
    color: mainTheme.textColor,
    fontSize: "17px",
  },

  h1: {
    color: mainTheme.headlineColor,
    fontWeight: 600,
  },
});

export default function Project({ el }) {
  const stylesToTransfer = {
    deadline: {
      width: "83%",
      margin: "73px auto 0 30px",
      height: 8,
      borderRadius: 5,
      color: "white",
      backgroundColor: "red",
    },
  };

  const classes = useStyles();

  const navigate = useNavigate();

  const startDate = el.date;
  const deadline = el.deadline;

  const deadlineValue = calculateDeadline(startDate, deadline);

  const navigateToProjectPage = () => {
    navigate(`/project/${el.id}`);
  };

  return (
    <Box className={classes.main} onClick={navigateToProjectPage}>
      <Box className={classes.headerWrapper}>
        <Typography
          variant="h1"
          className={classes.h1}
          sx={{ fontSize: el.name && el.name.length >= 12 ? "25px" : "37px" }}
        >
          {el.name}
        </Typography>
        <Typography className={classes.count}>
          {`Sprints: ${el.sprints.length}`}
        </Typography>
      </Box>
      <Typography sx={{ margin: "7px 0 0 27px", color: mainTheme.textColor }}>
        {el.date}
      </Typography>
      {el.deadlineBullean ? (
        <DeadlineBar value={deadlineValue} style={stylesToTransfer.deadline} />
      ) : null}
    </Box>
  );
}
