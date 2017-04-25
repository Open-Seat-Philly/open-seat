import React, { Component } from 'react';
import Filters from './map/Filters';
import MapView from './map/MapView';
import {
  filterDivisions,
  divisionsHavingSeats
} from './map/divisions';

const SMALL_ZOOM = [10];
const MEDIUM_ZOOM = [12];
const LARGE_ZOOM = [13];

const DEFAULT_CENTER = [-75.1452, 39.9826];

const INITIAL_STATE = {
  selectedDivision: null,
  divisions: divisionsHavingSeats,
  popupCenter: null,
  filters: {
    address: null,
    positions: []
  }
};

const getZoom = ({ filters, selectedDivision, divisions }) => {
  if (filters.address && divisions.length) {
    return LARGE_ZOOM;
  }

  if (selectedDivision) {
    return MEDIUM_ZOOM;
  }

  return SMALL_ZOOM;
}

export default class Map extends Component {
  state = INITIAL_STATE

  handleChange = (filters) => {
    const divisions = filterDivisions(
      this.state.divisions,
      filters
    );

    // If we've found results for an address, zoom in
    let popupCenter;
    if (divisions.length && filters.address) {
      popupCenter = filters.address.center;
    }

    this.setState({
      filters,
      divisions,
      popupCenter,
      selectedDivision: divisions[0]
    });
  }

  handleReset = () => {
    this.setState(INITIAL_STATE);
  }

  handleDivisionClick = ({ feature, lngLat }) => {
    this.setState({
      selectedDivision: feature,
      popupCenter: [lngLat.lng, lngLat.lat]
    });
  }

  handlePopupClose = () => {
    this.setState({ selectedDivision: null });
  }

  render () {
    const {
      filters,
      selectedDivision,
      divisions,
      popupCenter
    } = this.state;

    return (
      <div className='row'>
        <div className='col-xs-offset-2 col-xs-8 col-sm-offset-0 col-sm-3 col-md-3'>
          <Filters
            filters={filters}
            onChange={this.handleChange}
            onReset={this.handleReset}
          />
        </div>

        <div className='col-xs-offset-1 col-xs-10 col-sm-offset-0 col-sm-9 col-md-9'>
          <MapView
            zoom={getZoom(this.state)}
            center={popupCenter || DEFAULT_CENTER}
            popupCenter={popupCenter}
            divisions={divisions}
            selectedDivision={selectedDivision}
            onDivisionClick={this.handleDivisionClick}
            onPopupClose={this.handlePopupClose}
          />
        </div>
      </div>
    );
  }
}
