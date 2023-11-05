import { createRoot } from 'react-dom/client';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Map from './pages/Map';
import Weather from './component/Weather';
import BottomDrawer from './component/BottomDrawer';

const root = createRoot(document.getElementById('app'));

root.render(
  <ThemeProvider theme={theme}>
    <Grid container spacing={1}>
      <Weather />
      <Map />
    </Grid>
    <BottomDrawer />
  </ThemeProvider>
);
