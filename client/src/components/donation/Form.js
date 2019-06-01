import React, { Component } from "react";
import {
  CardElement,
  injectStripe,
  ReactStripeElements
} from "react-stripe-elements";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "./form.module.css";
import Axios from "axios";
import AuthService from "../../services/AuthService";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { styles as custom } from "./form.style";

// const styles = theme => ({
//   container: {
//     display: "grid",
//     gridTemplateColumns: "repeat(12, 1fr)",
//     gridGap: "5px"
//   }
// });

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: ""
    };
  }

  handleTextField = name => event => {
    this.setState({
      [name]: event.target.value
    });
    console.log("hello there");
  };

  handleConfirm = async e => {
    // Stripe API
    try {
      let { token } = await this.props.stripe.createToken({
        name: this.state.name
      });
      let amount = this.state.amount;
      await fetch("/donation/newstripe", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ token, amount })
      });

      const dt = new Date();
      const date =
        monthNames[dt.getMonth()] +
        " " +
        dt.getDate() +
        ", " +
        dt.getFullYear() +
        " " +
        dt.getHours() +
        ":" +
        dt.getMinutes() +
        ":" +
        dt.getSeconds();

      // Mongo backend API
      await Axios.post("/donation/new", {
        donee: this.props.donee._id,
        amount: this.state.amount,
        donor: AuthService.getProfile().id,
        "transaction-date": date
      });

      // Add donation to donee's backend
      this.props.handleDonation(this.state.amount);

      this.props.handleDonationMade();
      //redirect, clear inputs, thank alert
    } catch (e) {
      throw e;
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.gridItem}>
          <Grid item xs={12}>
            <TextField
              id="outlined-name"
              label="Amount"
              type="number"
              className={styles.textField}
              // value={values.name}
              onChange={e => this.setState({ amount: e.target.value })}
              margin="normal"
              variant="outlined"
            />
          </Grid>
        </div>
        <div className={styles.gridItem}>
          <Grid item xs={12}>
            <CardElement style={{ base: { fontSize: "18px" } }} />
          </Grid>
        </div>
        <div className={styles.gridItem}>
          <Grid item xs={3}>
            <Button
              style={custom.confirmBtn}
              variant="outlined"
              onClick={e => this.handleConfirm()}
            >
              Confirm
            </Button>
          </Grid>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectStripe(Form);
// export default withStyles(styles)(Form);
