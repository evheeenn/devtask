import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Logo from "../Logo";
import ProjectInfo from "./components/ProjectInfo";
import { mainTheme } from "../../colorThemes/colorBase";

export default function ProjectPage() {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [project, setProject] = useState({});
  const { name } = useParams();

  useEffect(() => {
    if (user.projects && project) {
      const project = user.projects.find(el => el.name === name)
      setProject(project)
    }
  }, [name, user.projects]);

  const styles = {
    main: {
      position: 'absolute',
      width: "100%",
      height: "100%",
      background: mainTheme.backgroundColor,
      margin: 0,
      padding: 0,
    },

    projectWrapper: {
      width: "90%",
      height: "83vh",
      margin: '100px auto 0 auto',
      display: "flex",
      justifyContent: "space-between",
      "@media (max-width: 850px)": {
        justifyContent: 'center',
        flexDirection: 'column'
      },
    },

    tasksOrSprintsWrapper: {
      width: "50%",
      height: "100%",
      "@media (max-width: 850px)": {
        width: '100%'
      },
    },
  };

  return (
    <Box sx={styles.main}>
      <Logo />
      <Box sx={styles.projectWrapper}>
        <ProjectInfo project={project}/>
        <Box sx={styles.tasksOrSprintsWrapper}></Box>
      </Box>
    </Box>
  );
}
