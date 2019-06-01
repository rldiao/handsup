import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { StripeProvider, Elements } from "react-stripe-elements";
import STRIPE_PUBLISHABLE from "../../constants/stripe";
import Form from "./Form";
import Typography from "@material-ui/core/Typography";
import styles from "./donationDialog.module.css";
import { styles as custom } from "./form.style";

class DonationDialog extends Component {
  state = {
    open: false,
    fullWidth: true,
    maxWidth: "md",
    donationJustMade: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleDonationMade = () => {
    this.setState({
      donationJustMade: !this.state.donationJustMade
    });
  };

  render() {
    let dialogContent;
    let maxWidth = this.state.maxWidth;
    if (this.state.donationJustMade) {
      dialogContent = (
        <Fragment>
          <div className={styles.container}>
            <Typography variant="h2">Thank you for your donation!</Typography>
            <Typography variant="caption">p.s. you're amazing!</Typography>
            <Button
              style={custom.closeBtn}
              variant="outlined"
              onClick={this.props.handleDonate}
            >
              Close
            </Button>
          </div>
        </Fragment>
      );
      maxWidth = "sm";
    } else {
      dialogContent = (
        <Fragment>
          <DialogTitle id="form-dialog-title">Make a donation!</DialogTitle>
          <StripeProvider apiKey={STRIPE_PUBLISHABLE}>
            <Elements>
              <Form
                donee={this.props.donee}
                handleDonation={this.props.handleDonation}
                handleDonationMade={this.handleDonationMade}
              />
            </Elements>
          </StripeProvider>
        </Fragment>
      );
    }

    return (
      <div>
        <Dialog
          open={this.props.handleDonate}
          onClose={this.props.handleDonate}
          aria-labelledby="form-dialog-title"
          fullWidth={this.state.fullWidth}
          maxWidth={maxWidth}
        >
          {dialogContent}
        </Dialog>
      </div>
    );
  }
}

export default DonationDialog;
