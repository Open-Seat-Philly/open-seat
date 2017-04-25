import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Autocomplete from 'react-autocomplete';
import debounce from 'debounce-promise';
import url from 'url';

const PROTOCOL = 'https';
const HOST = 'api.tiles.mapbox.com';
const PREFIX = '/geocoding/v5/mapbox.places';

const getItemValue = (v) => v.place_name;

const renderItem = (v) => (
  <div className='geocoder-suggestion'>
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

export default class Geocoder extends Component {
  static propTypes = {
    onSelect: PropTypes.func.isRequired
  };

  state = {
    value: '',
    items: []
  };

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
        onSelect={this.props.onSelect}
        value={this.state.value}
        inputProps={{className: 'form-control'}}
        wrapperStyle={{
          display: 'inline-block',
          width: '100%'
        }}
      />
    );
  }
}
