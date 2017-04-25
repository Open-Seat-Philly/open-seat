import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Mapbox, { Layer, Feature } from 'react-mapbox-gl';
import DivisionPopup from './DivisionPopup';
import { openSeatsPropType } from './propTypes';
import divisionData, { getDivisionOpenSeats } from './divisions';

export default class MapView extends Component {
  static propTypes = {
    zoom: PropTypes.array.isRequired,
    center: PropTypes.array.isRequired,
    onDivisionClick: PropTypes.func.isRequired,
    onPopupClose: PropTypes.func.isRequired,
    divisions: PropTypes.array.isRequired,
    selectedDivision: PropTypes.object
  };

  render () {
    const {
      selectedDivision,
      zoom,
      center,
      popupCenter,
      divisions,
      onDivisionClick,
      onPopupClose
    } = this.props;

    return (
      <div className='map-view'>
        <Mapbox
          zoom={zoom}
          center={center}
          style='mapbox://styles/mapbox/dark-v9'
          accessToken={process.env.MAPBOX_TOKEN}
        >

          {/*divisions layer outlines every division*/}
          <Layer
            id='allDivisions'
            type='line'
            sourceId='divisions'
            layerOptions={{
              source: {
                type: 'geojson',
                data: divisionData
              }
            }}
            paint={{'line-width':.5}}
          />

          {/*seats layer colors in districts with uncontested seats*/}
          <Layer
            id='seats'
            type='fill'
            paint={{
              "fill-color":"rgba(32, 149, 252, .9)",
              "fill-opacity":.25
            }}
          >
            {divisions.map(division => (
              <Feature
                key={division.properties['OBJECTID']}
                onClick={onDivisionClick}
                coordinates={division.geometry.coordinates}
                properties={division.properties}
              />
            ))}
          </Layer>

          {selectedDivision && (
            <DivisionPopup
              center={popupCenter}
              division={selectedDivision}
              openSeats={getDivisionOpenSeats(selectedDivision)}
              onClose={onPopupClose}
            />
          )}
        </Mapbox>
      </div>
    );
  }
}
