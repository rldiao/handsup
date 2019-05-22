import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DonationStepper from "./DonationStepper";

class DonationDialog extends Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.props.handleDonate}
          onClose={this.props.handleDonate}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Make a donation!</DialogTitle>
          <DialogContent>
            <DonationStepper />
            {/* <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText> */}
            {/* <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            /> */}
          </DialogContent>
          {/* <DialogActions>
            <Button onClick={this.props.handleDonate} color="primary">
              Cancel
            </Button>
            <Button onClick={this.props.handleDonate} color="primary">
              Subscribe
            </Button>
          </DialogActions> */}
        </Dialog>
      </div>
    );
  }
}

export default DonationDialog;
