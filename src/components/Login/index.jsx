import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Landing from "./components/Landing";
import "./index.css";
import FormBox from "./components/FormBox";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserThunk } from "../../store/actions";

export default function Login() {

  const styles = {
    main: {
      width: "100%",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      background: "#D3D5F0",
      margin: 0,
      padding: 0,
      justifyContent: "space-around",
      "@media (max-width: 850px)": {
        justifyContent: "center",
        flexDirection: "column",
      },
    },
  };
  return (
    <Box sx={styles.main}>
      <Landing />
      <Box>
        <FormBox />
      </Box>
    </Box>
  );
}
