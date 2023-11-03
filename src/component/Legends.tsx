import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function Legend() {
  return (
    <Grid item xs={3}>
      <Box height={400} display="flex" flexDirection="column" alignItems="left">
        <Box
          bgcolor="yellow"
          mb={1}
          p={1}
          style={{ border: '1px solid black' }}
        >
          Yellow Box 1
        </Box>
        <Box
          bgcolor="yellow"
          mb={1}
          p={1}
          style={{ border: '1px solid black' }}
        >
          Yellow Box 2
        </Box>
        <Box bgcolor="yellow" p={1} style={{ border: '1px solid black' }}>
          Yellow Box 3
        </Box>
      </Box>
    </Grid>
  );
}

export default Legend;

/*
export default function InsetList() {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      aria-label="contacts"
    >
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <HomeSharpIcon />
          </ListItemIcon>
          <ListItemText primary="Chelsea Otakan" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <HomeSharpIcon />
          </ListItemIcon>
          <ListItemText primary="Chelsea Otakan" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}
*/
