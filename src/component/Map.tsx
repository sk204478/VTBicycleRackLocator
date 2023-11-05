import { useState, useCallback, useRef } from 'react';
import { GoogleMap, Marker, OverlayViewF, useLoadScript } from '@react-google-maps/api';
import { Grid, Box }  from '@mui/material';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import data from '../datas/bicycle_rack_coordinates_data.json';
import InfoCard from './InfoCard';
import ReactDOM from 'react-dom';
import Legend from './ControlPanel';

const adjustIconPath = "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z";

// Create an icon object with the path
const adjustIcon = {
  path: adjustIconPath,
  fillColor: '#630031', // Set the fill color for your icon
  fillOpacity: 1,    // Adjust opacity as needed
  scale: 0.5,        // Scale your icon down, SVG paths can be large
  strokeColor: '#630031',
  strokeWeight: 0.5, // Adjust stroke weight as needed
};

const mapStyles = {
  height: '100%',
  width: '100%',
};

const defaultCenter = {
  lat: 37.228366,
  lng: -80.421728,
};

function Map() {

  // 
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [showInputScreen, setShowInputScreen] = useState(false);
  const handleSetOrigin = (location) => {
    setOrigin({ lat: location.Latitude, lng: location.Longitude });
    setShowInputScreen(true); // show the input screen
  };
  const handleSetDestination = (location) => {
    setDestination({ lat: location.Latitude, lng: location.Longitude });
    setShowInputScreen(true); // show the input screen
  };

  const mapRef = useRef<google.maps.Map | null>(null);
  
  const handleMapLoad = useCallback((map) => {
    mapRef.current = map; // Store the map instance when the map is loaded
    const centerControlDiv = document.createElement('div');
    renderCenterControl(centerControlDiv, map);
    map.controls[window.google.maps.ControlPosition.RIGHT_CENTER].push(centerControlDiv);
  }, []);

  const renderCenterControl = (controlDiv, map) => {
    // Set up the control button UI
    controlDiv.style.backgroundColor = '#fff';
    controlDiv.style.border = '8px solid #fff';
    controlDiv.style.borderRadius = '3px';
    controlDiv.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlDiv.style.cursor = 'pointer';
    controlDiv.style.marginRight = '10px';
    controlDiv.style.textAlign = 'center';
    controlDiv.title = 'Click to recenter the map';

    const reactIconContainer = document.createElement('div');
    controlDiv.appendChild(reactIconContainer);
    ReactDOM.render(<GpsFixedIcon />, reactIconContainer);
    // Set up the click event listener
    controlDiv.addEventListener('click', () => {
      const center = { lat: 37.228366, lng: -80.421728 };
      map.panTo(center);
    });
  };



  const getPixelPositionOffset = (width, height) => {
    return {
      x: 7,
      y: -(height)+5,
    };
  };

  const getPixelPositionOffsetForInputScreen = (width, height) => {
    return {
      x: width,
      y: height,
    };
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '',
    language: 'EN'
  });

  const [selectedLocation, setSelectedLocation] = useState(null);

  // Function to handle marker click
  const handleMarkerClick = (location, event) => {
    event.stop();
    setSelectedLocation(location);
  };

  // Function to close the modal
  const handleClose = () => {
    setSelectedLocation(null);
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  

  return (
    <Grid container sx={{ ml: 1, mt: 1}}>
      <Grid item xs={9} sx={{ }}>
        <Box height={700} width="100%">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={16}
            center={defaultCenter}
            onClick={handleClose}
            onLoad={handleMapLoad}
          >
            {data.map((location, index) => (
              <Marker
                key={index}
                icon={adjustIcon}
                position={{ lat: location.Latitude, lng: location.Longitude }}
                onClick={(event) => handleMarkerClick(location, event)}
              />
            ))}
            {selectedLocation && (
              <OverlayViewF
                mapPaneName={'floatPane'}
                getPixelPositionOffset={getPixelPositionOffset}
                position={{ lat: selectedLocation.Latitude, lng: selectedLocation.Longitude }}
              >
                <div 
                  style={{ background: "white", position: "relative", width: '200px'}}
                  onClick={(event) => event.stopPropagation()}
                >
                  <InfoCard
                    bikeRackId={selectedLocation['Bike_Rack_ID']}
                    covered={selectedLocation['Covered?']}
                    capacity={selectedLocation['Capacity']}
                    latitude={selectedLocation['Latitude']}
                    longitude={selectedLocation['Longitude']}
                    onSetOrigin={handleSetOrigin} // Pass the handler
                    onSetDestination={handleSetDestination} // Pass the handler
                  />
                </div>
              </OverlayViewF>
            )}
          </GoogleMap>
        </Box>
      </Grid>
      <Legend />
    </Grid>
  );
}

export default Map;

/*
          {showInputScreen && (
            <OverlayViewF
              position={mapRef.current?.getCenter() || defaultCenter} // Use the center of the map for positioning
              mapPaneName="overlayMouseTarget" // FLOAT_PANE is typically used for UI overlays
              getPixelPositionOffset={getPixelPositionOffsetForInputScreen} // This function positions the UI element
            >
              <DirectionsInputScreen
                origin={origin}
                destination={destination}
                setOrigin={setOrigin}
                setDestination={setDestination}
                setShowInputScreen={setShowInputScreen}
              />
            </OverlayViewF>
          )}
*/