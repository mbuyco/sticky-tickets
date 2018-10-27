import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const { REACT_APP_GOOGLE_API_KEY } = process.env

class Map extends Component {
  render() {
    const MapMarker = () => <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" color="red" />

    return (
      <div className="Map" style={{ float: 'right', width: '75%', height: '100vh' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: REACT_APP_GOOGLE_API_KEY }}
          defaultCenter={this.props.defaultCenter}
          center={this.props.center}
          zoom={this.props.zoom}
        >
          <MapMarker lat={this.props.lat} lng={this.props.lng} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
