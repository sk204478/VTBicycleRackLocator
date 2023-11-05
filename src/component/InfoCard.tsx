import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function InfoCard({ bikeRackId, covered, capacity, latitude, longitude, onSetOrigin, onSetDestination }) {

    const catImageUrl = `https://cataas.com/cat?${new Date().getTime()}`;
    
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="110"
          image={catImageUrl}
          alt="Bicycle Rack"
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
        <Button size="small" color="primary" onClick={() => onSetOrigin({ Latitude: latitude, Longitude: longitude })}>
          Origin
        </Button>
        <Button size="small" color="primary" onClick={() => onSetDestination({ Latitude: latitude, Longitude: longitude })}>
          Destination
        </Button>
      </CardActions>
    </Card>
  );
}