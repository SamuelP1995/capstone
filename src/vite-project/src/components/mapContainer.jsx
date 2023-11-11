import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function MapContainer() {
  const containerStyle = {
    width: '400px',
    height: '300px',
  };

  const center = {
    lat: 37.7749, // Replace with the desired latitude
    lng: -122.4194, // Replace with the desired longitude
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Add a Marker */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapContainer;
