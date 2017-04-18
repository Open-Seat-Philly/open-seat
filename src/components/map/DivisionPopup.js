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
    <div id="popup">
     <Popup coordinates={center}>
      <button type="button" class="close" aria-label="Close" onClick={onClose}>
        <span aria-hidden="true">X</span>
      </button>
      <h5>Division (#)</h5>
      <h5>Open Seats:</h5>
        <ul>
          <div>{openSeats.map(openSeat => (
           <a href='#'>
            <li key={openSeat.id}>
             {openSeat.name}
            </li></a>
        ))}
          </div>
        </ul>
      <div>
        <h5>Resources</h5>
          <ul>
            <li><a href='#'>Requirements to Run</a></li>
            <li><a href='#'>Calendar</a></li>
            <li><a href='#'>Forms</a></li>
            <li><a href='#'>Position Duties</a></li>
          </ul>
      </div>
   </Popup>
  </div>
  );
};

DivisionPopup.propTypes = {
  openSeats: openSeatsPropType.isRequired,
  division: divisionPropType.isRequired,
  onClose: PropTypes.func.isRequired
};

export default DivisionPopup;
