import { useEffect } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import data from '../datas/bicycle_rack_coordinates_data.json';

const libraries = ['places'];

const mapStyles = {
  height: '100%',
  width: '100%',
};

const defaultCenter = {
  lat: 37.228366,
  lng: -80.421728,
};

function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDqis46CFj0nUiUmPTaxAcxb3XY7-eEkHc' || '',
    language: 'EN',
    libraries,
  });

  useEffect(() => {
    console.log(data[0].Capacity);
  }, []);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <Grid item xs={9}>
      <Box height={700} width="100%">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={16}
          center={defaultCenter}
        >
          {data.map((location, index) => (
            <Marker
              key={index}
              position={{ lat: location.Latitude, lng: location.Longitude }}
            />
          ))}
        </GoogleMap>
      </Box>
    </Grid>
  );
}

export default Map;
