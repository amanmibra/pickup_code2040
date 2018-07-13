import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Card } from 'material-ui/Card';

export default class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      dialog: this.props.dialog,
      stepIndex: 0,
      price: "",
      currency: "",
      amount: ""
    }
  }
  
  handleClick() {
    window.location = '/home';
  }

  render () {
    return (
      <Card className="login-card">
        <div className="login-box">
          <TextField
            hintText=""
            floatingLabelText="Username"
          /><br />
          <TextField
            hintText=""
            floatingLabelText="Password"
            type="password"
          /><br /> <br />
          <RaisedButton label="Sign in" primary={true} onClick={this.handleClick.bind(this)}/>
        </div>
      </Card>
    );
  }

}
