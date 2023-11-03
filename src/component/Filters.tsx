import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function Filters() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={3}>
        <Box
          height={50}
          bgcolor="purple"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          Purple Box 1
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box
          height={50}
          bgcolor="purple"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          Purple Box 2
        </Box>
      </Grid>
    </Grid>
  );
}

export default Filters;
