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
            <DonationStepper
              handleClose={this.props.handleDonate}
              handleDonation={this.props.handleDonation}
            />
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default DonationDialog;
