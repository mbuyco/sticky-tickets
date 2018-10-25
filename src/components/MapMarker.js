import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import request from 'request-promise'
import { events } from '../data/events.json'

const { GOOGLE_API_KEY } = require('../config').env

class MapMarker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: 0,
      lng: 0
    }
  }

  componentDidMount() {
    this._initMap()
  }

  _initMap() {
    if (!events.length)
      return

    const uri = `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${GOOGLE_API_KEY}`
    const options = {
      json: true,
      uri
    }

    request(options)
      .then(res => {
        if (!res.results || !res.results.length)
          return

        const result = res.results[0]
        const { location } = result.geometry
        const { lat, lng } = location
        this.setState({ lat, lng })
      })
      .catch(error => {
        console.log('err --', error)
      })
  }

  render() {
    return (
      <div className="MapMarker" lat={this.state.lat} lng={this.state.lng}>
      </div>
    )
  }
}

export default MapMarker
