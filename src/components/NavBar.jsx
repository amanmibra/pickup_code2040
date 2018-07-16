import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

import MapsDirectionsRun from 'material-ui/svg-icons/maps/directions-run'

export default class NavBar extends Component {
  render () {
    return (
      <div>
        <AppBar
          title="Pickup"
          iconElementLeft={<IconButton>
            <MapsDirectionsRun />
          </IconButton>}
        />
      </div>
    );
  }
}
