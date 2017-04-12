import React, { Component } from 'react';
import Filters from './map/Filters';
import MapView from './map/MapView';

const SAMPLE_DATA = [{
  id: 1,
  coordinates: [-75.1452, 39.9826],
  name: 'Judge of Elections'
}, {
  id: 2,
  coordinates: [-75.12, 39.9826],
  name: 'Machine Inspector'
}, {
  id: 3,
  coordinates: [-75.1452, 39.8826]
}];

export default class Map extends Component {
  handleFilter = (filters) => {
    alert(`Apply filters: ${JSON.stringify(filters)}`);
    console.log(filters);
  }

  render () {
    return (
      <div className='row'>
        <div className='col-xs-offset-2 col-xs-8 col-sm-offset-0 col-sm-3 col-md-3'>
          <Filters onSubmit={this.handleFilter} />
        </div>

        <div className='col-xs-offset-1 col-xs-10 col-sm-offset-0 col-sm-9 col-md-9'>
          <MapView openSeats={SAMPLE_DATA} />
        </div>
      </div>
    );
  }
}
