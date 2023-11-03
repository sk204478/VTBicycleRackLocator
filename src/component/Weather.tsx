import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function Weather() {
  return (
    <Grid item xs={8}>
      <Box
        height={100}
        bgcolor="red"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        Red Box
      </Box>
    </Grid>
  );
}

export default Weather;
