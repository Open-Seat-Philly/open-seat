import PropTypes from 'prop-types';

export const openSeatPropType = PropTypes.shape({
  // A UNIQUE ID representing the specific seat
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,

  // The coordinates to place the marker on the map
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired
});

export const openSeatsPropType = PropTypes.arrayOf(openSeatPropType);
