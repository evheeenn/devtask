import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { mainTheme } from '../../../../../../../../colorThemes/colorBase'

export default function InfoBar({project, property, value}) {
    
    const styles = {

        wrapper : {
            width: '97%',
            height: '42px',
            display: 'flex',
            justifyContent: 'space-between', 
            alignItems: 'center',
            borderRadius: '7px',
            margin: "7px auto 0 auto",
            background: mainTheme.barColor
        },

        property: {
            color: mainTheme.backgroundColor,
            marginLeft: '17px'
        },

        value: {
            color: mainTheme.backgroundColor,
            marginRight: '17px'
        }
    }
  return (
    <Box sx={styles.wrapper}>
        <Typography variant='body1' sx={styles.property}>{property}</Typography>
        <Typography variant='body1' sx={styles.value}>{value}</Typography>
    </Box>
  )
}
