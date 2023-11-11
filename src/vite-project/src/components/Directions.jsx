
import React, { Component } from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, DirectionsRenderer } from 'react-google-maps';
import { Container } from '@mui/material';

class DirectionsPage extends Component {
  state = {
    directions: null,
  };

  componentDidMount() {
    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: 'Your Starting Address',
        destination: 'Your Destination Address',
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        }
      }
    );
  }

  render() {
    const MapWithADirectionsRenderer = withScriptjs(
      withGoogleMap(() => (
        <GoogleMap defaultZoom={10}>
          {this.state.directions && <DirectionsRenderer directions={this.state.directions} />}
        </GoogleMap>
      ))
    );

    return (
      <Container maxWidth="lg">
        <MapWithADirectionsRenderer
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '400px' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </Container>
    );
  }
}

export default DirectionsPage;
