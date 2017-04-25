import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from 'react-bootstrap/lib/Panel';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Geocoder from '../Geocoder';

// This is a hack for react-bootstrap's desire to clone
// elements with new props.
const PanelGroupHeader = ({ title }) => (
  <h3>{title}</h3>
);

const PositionCheckbox = ({ selected, value, ...props }) => (
  <ListGroupItem className='checkbox'>
    <label>
      <input
        type='checkbox'
        name='positions[]'
        checked={selected.indexOf(value) > -1}
        value={value}
        {...props}
      />{value}
    </label>
  </ListGroupItem>
);

export default class Filters extends Component {
  static propTypes = {
    onReset: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    filters: PropTypes.shape({
      positions: PropTypes.array.isRequired,
      address: PropTypes.object
    }).isRequired
  };

  state = {
    activeKey: null
  };

  handleAccordion = (key) => {
    if (key === this.state.activeKey) {
      this.setState({ activeKey: null });
    } else {
      this.setState({ activeKey: key });
    }
  }

  handlePositionChange = (event) => {
    const { filters } = this.props;
    const { positions } = filters;
    const { value } = event.target;

    const nextPositions = positions.indexOf(value) > -1
      ? positions.filter(v => v !== value)
      : [...positions, value]

    this.props.onChange({
      ...filters,
      positions: nextPositions
    });
  }

  /*
   * This function will be called when an address is selected from
   * the Geocoder. The first argument will be the text that the user
   * put in the text box. The second will be an item from the array
   * of features documented here:
   *   https://www.mapbox.com/api-documentation/#response-format
   */
  handleAddressChange = (address) => {
    this.props.onChange({
      ...this.props.filters,
      address
    });
  }

  render () {
    const { positions } = this.props.filters;

    return (
      <div className='filters'>
        <h3>Find a seat</h3>

        <PanelGroup
          accordion
          activeKey={this.state.activeKey}
          onSelect={this.handleAccordion}
        >
          <Panel header='Elected seats' eventKey='elected'>
            <ListGroup fill>
              <PositionCheckbox
                value='Judge of Elections'
                selected={positions}
                onChange={this.handlePositionChange}
              />
              <PositionCheckbox
                value='Majority Inspector'
                selected={positions}
                onChange={this.handlePositionChange}
              />
              <PositionCheckbox
                value='Minority Inspector'
                selected={positions}
                onChange={this.handlePositionChange}
              />
            </ListGroup>
          </Panel>

          <Panel header='Appointed seats' eventKey='appointed'>
            <ListGroup fill>
              <PositionCheckbox
                value='Machine Inspector'
                selected={positions}
                onChange={this.handlePositionChange}
              />
              <PositionCheckbox
                value='Clerk'
                selected={positions}
                onChange={this.handlePositionChange}
              />
              <PositionCheckbox
                value='Bilingual Interpreter'
                selected={positions}
                onChange={this.handlePositionChange}
              />
            </ListGroup>
          </Panel>
        </PanelGroup>

        <h3>Find your district</h3>

        <div className='filter-section'>
          <Geocoder
            onSelect={this.handleAddressChange}
          />
        </div>

        <div className='filter-section'>
          <button onClick={this.props.onReset} className='btn btn-default btn-round'>
            reset
          </button>
        </div>
      </div>
    );
  }
}
