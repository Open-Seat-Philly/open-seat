import PropTypes from 'prop-types';

export const divisionPropType = PropTypes.shape({
  properties: PropTypes.shape({
    'OBJECTID': PropTypes.number.isRequired
  }),

  geometry: PropTypes.shape({
    coordinates: PropTypes.array.isRequired
  }).isRequired
});

export const openSeatPropType = PropTypes.shape({
  // A UNIQUE ID representing the specific seat
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired
});

export const openSeatsPropType = PropTypes.arrayOf(openSeatPropType);
