import { Paper, Box, Modal, Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions } from '@mui/material';
import { useState } from 'react';


export default function InfoCard({ bikeRackId, covered, capacity, latitude, longitude, onSetOrigin, onSetDestination, imgURL }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const rackImageUrl = imgURL === "n/a"
    ? `https://cataas.com/cat?${new Date().getTime()}`
    : imgURL;




  return (
    <>
      <Card sx={{ width: '100%' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="110"
            image={rackImageUrl}
            alt="Bicycle Rack"
            onClick={handleOpen}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {bikeRackId}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Covered: {covered}
              <br />
              Capacity: {capacity}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Box width="100%" display="flex" justifyContent="space-between"> {/* Use Box to create a flex container */}
            <Button size="small" color="primary" onClick={() => onSetOrigin({ Latitude: latitude, Longitude: longitude })}>
              Origin
            </Button>
            <Button size="small" color="primary" onClick={() => onSetDestination({ Latitude: latitude, Longitude: longitude })}>
              Destination
            </Button>
          </Box>
        </CardActions>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Paper
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            outline: 'none',
            maxWidth: '95vw',
            maxHeight: '80vh',
            overflow: 'hidden',
            p: 0,
          }}
          elevation={4}
        >
          <img src={rackImageUrl} alt="Bicycle Rack" style={{ width: '100%', height: '100%', margin: 'auto', display: 'block' }} />
        </Paper>
      </Modal>
    </>
  );
}