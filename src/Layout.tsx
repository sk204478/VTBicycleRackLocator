import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Filters from './component/Filters';
import Legend from './component/Legends';
import Map from './component/Map';
import Weather from './component/Weather';

function Layout() {
  return (
    <Grid container spacing={1}>
      {/* Row 1 */}
      <Weather />
      {/* Row 2 */}
      <Map />
      <Legend />
      {/* Row 3 */}
      <Grid item xs={12}>
        <Filters />
      </Grid>
    </Grid>
  );
}

export default Layout;
