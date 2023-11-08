import { useState, useCallback, useRef } from 'react';
import { GoogleMap, Marker, OverlayViewF, useLoadScript, DirectionsRenderer } from '@react-google-maps/api';
import { Grid, Box, Paper }  from '@mui/material';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import data from '../datas/bicycle_rack_coordinates_data.json';
import InfoCard from '../component/InfoCard';
import ReactDOM from 'react-dom';
import ControlPanel from '../component/ControlPanel';

// Create an icon object with the path
const ModeStandbyIcon = {
  path: "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z",
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
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [showCoveredOnly, setShowCoveredOnly] = useState(false);
  const [selectedBuildings, setSelectedBuildings] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const mapRef = useRef<google.maps.Map | null>(null);

  const handleBuildingSelect = (event, newValue) => {
    setSelectedBuildings(newValue);
  };  

  const handleBuildingUnselect = () => {
    setSelectedBuildings([]);
  }

  const requestDirections = (origin, destination) => {
    if (!origin || !destination) return;

    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin: new google.maps.LatLng(origin.lat, origin.lng),
        destination: new google.maps.LatLng(destination.lat, destination.lng),
        travelMode: google.maps.TravelMode.BICYCLING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setDirectionsResponse(result);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  };

  const handleRequestDirections = () => {
    if (origin && destination) {
      requestDirections(origin, destination);
      setSelectedLocation(null);
    }
  };

  const handleSetOrigin = (location) => {
    setOrigin({ lat: location.Latitude, lng: location.Longitude });
  };
  const handleSetDestination = (location) => {
    setDestination({ lat: location.Latitude, lng: location.Longitude });
  };
  const handleDeleteBoth = () => {
    setDirectionsResponse(null);
    setOrigin(null);
    setDestination(null);

    if (mapRef.current) {
      mapRef.current.panTo(defaultCenter);
      mapRef.current.setZoom(16);
      setSelectedLocation(null);
    }
  };

  
  
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
      mapRef.current.setZoom(16);
    });
  };

  const getPixelPositionOffset = (width, height) => {
    return {
      x: 7,
      y: -(height)+5,
    };
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '',
    language: 'EN'
  });

  

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
    <Grid container spacing={1} >
        <Grid item xs={12} md={9} lg={9}>
          <Paper elevation={4}>
            <Box height={710} width="100%" >
              <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={16}
                center={defaultCenter}
                onClick={handleClose}
                onLoad={handleMapLoad}
              >
                {data.map((location, index) => {
                  // If we are showing covered only and this marker is not covered, don't render it
                  if (showCoveredOnly && location['Covered?'] !== "Yes") {
                    return null;
                  }
                  

                  if (selectedBuildings.length > 0 && !selectedBuildings.some(building => location.Nearest_Building_Name === building.Buildings)) {
                    return null; // If not, do not render this marker
                  }

                  // Otherwise, render the Marker as usual
                  return (
                    <Marker
                      key={index}
                      icon={ModeStandbyIcon}
                      position={{ lat: location.Latitude, lng: location.Longitude }}
                      onClick={(event) => handleMarkerClick(location, event)}
                    />
                  );
                })}
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
                        imgURL={selectedLocation['ImageURL']}
                        onSetOrigin={handleSetOrigin} // Pass the handler
                        onSetDestination={handleSetDestination} // Pass the handler
                      />
                    </div>
                  </OverlayViewF>
                )}
                {directionsResponse && (
                  <DirectionsRenderer
                    options={{ 
                      directions: directionsResponse
                    }}
                  />
                )}
              </GoogleMap>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Paper elevation={4} >
            <ControlPanel 
              origin={origin} 
              destination={destination} 
              setDelete={handleDeleteBoth} 
              onRequestDirections={handleRequestDirections} 
              onToggleCovered={setShowCoveredOnly} 
              onToggleNearTo={handleBuildingSelect}
              offToggleNearTo={handleBuildingUnselect}
            />
          </Paper>
        </Grid>
    </Grid>
  );
}

export default Map;