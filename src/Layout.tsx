import Grid from '@mui/material/Grid';
import Map from './component/Map';
import Weather from './component/Weather';

function Layout() {
  return (
    <Grid container spacing={1}>
      <Weather />
      <Map />
    </Grid>
  );
}

export default Layout;