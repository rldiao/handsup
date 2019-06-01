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
      // donor: ""
    };
  }

  // getDonor = () => {
  //   const email = AuthService.getProfile().email;

  //   Axios.get("/user/" + email).then(res => {
  //     this.setState({ donor: res.data });
  //     console.log("donor email = " + this.state.donor.email);
  //   });
  // };

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
      //redirect, clear inputs, thank alert
    } catch (e) {
      throw e;
    }
  };

  render() {
    return (
      <div className={styles.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id="outlined-name"
              label="Amount"
              type="number"
              // className={this.classes.textField}
              // value={values.name}
              onChange={e => this.setState({ amount: e.target.value })}
              margin="normal"
              variant="outlined"
            />{" "}
          </Grid>
          <Grid item xs={12}>
            <CardElement style={{ base: { fontSize: "18px" } }} />{" "}
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              onClick={e => this.handleConfirm()}
              // style={profileStyles.saveButton}
            >
              Confirm
            </Button>{" "}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default injectStripe(Form);
