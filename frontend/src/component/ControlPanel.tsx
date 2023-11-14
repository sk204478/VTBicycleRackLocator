import { Grid, Box, Switch, Button, Stack, Autocomplete, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Divider, Collapse, TextField } from '@mui/material';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import BuildIcon from '@mui/icons-material/Build';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
//import useBuildingData from '../datas/buildings.json';
import useBuildingData from './useBuildingData';

import { useState } from 'react';

function ControlPanel({ origin, destination, setDelete, onRequestDirections, onToggleCovered, onToggleNearTo, offToggleNearTo }) {
  const { data: BuildingNames, loading, error } = useBuildingData();
  const [open, setOpen] = useState(false);
  const [showNearTo, setShowNearTo] = useState(false);

  const handleClick = () => {
    const newOpenState = !open;
    setOpen(newOpenState);
    setShowNearTo(newOpenState);
    // If collapsing, also reset the selected buildings
    if (open) {
      offToggleNearTo();
    }
  };

  const handleToggleShowNearTo = (event) => {
    setShowNearTo(event.target.checked);
    if (!event.target.checked) {
      // If turning off the switch, reset the selected buildings
      offToggleNearTo();
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Grid item xs={3} style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', maxWidth: '360px' }}>
      <Box >
        <List
          sx={{ width: '100%', bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              LEGENDS
            </ListSubheader>
          }
        >
          <Divider variant="middle" />
          <ListItemButton>
            <ListItemIcon>
              <ModeStandbyIcon />
            </ListItemIcon>
            <ListItemText primary="Bicycle Rack" />
          </ListItemButton>
          <Divider variant="middle" />
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
          <Divider variant="middle" />
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
          sx={{ width: '100%', bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              FILTER
            </ListSubheader>
          }
        >
          <Divider variant="middle" />
          <ListItemButton>
            <ListItemIcon>
              <Switch size="small" onChange={(e) => onToggleCovered(e.target.checked)} />
            </ListItemIcon>
            <ListItemText primary="Show Only Covered" />
          </ListItemButton>
          <Divider variant="middle" />

          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <Switch size="small" checked={showNearTo} onChange={handleToggleShowNearTo} />
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
                  options={BuildingNames}
                  limitTags={1}
                  getOptionLabel={(option) => option.Buildings}
                  filterSelectedOptions
                  onChange={onToggleNearTo}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Location"

                      placeholder="Location"
                    />
                  )}
                  style={{ width: "100%" }}
                />
              </ListItemButton>
            </List>
          </Collapse>
          <Divider variant="middle" />
        </List>
      </Box>
      <Box>
        <List
          sx={{ width: '100%', bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              DIRECTION SERVICE
            </ListSubheader>
          }
        >
          <Box component="form" sx={{ '& > :not(style)': { m: 0.2, ml: 1.7 } }} noValidate autoComplete="off" style={{ width: "100%" }}>
            <TextField
              disabled size="small"
              fullWidth
              id="outlined-basic"
              label="Origin"
              variant="outlined"
              helperText="Select origin from map"
              style={{ width: "92%" }}
              value={origin ? `${origin.lat}, ${origin.lng}` : ''}
            />
            <TextField disabled size="small" id="outlined-basic" label="Destination" variant="outlined" helperText="Select Destination from map" style={{ width: "92%" }} value={destination ? `${destination.lat}, ${destination.lng}` : ''} />
            <Stack direction="row" spacing={1}>
              <Button variant="outlined" startIcon={<DeleteIcon />} style={{ width: "47%" }} onClick={setDelete}>
                RESET
              </Button>
              <Button variant="contained" startIcon={<SendIcon />} style={{ width: "47%" }} onClick={onRequestDirections}>
                Direction
              </Button>
            </Stack>
          </Box>
        </List>
      </Box>
    </Grid>
  );
}

export default ControlPanel;