import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Autocomplete from 'react-autocomplete';
import debounce from 'debounce-promise';
import url from 'url';

const PROTOCOL = 'https';
const HOST = 'api.tiles.mapbox.com';
const PREFIX = '/geocoding/v5/mapbox.places';

const getItemValue = (v) => v.place_name;

const renderItem = (v, isHighlighted) => (
  <div className={`geocoder-suggestion ${isHighlighted && 'active'}`}>
    {v.place_name}
  </div>
);

const search = (term) => {
  const searchUrl = url.format({
    protocol: PROTOCOL,
    host: HOST,
    pathname: `${PREFIX}/${encodeURIComponent(term)}.json`,
    query: {
      access_token: process.env.MAPBOX_TOKEN
    }
  });

  return fetch(searchUrl).then(res => res.json());
};

const searchIntermittently = debounce(search, 300);

const MENU_STYLE = {
  borderRadius: '3px',
  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
  background: 'rgba(255, 255, 255, 0.9)',
  padding: '2px 0',
  fontSize: '90%',
  position: 'fixed',
  overflow: 'auto',
  maxHeight: '50%',
  zIndex: '999'
};

const WRAPPER_STYLE = {
  display: 'inline-block',
  width: '100%'
};

const INPUT_PROPS = {
  className: 'form-control',
  placeholder: 'Address'
};

export default class Geocoder extends Component {
  static propTypes = {
    onSelect: PropTypes.func.isRequired
  };

  state = {
    value: '',
    items: []
  };

  handleSelect = (_text, address) => {
    this.setState({
      value: address.place_name
    });

    this.props.onSelect(address);
  }

  handleChange = (event) => {
    const { value } = event.target;

    this.setState({ value });

    if (value.length > 3) {
      searchIntermittently(value).then(data => {
        this.setState({ items: data.features });
      });
    }
  }

  render () {
    return (
      <Autocomplete
        items={this.state.items}
        getItemValue={getItemValue}
        renderItem={renderItem}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        value={this.state.value}
        inputProps={INPUT_PROPS}
        wrapperStyle={WRAPPER_STYLE}
        menuStyle={MENU_STYLE}
      />
    );
  }
}
