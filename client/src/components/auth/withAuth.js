import React, { Component } from "react";
import AuthService from "../../services/AuthService";

// This is a high order component
// Learn more here: https://facebook.github.io/react/docs/higher-order-components.html

// This component is deprecated
export default function withAuth(AuthComponent) {
  return class AuthWrapped extends Component {
    constructor() {
      super();
      this.state = {
        user: null
      };
    }

    componentDidMount() {
      if (!AuthService.loggedIn()) {
        this.props.history.replace("/login");
      } else {
        try {
          const profile = AuthService.getProfile();
          this.setState({
            user: profile
          });
        } catch (err) {
          AuthService.logout();
          this.props.history.replace("/login");
        }
      }
    }

    render() {
      if (this.state.user) {
        return (
          <AuthComponent history={this.props.history} user={this.state.user} />
        );
      } else {
        return null;
      }
    }
  };
}
