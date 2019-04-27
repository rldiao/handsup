import React, { Component } from "react";
import AuthService from "../../services/AuthService";
import withAuth from "../../components/auth/withAuth";

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
    AuthService.logout();
    this.props.history.replace("/login");
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

export default withAuth(HomePage);
