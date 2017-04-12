import React from 'react';
import phillyLogo from '../images/logos/philly.jpg';

const Masthead = () => (
  <div className='masthead'>
    <div className='page-header'>
      <h1>Open Seat: <img src={phillyLogo} /></h1>
    </div>
    <p className='lead text-center'>A resource to help Philadelphians prepare to run for public office by showing available seats by district and the requirements to fill them.</p>
  </div>
);

export default Masthead;
