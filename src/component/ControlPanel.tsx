import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import BuildIcon from '@mui/icons-material/Build';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import Switch from '@mui/material/Switch';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { useState } from 'react';

function NestedList() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Grid item xs={3} style={{ display: 'flex', flexDirection: 'column', height: '100%'}}>
      <Box >
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              LEGENDS
            </ListSubheader>
          }
        >
          <Divider variant="middle"  />
          <ListItemButton>
            <ListItemIcon>
              <ModeStandbyIcon />
            </ListItemIcon>
            <ListItemText primary="Bicycle Rack" />
          </ListItemButton>
          <Divider variant="middle"  />
          <ListItemButton>
            <ListItemIcon>
              <LocalDiningIcon />
            </ListItemIcon>
            <ListItemText primary="Dining Place" />
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <ListItemIcon>
              <BuildIcon />
            </ListItemIcon>
            <ListItemText primary="Repair Shop" />
          </ListItemButton>
          <Divider variant="middle"  />
          <ListItemButton>
            <ListItemIcon>
              <DirectionsBusIcon />
            </ListItemIcon>
            <ListItemText primary="BT Stop" />
          </ListItemButton>
          <Divider variant="middle" />
        </List>
      </Box>
      <Box >
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              FILTER
            </ListSubheader>
          }
          >
          <Divider variant="middle"  />
          <ListItemButton>
            <ListItemIcon>
              <Switch size="small" />
            </ListItemIcon>
            <ListItemText primary="Show Only Covered" />
          </ListItemButton>
          <Divider variant="middle"  />

          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <Switch  size="small" />
            </ListItemIcon>
            <ListItemText primary="Show Near to " />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton >
                <Autocomplete
                  multiple
                  id="tags-outlined"
                  options={top100Films}
                  getOptionLabel={(option) => option.title}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Location"
                      placeholder="Location"
                    />
                  )}
                  style={{width: "100%"}}
                />
              </ListItemButton>
            </List>
          </Collapse>
          <Divider variant="middle"  />
        </List>
      </Box>
      <Box>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              DIRECTION SERVICE
            </ListSubheader>
          }
        >
        <Divider variant="middle"  />

        <Divider variant="middle"  />
        
        <Divider variant="middle"  />
        </List>
      </Box>
    </Grid>
  );  
}

const top100Films = [
  { title: 'Newman Library', year: 1994 },
  { title: 'Torgersen Hall', year: 1972 }
];

export default NestedList;

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


function Legend() {
  return (
    <Grid item xs={3} style={{border: '1px solid green'}}>
      <Box display="flex" flexDirection="column" alignItems="left" style={{border: '1px solid red', marginBottom:"10px"}}>
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
      <Box height="100%" display="flex" flexDirection="column" alignItems="left" style={{border: '1px solid red'}}>
        <Box
          bgcolor="yellow"
          mb={1}
          p={1}
          style={{ border: '1px solid black' }}
        >
          Yellow Box 4
        </Box>
      </Box>
    </Grid>
  );
}




        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
*/
