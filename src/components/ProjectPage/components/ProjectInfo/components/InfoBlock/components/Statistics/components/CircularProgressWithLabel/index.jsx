import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const styles = {
    main: {
        width: '140px',
        height: '140px'
    }
  }

  return (
    <Stack spacing={2} direction="row">
      <CircularProgress variant="determinate" value={25} style={styles.main}/>
    </Stack>
  );
}