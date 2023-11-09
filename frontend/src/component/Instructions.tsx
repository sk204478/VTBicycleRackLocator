import { Box, Typography, Link, Paper, Chip } from '@mui/material';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import EmailCopyToClipboard from './EmailCopyToClipboard';

const Instructions = () => {

  const handleClick = () => {
  };

  return (
    <Box style={{ padding: '20px', maxWidth: '900px', margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to VTBicycleRackLocator
      </Typography>
      <Paper elevation={4} style={{ padding: '10px', display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
        <Typography variant="body1" gutterBottom>
          Simple MERN full-stack bicycle rack locator for Virgnia Tech.
        </Typography>
      </Paper>
      <Typography variant="h5" gutterBottom>
        Interactive Map Features
      </Typography>
      <Paper elevation={4} style={{ padding: '10px', display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
        <img
          src="/InfoCard_img.png"
          alt="InfoCardExplain"
          style={{ width: '20%', marginRight: '10px' }}
        />
        <Typography variant="h6">
          InfoCard
          <Typography variant="body1">
            By clicking <span style={{ verticalAlign: 'middle' }}><ModeStandbyIcon fontSize="small" color="primary" /></span> icon on the Google Map,
            an <span style={{ fontWeight: 'bold' }}>InfoCard</span> will pop up. This card displays an image of the bicycle rack, the rack's ID,
            whether it is covered, and its maximum capacity. It also provides <Chip label="Origin" variant="outlined" color="primary" size="small" onClick={handleClick} /> and <Chip label="Destination" variant="outlined" color="primary" size="small" onClick={handleClick} /> buttons for routing purposes.
            You can view a larger version of the bicycle rack image by
            clicking on the image itself. Selecting <Chip label="Origin" variant="outlined" color="primary" size="small" onClick={handleClick} /> or <Chip label="Destination" variant="outlined" color="primary" size="small" onClick={handleClick} /> will set the rack's
            coordinates in the <span style={{ fontWeight: 'bold' }}>Direction Service</span>.
            {/* More explanation as needed */}
          </Typography>
        </Typography>
      </Paper>
      <Paper elevation={4} style={{ padding: '10px', display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
        <img
          src="/DirectionService_img.png"
          alt="InfoCardExplain"
          style={{ width: '30%', marginRight: '1px' }}
        />
        <Typography variant="h6">
          Direction Service
          <Typography variant="body1">
            After selecting an Origin and
            a Destination using the <span style={{ fontWeight: 'bold' }}>InfoCards</span> on the map, pressing the <Chip label="DIRECTION" color="primary" size="small" onClick={handleClick} /> will display the route based on the provided coordinates.
            If you wish to clear the current directions and return to the default map view, simply click the <Chip label="RESET" variant="outlined" color="primary" size="small" onClick={handleClick} /> button. This will remove the route
            from the map and reset the zoom level and center coordinates to their defaults.
            {/* More explanation as needed */}
          </Typography>
        </Typography>
      </Paper>
      <Paper elevation={4} style={{ padding: '10px', display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
        <img
          src="/Filter_img.png"
          alt="InfoCardExplain"
          style={{ width: '30%', marginRight: '1px' }}
        />
        <Typography variant="h6">
          Filter
          <Typography variant="body1" style={{ marginBottom: '3px' }}>
            <span style={{ fontWeight: 'bold' }}>Show Only Covered:</span> Toggle this switch to filter and display only those bicycle racks that are covered.
            This can be particularly useful during inclement weather conditions when you might prefer a rack that
            provides protection for your bicycle.
          </Typography>
          <Typography variant="body1">
            <span style={{ fontWeight: 'bold' }}>Show Near to:</span> This filter allows you to view bicycle racks located in the proximity of selected buildings.
            You can toggle this option on and select one or multiple buildings from the dropdown list.
            The map will update to show only racks that are near the buildings you've chosen.
            To remove this filter and see all bicycle racks again, simply toggle off the <Chip label="Show Near to" variant="outlined" color="primary" size="small" onClick={handleClick} /> option.
          </Typography>
        </Typography>
      </Paper>
      <Typography variant="h5" gutterBottom>
        Need Help or Have Suggestion?
      </Typography>
      <Paper elevation={4} style={{ padding: '10px', display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
        <Typography variant="body1">
          If you have any questions, suggestions or need assistance, please send us email.<EmailCopyToClipboard />
        </Typography>
      </Paper>
    </Box>
  );
}

export default Instructions;