import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'react-mapbox-gl';
import { openSeatPropType } from './propTypes';

const OpenSeatPopup = ({ openSeat, onClose }) => {
  const { id, name, coordinates } = openSeat;

  return (
    <Popup coordinates={coordinates}>
      <h5>Position #{id}</h5>
      <p>{name}</p>
      <p>
        <button onClick={onClose}>Close</button>
      </p>
    </Popup>
  );
};

OpenSeatPopup.propTypes = {
  openSeat: openSeatPropType.isRequired,
  onClose: PropTypes.func.isRequired
};

export default OpenSeatPopup;
