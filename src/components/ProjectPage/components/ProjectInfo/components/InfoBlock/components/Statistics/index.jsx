import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CircularProgressWithLabel from './components/CircularProgressWithLabel'
import { mainTheme } from '../../../../../../../../colorThemes/colorBase'

export default function Statistics({ project, headline, value}) {

    const styles = {
        main: {
            display: "flex",
            alignItems: 'center',
            justifyContent: 'space-around',
            width: "97%",
            height: "170px",
            background: mainTheme.projectBlockColor,
            margin: "17px auto 0 auto",
            borderRadius: "12px",
          },
    }
  return (
    <Box sx={styles.main}>
        <Typography variant='h1'>{headline}</Typography>
      
    </Box>
  )
}
