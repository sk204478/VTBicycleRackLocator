import Grid from '@mui/material/Grid';
import Filters from './component/Filters';
import Legend from './component/ControlPanel';
import Map from './component/Map';
import Weather from './component/Weather';

function Layout() {
  return (
    <Grid container spacing={1}>
      {/* Row 1 */}
      <Weather />
      {/* Row 2 */}
      <Map />
      {/* Row 3 */}

    </Grid>
  );
}

export default Layout;

/*
      <Legend />
      <Grid item xs={12}>
        <Filters />
      </Grid>
*/