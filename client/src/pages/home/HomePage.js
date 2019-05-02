import React, { Component } from "react";
import withAuth from "../../components/auth/withAuth";
import { logout } from "../../actions/userActions";
import { connect } from "react-redux";

class HomePage extends Component {
  render() {
    return (
      <div>
        Home <br /> <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }
}

export default connect(
  null,
  { logout }
)(HomePage);
