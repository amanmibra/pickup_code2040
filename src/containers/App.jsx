import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Routes from '../routes';
import NavBar from '../components/NavBar';

import logo from './../images/logo.svg';
import theme from '../global/material-ui-theme';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme} >
        <NavBar />
        <Routes />
      </MuiThemeProvider>
    );
  }
}

export default App;
