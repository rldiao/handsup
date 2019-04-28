import React, { Component } from "react";
import withAuth from "../../components/auth/withAuth";
import { logout } from "../../actions/userActions";
import { connect } from "react-redux";

class HomePage extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          textAlign: "center"
        }}
      >
        Home
      </div>
    );
  }
}

export default withAuth(
  connect(
    null,
    { logout }
  )(HomePage)
);
