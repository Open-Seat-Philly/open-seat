import PropTypes from 'prop-types';

export const openSeatPropType = {
  // A UNIQUE ID representing the specific seat
  id: PropTypes.isRequired,

  // The coordinates to place the marker on the map
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired
};

export const openSeatsPropType = PropTypes.arrayOf(
  PropTypes.shape(openSeatPropType)
);
