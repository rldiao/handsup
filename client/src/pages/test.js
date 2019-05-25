import React, { Component } from "react";
import Checkout from "../components/donation/Checkout";

export default class test extends Component {
  render() {
    return (
      <div>
        <p className="App-intro">
          <Checkout
            name={"The Road to learn React"}
            description={"Only the Book"}
            amount={1}
          />
        </p>
      </div>
    );
  }
}
