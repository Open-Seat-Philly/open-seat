import React from 'react';
import { Feature } from 'react-mapbox-gl';
import { openSeatPropType } from './propTypes';

const OpenSeatMarker = ({ id, coordinates }) => (
  <Feature coordinates={coordintates} />
);

OpenSeatMarker.propTypes = openSeatPropType.isRequired;

export default OpenSeatMarker;
