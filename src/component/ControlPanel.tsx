import { Grid, Box, Switch, Button, Stack, Autocomplete, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Divider, Collapse, TextField} from '@mui/material';
import  ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import BuildIcon from '@mui/icons-material/Build';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { useState } from 'react';

function NestedList({ origin, destination, setDelete, onRequestDirections }) {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Grid item xs={3} style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', maxWidth: '360px'}}>
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
                  limitTags={1}
                  multiple
                  id="tags-outlined"
                  options={tempBuildings}
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
        <Box component="form" sx={{'& > :not(style)': { m: 0.2, ml: 1.7} }} noValidate autoComplete="off" style={{width:"100%"}}>
          <TextField 
            disabled size="small" 
            id="outlined-basic" 
            label="Origin" 
            variant="outlined" 
            helperText="Select origin from map" 
            style={{width:"92%"}} 
            value={origin ? `${origin.lat}, ${origin.lng}` : ''}
          />
          <TextField disabled size="small" id="outlined-basic" label="Destination" variant="outlined" helperText="Select Destination from map" style={{width:"92%"}} value={destination ? `${destination.lat}, ${destination.lng}` : ''}/>
          <Stack direction="row" spacing={1}>
            <Button variant="outlined" startIcon={<DeleteIcon />} style={{width:"47%"}} onClick={setDelete}>
              RESET
            </Button>
            <Button variant="contained" startIcon={<SendIcon />} style={{width:"47%"}} onClick={onRequestDirections}>
              Direction
            </Button>
          </Stack>
        </Box>
        </List>
      </Box>
    </Grid>
  );  
}

const tempBuildings = [
  { title: 'Newman Library'},
  { title: 'Torgersen Hall'},
  { title: 'Burruss Hall'}
];

export default NestedList;