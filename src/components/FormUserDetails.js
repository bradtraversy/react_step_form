import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Details" />
          <TextField
            placeholder="Enter Your First Name"
            label="First Name"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            placeholder="Enter Your Last Name"
            label="Last Name"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            placeholder="Enter Your Email"
            label="Email"
            onChange={handleChange('email')}
            defaultValue={values.email}
          />
          <br />
          <Button
            color="primary"
            variant="contained"
            onClick={this.continue}
          >Continue</Button>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
