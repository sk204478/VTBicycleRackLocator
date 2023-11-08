import { createRoot } from 'react-dom/client';
import { Grid, ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './theme';
import Map from './pages/Map';
import Weather from './component/Weather';
import BottomDrawer from './component/BottomDrawer';
import Help from './pages/Help';



const root = createRoot(document.getElementById('app'));

root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Grid container>
        <Grid item xs={12} sx={{ mb: 1 }}>
          <Weather />
        </Grid>
        <Grid item xs={12}>
          <Routes>
            <Route path="/" element={<Map />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </Grid>
      </Grid>
      <BottomDrawer />
    </BrowserRouter>
  </ThemeProvider>
);
