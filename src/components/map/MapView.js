import React, { Component } from 'react';
import Mapbox, { Layer, Feature } from 'react-mapbox-gl';
import DivisionPopup from './DivisionPopup';
import { openSeatsPropType } from './propTypes';
import divisionData from '../../data/divisions.json';

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

  clearSelectedDivision = () => {
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
          onClick={this.clearSelectedDivision}
        >
          <Layer type='fill'>
            {divisionData.features.map(division => (
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
              onClose={this.clearSelectedDivision}
            />
          )}
        </Mapbox>
      </div>
    );
  }
}
