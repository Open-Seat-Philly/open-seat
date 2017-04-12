import { render } from 'react-dom';
import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Masthead from './components/Masthead';
import Map from './components/Map';
import './index.scss';

const App = () => (
  <div>
    <Navigation />
    <Masthead />
    <Map />
    <Footer />
  </div>
);

document.addEventListener('DOMContentLoaded', () => (
  render(<App/>, document.getElementById('root'))
));
