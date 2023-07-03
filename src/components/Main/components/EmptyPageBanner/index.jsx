import React from 'react'
import Box from '@mui/material/Box'
import mainImage from '../../../../img/empty-page-banner.png'

export default function EmptyPageBanner() {

    const styles = {

        main: {
            width: '500px',
            height: '500px',
            background: `url('${mainImage}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            "@media (max-width: 870px)": {
                marginTop: '12%'
              },
        }

    }

  return (
    <Box sx={styles.main}></Box>
  )
}
