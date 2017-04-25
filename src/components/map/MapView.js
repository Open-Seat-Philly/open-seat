import React, { Component } from 'react';
import Mapbox, { Layer, Feature } from 'react-mapbox-gl';
import DivisionPopup from './DivisionPopup';
import { openSeatsPropType } from './propTypes';
import divisionData from '../../data/divisions.json';
import divisionsHavingSeats from './divisionsHavingSeats';

const ZOOM = 10;
const CENTER = [-75.1452, 39.9826];

// TODO: This function should return only the open
// seats in the specified division.
const getOpenSeats = (division, openSeats) => {
  return openSeats;
};

const INITIAL_STATE = {
  selectedDivision: null,
  selectedDivisionSeats: null
};

export default class MapView extends Component {
  static propTypes = {
    openSeats: openSeatsPropType.isRequired
  };

  state = INITIAL_STATE;

  handleDivisionClick = ({ feature }) => {
    const seats = getOpenSeats(
      feature,
      this.props.openSeats
    );

    this.setState({
      selectedDivision: feature,
      selectedDivisionSeats: seats
    });
  }

  handlePopupClose = () => {
    this.setState(INITIAL_STATE);
  }

  render () {
    const { openSeats } = this.props;
    const { selectedDivision, selectedDivisionSeats } = this.state;


    return (
      <div className='map-view'>
        <Mapbox
          zoom={[ZOOM]}
          center={CENTER}
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
            {divisionsHavingSeats.map(division => (
              <Feature
                key={division.properties['OBJECTID']}
                onClick={this.handleDivisionClick}
                coordinates={division.geometry.coordinates}
                properties={division.properties}
              />
            ))}
          </Layer>

          {selectedDivision && (
            <DivisionPopup
              division={selectedDivision}
              openSeats={selectedDivisionSeats}
              onClose={this.handlePopupClose}
            />
          )}
        </Mapbox>
      </div>
    );


  }
}