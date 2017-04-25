import geolib from 'geolib';

const fromTuple = ([latitude, longitude]) => ({
  latitude,
  longitude
});

const toTuple = ({ latitude, longitude }) => [
  latitude,
  longitude
];

export const getCenter = (coordinates) => (
  toTuple(geolib.getCenter(coordinates.map(fromTuple)))
);

export const isPointInside = (point, coordinates) => (
  geolib.isPointInside(fromTuple(point), coordinates.map(fromTuple))
);
