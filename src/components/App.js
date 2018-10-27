import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import EventList from './EventList'
import Map from './Map'
import { events } from '../data/events.json'
import geocode from '../utils/geocode'

class App extends Component {
  static defaultProps = {
    defaultCenter: { lat: 0, lng: 0 }
  }

  constructor(props) {
    super(props)
    this._setInitialState()
    this.nextEventClick = this.nextEventClick.bind(this)
  }

  componentDidMount() {
    this._renderMap()
  }

  nextEventClick() {
    const index = this.state.activeEventIndex > events.length - 1
      ? 0
      : this.state.activeEventIndex + 1

    new Promise((resolve) => {
      resolve(this.setState({ activeEventIndex: index }))
    })
      .then(() => this._renderMap())
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Events list</h1>
        </header>
        <div>
          <div style={{ float: 'left', width: '20%' }}>
            <Button primary onClick={this.nextEventClick}>Go to next event</Button>
            <EventList
              activeEventIndex={this.state.activeEventIndex}
              renderMap={this._renderMap}
            />
          </div>
          <Map
            defaultCenter={this.state.defaultCenter}
            center={this.state.center}
            zoom={this.state.zoom}
            lat={this.state.lat}
            lng={this.state.lng}
          />
        </div>
      </div>
    );
  }

  _setInitialState() {
    this.state = {
      center: this.props.center,
      zoom: 14,
      activeEventIndex: 0
    }
  }

  _renderMap() {
    const { activeEventIndex } = this.state
    const location = `${events[activeEventIndex].venue}, ${events[activeEventIndex].suburb}`
    console.log(location)

    return geocode(location)
      .then(result => {
        const { location } = result.geometry
        const { lat, lng } = location
        this.setState({
          center: [lat, lng],
          lat,
          lng
        })
      })
  }
}

export default App;
