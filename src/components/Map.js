import React from 'react';
import Filters from './map/Filters';

const Map = () => (
  <div className='row'>
    <div className='col-xs-offset-2 col-xs-8 col-sm-offset-0 col-sm-3 col-md-3'>
      <Filters />
    </div>

    <div className='col-xs-offset-1 col-xs-10 col-sm-offset-0 col-sm-9 col-md-9'>
      <h1>I'm a map</h1>
    </div>
  </div>
);

export default Map;
