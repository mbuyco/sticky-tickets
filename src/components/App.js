import React, { Component } from 'react';
import EventList from './EventList'
import Map from './Map'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Events list</h1>
        </header>
        <div>
          <EventList />
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
