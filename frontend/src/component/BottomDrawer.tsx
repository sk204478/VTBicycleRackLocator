import { useState, useRef } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import HelpSharpIcon from '@mui/icons-material/HelpSharp';
import Popper from '@mui/material/Popper';
import { Box, Fab } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function BottomIconDrawer() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const navigate = useNavigate();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div style={{ position: 'fixed', bottom: '10px', right: '10px' }}>

      <Fab
        variant="extended"
        ref={anchorRef}
        size="small"
        color="secondary"
        onClick={handleToggle}
        sx={{ padding: 2 }}
      >
        <MenuIcon sx={{ mr: 1 }} />
        PAGES
      </Fab>

      <Popper open={open} anchorEl={anchorRef.current} placement="top-end">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box
            mb={0.2}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Fab onClick={() => navigate('/')} size="medium" color="secondary" sx={{ mb: 0.5 }}>
              <HomeSharpIcon />
            </Fab>
          </Box>
          <Box
            mb={0.2}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Fab
              onClick={() => navigate('/help')} size="medium" color="secondary" sx={{ mb: 0.5 }}
            >
              <HelpSharpIcon />
            </Fab>
          </Box>
        </Box>
      </Popper>
    </div>
  );
}

export default BottomIconDrawer;