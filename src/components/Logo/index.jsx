import React from 'react'
import Box from '@mui/material/Box'
import logo from "../../img/logo.png";
import { useNavigate } from 'react-router-dom';

export default function Logo() {

    const styles = {
        main: {
          width: "70px",
          height: "70px",
          position: "fixed",
          zIndex: 1,
          top: 7,
          left: 17,
          background: `url('${logo}')`,
          backgroundSize: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },
    }

  return (
    <Box sx={styles.main}></Box>
  )
}
