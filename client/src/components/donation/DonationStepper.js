import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Checkout from "./Checkout";

const styles = theme => ({
  root: {
    width: "90%"
  },
  button: {
    marginRight: theme.spacing.unit
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  content: {}
});

function getSteps() {
  return ["Enter donation amount", "Confirm donation"];
}

class DonationStepper extends Component {
  state = {
    activeStep: 0,
    amount: 1,
    confirm: false
  };

  handleNext = () => {
    // const { activeStep } = this.state;
    if (this.state.amount > 0) {
      this.setState({
        activeStep: this.state.activeStep + 1
      });
    }
    if (this.state.activeStep === 1) {
      this.handleConfirm();
    }
  };

  handleConfirm = () => {
    this.setState({
      confirm: true
    });
    this.props.handleDonation(this.state.amount);
  };

  handleCheckout = () => {
    console.log("handle checkout is called");
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleTextField = amount => event =>
    this.setState({
      [amount]: event.target.value
    });

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    let proceedButton;
    if (activeStep == 0) {
      proceedButton = (
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleNext}
          className={classes.button}
        >
          Next
        </Button>
      );
    } else if (activeStep == 1) {
      proceedButton = (
        <Checkout
          handleCheckout={this.handleCheckout}
          name={"Finalize donation"}
          description={"Enter payment details"}
          amount={this.state.amount}
        />
      );
    }

    let stepperContent;
    if (activeStep == 0) {
      if (this.state.amount < 1) {
        stepperContent = (
          <TextField
            error
            autoFocus
            margin="dense"
            label="AUD$"
            type="number"
            defaultValue={this.state.amount}
            onChange={this.handleTextField("amount")}
            required
            // fullWidth
          />
        );
      } else {
        stepperContent = (
          <TextField
            autoFocus
            margin="dense"
            label="AUD$"
            type="number"
            defaultValue={this.state.amount}
            onChange={this.handleTextField("amount")}
            required
            // fullWidth
          />
        );
      }
    } else if (activeStep == 1) {
      stepperContent = (
        <Typography>
          AUD${this.state.amount} will be donated to this donee. Click Donate to
          enter payment details.
        </Typography>
      );
    } else if (activeStep == 2) {
      stepperContent = <Typography>Thank you for your donation!</Typography>;
    }

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                Thank you for your donation!
              </Typography>
              <Button
                onClick={this.props.handleClose}
                className={classes.button}
              >
                Finish
              </Button>
            </div>
          ) : (
            <div>
              <form>{stepperContent}</form>
              <div>
                {activeStep === 1 && (
                  <Button onClick={this.handleBack} className={classes.button}>
                    Back
                  </Button>
                )}
                {proceedButton}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

DonationStepper.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(DonationStepper);
