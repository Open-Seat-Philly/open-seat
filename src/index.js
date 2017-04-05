import './index.scss';
import logo from './images/logos/logo-xs.svg';
import logoAlt from './images/logos/logo-xs2.svg';
import $ from 'jquery';
import 'bootstrap-sass/assets/javascripts/bootstrap';
import mapboxgl, { Map } from 'mapbox-gl';
import 'mapbox.js';

mapboxgl.accessToken = process.env.MAPBOX_TOKEN;

const changeLogo = (logoUrl) => (e) => (
  $(e.target).attr('src', logoUrl)
);

$(document).ready(() => {
  // Collapse the collapses by default
  $('#collapseOne, #collapseTwo').collapse('hide');

  // Togggle the logo on hover
  $('.index-img')
    .on('mouseover', changeLogo(logoAlt))
    .on('mouseout', changeLogo(logo));

  // Setup the map
  const map = new Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/dark-v9', //stylesheet location
    center: [-75.1452, 39.9826], // Philadelphia starting position
    zoom: 10 // starting zoom
  });
});
