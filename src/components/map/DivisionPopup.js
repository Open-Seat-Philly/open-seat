import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'react-mapbox-gl';
import { getCenter } from './geometry';
import {
  divisionPropType,
  openSeatsPropType
} from './propTypes';

const DivisionPopup = ({ division, center, openSeats, onClose }) => (
  <div className="popup">
    <Popup coordinates={center || getCenter(division.geometry.coordinates[0])}>
      <button type="button" className="close" aria-label="Close" onClick={onClose}>
        <span aria-hidden="true">X</span>
      </button>
      <h5>Division {division.properties.DIVISION_NUM}</h5>
      <h5>Open Seats:</h5>
      <ul>
        {openSeats.map(seat => (
          <a href='#' key={seat.id}>
            <li>
              {seat.office}
            </li>
          </a>
        ))}
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

DivisionPopup.propTypes = {
  openSeats: openSeatsPropType.isRequired,
  division: divisionPropType.isRequired,
  onClose: PropTypes.func.isRequired
};

export default DivisionPopup;
