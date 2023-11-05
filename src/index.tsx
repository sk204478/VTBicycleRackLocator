import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import BottomDrawer from './component/BottomDrawer'; // Assuming BottomDrawer is a default export
import BasicGrid from './Layout';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const root = createRoot(document.getElementById('app'));

root.render(
  <ThemeProvider theme={theme}>
    <BasicGrid />
    <BottomDrawer />
  </ThemeProvider>
);
