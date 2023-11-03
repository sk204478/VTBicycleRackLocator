import React, { useState, useRef } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import HelpSharpIcon from '@mui/icons-material/HelpSharp';
import Popper from '@mui/material/Popper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function BottomIconDrawer() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div style={{ position: 'fixed', bottom: '10px', right: '10px' }}>
      <IconButton ref={anchorRef} onClick={handleToggle}>
        <MenuIcon />
      </IconButton>

      <Popper open={open} anchorEl={anchorRef.current} placement="top-end">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box
            mb={0.1}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <IconButton
              onClick={() => {
                /* Navigate or do something for Route 1 */
              }}
            >
              <HomeSharpIcon />
            </IconButton>
            <Typography variant="caption">Home</Typography>
          </Box>
          <Box
            mb={0.1}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <IconButton
              onClick={() => {
                /* Navigate or do something for Route 2 */
              }}
            >
              <HelpSharpIcon />
            </IconButton>
            <Typography variant="caption">Help</Typography>
          </Box>
        </Box>
      </Popper>
    </div>
  );
}

export default BottomIconDrawer;
