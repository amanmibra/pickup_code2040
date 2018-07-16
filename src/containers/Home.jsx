import React, { Component } from 'react';

import SearchBar from 'material-ui-search-bar'
import Feed from '../components/Feed';

import logo from './../images/logo.svg';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar
          onChange={() => console.log('onChange')}
          onRequestSearch={() => console.log('onRequestSearch')}
          style={{
            margin: '0 auto',
            maxWidth: 800
          }}
        />

      <Feed />
      </div>
    );
  }
}

export default Home;
