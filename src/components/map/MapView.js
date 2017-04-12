import React, { Component } from 'react';
import Mapbox, { Layer } from 'react-mapbox-gl';
import OpenSeatMarker from './OpenSeatMarker';
import OpenSeatPopup from './OpenSeatPopup';
import { openSeatsPropType } from './propTypes';
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
  static propTypes = {
    openSeats: openSeatsPropType.isRequired
  };

  state = {
    selectedOpenSeat: null
  };

  handleMarkerClick = (openSeat) => {
    this.setState({ selectedOpenSeat: openSeat });
  }

  handlePopupClose = () => {
    this.setState({ selectedOpenSeat: null });
  }

  render () {
    const { openSeats } = this.props;
    const { selectedOpenSeat } = this.state;

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

          {openSeats.map(openSeat => (
            <OpenSeatMarker
              key={openSeat.id}
              onClick={this.handleMarkerClick}
              openSeat={openSeat}
            />
          ))}

          {selectedOpenSeat && (
            <OpenSeatPopup
              openSeat={selectedOpenSeat}
              onClose={this.handlePopupClose}
            />
          )}
        </Mapbox>
      </div>
    );
  }
}
