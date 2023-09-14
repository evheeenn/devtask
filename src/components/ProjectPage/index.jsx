import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Logo from "../../common/components/Logo";
import ProjectInfo from "./components/ProjectInfo";
import { createUseStyles } from "react-jss";
import { MAIN_BACKGROUND_COLOR } from "../../constants/styles";
import BasicModal from "./components/Modal";

const useStyles = createUseStyles({
  main: {
    position: "absolute",
    width: "100%",
    minHeight: "100vh",
    background: MAIN_BACKGROUND_COLOR,
    margin: 0,
    padding: 0,
  },

  projectWrapper: {
    width: "90%",
    height: "83vh",
    margin: "100px auto 0 auto",
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width: 850px)": {
      justifyContent: "center",
      flexDirection: "column",
    },
  },

  tasksOrSprintsWrapper: {
    width: "50%",
    height: "100%",
    "@media (max-width: 850px)": {
      width: "100%",
    },
  },
});

export default function ProjectPage() {
  const classes = useStyles();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [project, setProject] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (user.projects && project) {
      const project = user.projects.find((el) => el.id === id);
      setProject(project);
    }
  }, [id, user.projects]);

  return (
    <Box className={classes.main}>
      <Logo />
      <Box className={classes.projectWrapper}>
        <ProjectInfo project={project} />
      </Box>
      <BasicModal project={project} />
    </Box>
  );
}
