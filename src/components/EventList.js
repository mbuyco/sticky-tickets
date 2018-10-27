import React, { Component } from 'react';
import { events } from '../data/events.json'

class EventList extends Component {
  eventList() {
    return events.map((event, index) => {
      const activeStyle = index === this.props.activeEventIndex
        ? { color: 'red', fontWeight: 'bold' }
        : {}
      return <li key={event.id} style={activeStyle}>{event.name}</li>
    })
  }

  render() {
    return (
      <div className="EventList">
        <ul>
          {this.eventList()}
        </ul>
      </div>
    );
  }
}

export default EventList;
