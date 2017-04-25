import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Navbar,
  Nav,
  NavDropdown
} from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import primaryLogo from '../images/logos/logo-xs.svg';
import secondaryLogo from '../images/logos/logo-xs2.svg';

const NavItem = ({ to, exact, children }) => (
  <Route path={to} exact={exact} children={({ match }) => (
    <li className={match ? 'active' : ''}>
      <Link to={to}>{children}</Link>
    </li>
  )}/>
);

export default class Navigation extends Component {
  state = {
    logo: primaryLogo
  };

  handlePrimaryLogo = () => this.setState({
    logo: primaryLogo
  })

  handleSecondaryLogo = () => this.setState({
    logo: secondaryLogo
  })

  render () {
    return (
      <Navbar fixedTop collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand className='logo-xs'>
            <div>
              <img
                className='index-img img-transition img-responsive'
                src={this.state.logo}
                onMouseOver={this.handleSecondaryLogo}
                onMouseOut={this.handlePrimaryLogo}
              />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem to='/' exact>Map</NavItem>
            <NavItem to='/resources'>Resources</NavItem>
            <NavItem to='/results'>Results</NavItem>
            <NavItem to='/calendar'>Calendar</NavItem>
            <NavItem to='/community'>Community</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
