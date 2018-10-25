import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react'
import MapMarker from './MapMarker.js'

const { GOOGLE_API_KEY } = require('../config').env

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  }

  constructor(props) {
    super(props)
    this.state = {
      activeMarker: null
    }
  }

  render() {
    return (
      <div className="Map" style={{ height: '100vh', width: '70%', float: 'right' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
        <MapMarker />
      </div>
    );
  }
}

export default Map;
