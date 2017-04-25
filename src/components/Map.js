import React, { Component } from 'react';
import Filters from './map/Filters';
import MapView from './map/MapView';
import {
  filterDivisions,
  divisionsHavingSeats
} from './map/divisions';

const INITIAL_STATE = {
  selectedDivision: null,
  divisions: divisionsHavingSeats,
  filters: {
    address: null,
    positions: []
  }
};

export default class Map extends Component {
  state = INITIAL_STATE

  handleChange = (filters) => {
    this.setState({
      filters,
      divisions: filterDivisions(
        this.state.divisions,
        filters
      )
    });
  }

  handleReset = () => {
    this.setState(INITIAL_STATE);
  }

  handleDivisionClick = ({ feature }) => {
    this.setState({ selectedDivision: feature });
  }

  handlePopupClose = () => {
    this.setState({ selectedDivision: null });
  }

  render () {
    return (
      <div className='row'>
        <div className='col-xs-offset-2 col-xs-8 col-sm-offset-0 col-sm-3 col-md-3'>
          <Filters
            filters={this.state.filters}
            onChange={this.handleChange}
            onReset={this.handleReset}
          />
        </div>

        <div className='col-xs-offset-1 col-xs-10 col-sm-offset-0 col-sm-9 col-md-9'>
          <MapView
            divisions={this.state.divisions}
            selectedDivision={this.state.selectedDivision}
            onDivisionClick={this.handleDivisionClick}
            onPopupClose={this.handlePopupClose}
          />
        </div>
      </div>
    );
  }
}
