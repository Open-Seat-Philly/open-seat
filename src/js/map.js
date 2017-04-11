import mapboxgl, { Map } from 'mapbox-gl';
import divisionData from '../data/divisions.json';

mapboxgl.accessToken = process.env.MAPBOX_TOKEN;

export default () => {
  const map = new Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/dark-v9', //stylesheet location
    center: [-75.1452, 39.9826], // Philadelphia starting position
    zoom: 10 // starting zoom
  });

  map.on('load', () => {
    map.addLayer({
      id: 'divisions',
      type: 'line',
      source: {
        type: 'geojson',
        data: divisionData
      }
    });
  });
};
