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

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
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
    try {
      let { token } = await this.props.stripe.createToken({
        name: this.state.name
        // });
        // let amount = this.state.amount;
        // await fetch("/donation/new", {
        //   method: "POST",
        //   headers: {
        //     "Content-type": "application/json"
        //   },
        //   body: JSON.stringify({ token, amount })
      });
      //redirect, clear inputs, thank alert
    } catch (e) {
      throw e;
    }
  };

  render() {
    return (
      <div className={styles.container}>
        <TextField
          id="outlined-name"
          label="Name"
          type="text"
          // className={this.classes.textField}
          // value={values.name}
          margin="normal"
          variant="outlined"
          // onChange={this.handleTextField(amou)}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <TextField
          id="outlined-name"
          label="Amount"
          // className={this.classes.textField}
          // value={values.name}
          onChange={e => this.setState({ amount: e.target.value })}
          margin="normal"
          variant="outlined"
        />
        <CardElement style={{ base: { fontSize: "18px" } }} />
        <Button
          variant="outlined"
          onClick={e => this.handleConfirm()}
          // style={profileStyles.saveButton}
        >
          Confirm
        </Button>
      </div>
    );
  }
}

export default injectStripe(Form);
