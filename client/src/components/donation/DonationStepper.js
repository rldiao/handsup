import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

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
  return ["Select campaign settings", "Create an ad group", "Create an ad"];
}

function getStepInstructions(step) {
  switch (step) {
    case 0:
      return "Enter an amount for your donation";
    case 1:
      return "Confirm your donation";
    case 2:
      return "hullo";
    default:
      return "Unknown step";
  }
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "Enter an amount for your donation.";
    case 1:
      return "Confirm your donation";
    case 2:
      return "hullo";
    default:
      return "Unknown step";
  }
}

class DonationStepper extends Component {
  state = {
    activeStep: 0,
    amount: 0
  };

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep + 1
    });
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  handleTextField = amount => event =>
    this.setState({
      [amount]: event.target.value
    });

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
    let stepperContent;
    if (activeStep == 0) {
      stepperContent = (
        <TextField
          autoFocus
          margin="dense"
          label="AUD$"
          type="number"
          defaultValue={this.state.amount}
          onChange={this.handleTextField("amount")}
          // fullWidth
        />
      );
    } else if (activeStep == 1) {
      stepperContent = (
        <Typography>
          AUD${this.state.amount} will be donated to this donee.
        </Typography>
      );
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
                // onClick={this.handleReset}
                className={classes.button}
              >
                Finish
              </Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepInstructions(activeStep)}
              </Typography>
              <form>{stepperContent}</form>
              <div>
                {activeStep === 1 && (
                  <Button onClick={this.handleBack} className={classes.button}>
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
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
