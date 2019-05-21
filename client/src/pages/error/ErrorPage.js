import React, { Component } from "react";

export default class ErrorPage extends Component {
  render() {
    return (
      <div style={{ padding: "2rem" }}>
        <img
          style={{ maxWidth: "100%" }}
          alt="404"
          src={require("../../assets/img/404/undraw_page_not_found_su7k.svg")}
        />
      </div>
    );
  }
}
