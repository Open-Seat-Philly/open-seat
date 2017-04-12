import React, { Component } from 'react';
import primaryLogo from '../images/logos/logo-xs.svg';
import secondaryLogo from '../images/logos/logo-xs2.svg';

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
      <nav className="navbar navbar-default navbar-fixed-top nav-style">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed button-color" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand logo-xs" href="#">
              <img
                className="index-img img-transition img-responsive"
                src={this.state.logo}
                onMouseOver={this.handleSecondaryLogo}
                onMouseOut={this.handlePrimaryLogo}
              />
            </a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav nav-tabs pull-right tab-height tab-color">
              <li role="presentation" className="active"><a href="#">Map</a></li>
              <li role="presentation"><a href="#">Resources</a></li>
              <li role="presentation"><a href="#">Results</a></li>
              <li role="presentation"><a href="#">Calendar</a></li>
              <li role="presentation"><a href="#">Community</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
