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
  id: PropTypes.number.isRequired,
  division: PropTypes.string.isRequired,
  ward: PropTypes.string.isRequired,
  office: PropTypes.string.isRequired
});

export const openSeatsPropType = PropTypes.arrayOf(openSeatPropType);
