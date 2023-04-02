import React, { Component } from 'react';
import { GoogleMap, Marker } from 'google-maps-react';

class MapContainer extends Component {
  render() {
    return (
      <GoogleMap
        google={this.props.google}
        zoom={14}
        initialCenter={{ lat: 37.7749, lng: -122.4194 }}
      >
        <Marker
          position={{ lat: 37.7749, lng: -122.4194 }}
        />
      </GoogleMap>
    );
  }
}

export default MapContainer;