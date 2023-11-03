import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import BottomDrawer from './component/BottomDrawer'; // Assuming BottomDrawer is a default export
import BasicGrid from './Layout';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <BasicGrid />
    <BottomDrawer />
  </StrictMode>
);
