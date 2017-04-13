import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'react-mapbox-gl';
import geolib from 'geolib';
import {
  divisionPropType,
  openSeatsPropType
} from './propTypes';

const fromTuple = ([latitude, longitude]) => ({
  latitude,
  longitude
});

const toTuple = ({ latitude, longitude }) => [
  latitude,
  longitude
];

const getCenterOfDivision = (coordinates) => (
  toTuple(geolib.getCenter(coordinates.map(fromTuple)))
);

const DivisionPopup = ({ division, openSeats, onClose }) => {
  const center = getCenterOfDivision(
    division.geometry.coordinates[0]
  );

  return (
    <Popup coordinates={center}>
      <h5>I am a popup</h5>
      {openSeats.map(openSeat => (
         <span key={openSeat.id}>
           {openSeat.name}
         </span>
      ))}

      <button onClick={onClose}>
        Close
      </button>
    </Popup>
  );
};

DivisionPopup.propTypes = {
  openSeats: openSeatsPropType.isRequired,
  division: divisionPropType.isRequired,
  onClose: PropTypes.func.isRequired
};

export default DivisionPopup;
