import React from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const LoadingBox = () => {
  return (
    <Box sx={{ height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
      <CircularProgress sx={{
        color:"secondary.300"
      }}/>
    </Box>
  );
}


export default LoadingBox