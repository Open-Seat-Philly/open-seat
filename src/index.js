import './index.scss';
import logo from './images/logos/logo-xs.svg';
import logoAlt from './images/logos/logo-xs2.svg';
import 'bootstrap-sass/assets/javascripts/bootstrap';
import $ from 'jquery';
import setupMap from './js/map';

const changeLogo = (logoUrl) => (e) => (
  $(e.target).attr('src', logoUrl)
);

$(document).ready(() => {
  // Togggle the logo on hover
  $('.index-img')
    .on('mouseover', changeLogo(logoAlt))
    .on('mouseout', changeLogo(logo));

  setupMap();
});
