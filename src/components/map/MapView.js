import React, { Component } from 'react';
import Mapbox, { Layer } from 'react-mapbox-gl';
import divisionData from '../../data/divisions.json';

const ZOOM = 10;
const CENTER = [-75.1452, 39.9826];
const LAYER_OPTIONS = {
  source: {
    type: 'geojson',
    data: divisionData
  }
};
export default class MapView extends Component {
  render () {
    return (
      <div className='map-view'>
        <Mapbox
          zoom={[ZOOM]}
          center={CENTER}
          style='mapbox://styles/mapbox/dark-v9'
          accessToken={process.env.MAPBOX_TOKEN}
        >
          <Layer
            type='line'
            sourceId='divisions'
            layerOptions={LAYER_OPTIONS}
          />
        </Mapbox>
      </div>
    );
  }
}
