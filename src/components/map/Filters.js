import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

// This is a hack for react-bootstrap's desire to clone
// elements with new props.
const PanelGroupHeader = ({ title }) => (
  <h3>{title}</h3>
);

export default class Filters extends Component {
  state = {
    activeKey: null
  };

  handleSelect = (key) => {
    if (key === this.state.activeKey) {
      this.setState({ activeKey: null });
    } else {
      this.setState({ activeKey: key });
    }
  }

  render () {
    return (
      <div className='filters'>
        <h3>Find a seat</h3>

        <PanelGroup
          accordion
          activeKey={this.state.activeKey}
          onSelect={this.handleSelect}
        >
          <Panel header='Elected seats' eventKey='elected'>
            <ListGroup fill>
              <ListGroupItem className='checkbox'>
                <label><input type="checkbox" />Judge of Elections</label>
              </ListGroupItem>
              <ListGroupItem className='checkbox'>
                <label><input type="checkbox" />Majority Inspector</label>
              </ListGroupItem>
              <ListGroupItem className='checkbox'>
                <label><input type="checkbox" />Minority Inspector</label>
              </ListGroupItem>
            </ListGroup>
          </Panel>

          <Panel header='Appointed seats' eventKey='appointed'>
            <ListGroup fill>
              <ListGroupItem className='checkbox'>
                <label><input type='checkbox' />Machine Inspector</label>
              </ListGroupItem>
              <ListGroupItem className='checkbox'>
                <label><input type='checkbox' />Clerk</label>
              </ListGroupItem>
              <ListGroupItem className='checkbox'>
                <label><input type='checkbox' />Bilingual Interpreter</label>
              </ListGroupItem>
            </ListGroup>
          </Panel>
        </PanelGroup>

        <h3>Find your district</h3>

        <p className='filter-section'>
          <input type='search' placeholder='address' className='form-control' />
        </p>

        <p className='filter-section'>
          <button className='btn btn-default btn-round'>search</button>
        </p>
      </div>
    );
  }
}
