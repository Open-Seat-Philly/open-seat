import React, { Component } from 'react';
import { Marker } from 'react-mapbox-gl';
import PropTypes from 'prop-types';
import { openSeatPropType } from './propTypes';

export default class OpenSeatMarker extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    openSeat: openSeatPropType.isRequired
  };

  handleClick = () => {
    this.props.onClick(this.props.openSeat);
  }

  render () {
    const { openSeat } = this.props;
    const { coordinates } = openSeat;

    return (
      <Marker
        onClick={this.handleClick}
        coordinates={coordinates}
      >
        <i
          className='glyphicon glyphicon-map-marker'
          style={{color: 'white'}}
        />
      </Marker>
    );
  }
}
