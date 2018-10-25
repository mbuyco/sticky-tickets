import React, { Component } from 'react';
import EventListButton from './EventListButton'

class EventList extends Component {
  render() {
    return (
      <div className="EventList" style={{ width: '30%', float: 'left' }}>
        <p>Event list here</p>
        <EventListButton />
      </div>
    );
  }
}

export default EventList;
