import React, { Component } from "react";
import withAuth from "../../components/auth/withAuth";
import { logout } from "../../actions/userActions";
import { connect } from "react-redux";

class HomePage extends Component {
  componentDidMount() {
    //GET message from server using fetch api
    fetch("/api/secret", {
      method: "GET",
      headers: {
        Authorization: sessionStorage.getItem("jwtToken")
      }
    })
      .then(res => res.text())
      .then(res => this.setState({ message: res }));
  }

  onLogout = e => {
    e.preventDefault();
    console.log("logout");

    this.props.logout();
  };

  render() {
    return (
      <div>
        Home <br />
        {/* {this.state.message} <br/> */}
        {/* <button><Link to="/login">Login</Link></button> */}
        <button onClick={this.onLogout}>Logout</button>
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
