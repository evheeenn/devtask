import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import {
  DEADLINE_DANGER,
  DEADLINE_MIDDLE,
  DEADLINE_WELL,
} from "../../../constants/styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme, value }) => ({
  height: 8,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor:
      value < 50
        ? DEADLINE_WELL
        : value < 80
        ? DEADLINE_MIDDLE
        : DEADLINE_DANGER,
  },
}));

export default function DeadlineBar({ value, style }) {
  return (
    <BorderLinearProgress
      variant="determinate"
      value={parseInt(value)}
      sx={style}
    />
  );
}
