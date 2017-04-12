import React from 'react';
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
}];

const Map = () => (
  <div className='row'>
    <div className='col-xs-offset-2 col-xs-8 col-sm-offset-0 col-sm-3 col-md-3'>
      <Filters />
    </div>

    <div className='col-xs-offset-1 col-xs-10 col-sm-offset-0 col-sm-9 col-md-9'>
      <MapView openSeats={SAMPLE_DATA} />
    </div>
  </div>
);

export default Map;
