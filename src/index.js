import { render } from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import MapPage from './pages/MapPage';
import ResourcesPage from './pages/ResourcesPage';
import ResultsPage from './pages/ResultsPage';
import CalendarPage from './pages/CalendarPage';
import CommunityPage from './pages/CommunityPage';
import './index.scss';

const App = () => (
  <Router>
    <div>
      <Navigation />

      <div className='container main'>
        <Route exact path='/' component={MapPage} />
        <Route path='/resources' component={ResourcesPage} />
        <Route path='/results' component={ResultsPage} />
        <Route path='/calendar' component={CalendarPage} />
        <Route path='/community' component={CommunityPage} />
      </div>

      <Footer />
    </div>
  </Router>
);

document.addEventListener('DOMContentLoaded', () => (
  render(<App/>, document.getElementById('root'))
));
