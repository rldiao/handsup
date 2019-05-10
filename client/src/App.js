import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import decode from "jwt-decode";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

import styles from "./App.module.css";
import NavBarTutorial from "./components/navigation/NavBarTutorial";
import SideDrawer from "./components/navigation/SideDrawer/SideDrawer";
import Backdrop from "./components/navigation/Backdrop/Backdrop";
import HomePage from "./pages/home/HomePage";
import ErrorPage from "./pages/error/ErrorPage";
import LoginPage from "./pages/login/LoginPage";
import SignUpPage from "./pages/signup/SignUpPage";
import DiscoverPage from "./pages/discover/DiscoverPage";
import UserProfilePage from "./pages/userProfile/userProfilePage";
import UserSettingsPage from "./pages/userProfileSettings/userSettingsPage";
import ContactPage from "./pages/contact/ContactPage";
import AboutPage from "./pages/about/AboutPage";
import DoneePage from "./pages/doneeProfile/DoneePage";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

// Private Routing
const checkAuth = () => {
  const token = localStorage.getItem("id_token");
  if (!token) {
    return false;
  }

  try {
    const { exp } = decode(token);
    if (exp < new Date().getTime() / 1000) {
      return false;
    }
  } catch (err) {
    return false;
  }
  return true;
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      checkAuth() === true ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

// Material UI Theme
const theme = createMuiTheme({
  palette: {
    primary: { main: "#41521f" }
  },
  typography: {
    useNextVariants: true
  }
});

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  connecToServer = () => {
    fetch("/");
  };
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <MuiThemeProvider theme={theme}>
        <div className={styles.pagecontainer}>
          <NavBarTutorial drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <div className={styles.content}>
            <Switch>
              <PrivateRoute path="/" exact component={HomePage} />
              <PrivateRoute path="/discover" component={DiscoverPage} />
              <PrivateRoute path="/userProfile" component={UserProfilePage} />
              <PrivateRoute path="/settings" component={UserSettingsPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignUpPage} />
              <Route path="/contact" component={ContactPage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/donee" component={DoneePage} />
              <Route component={ErrorPage} />
            </Switch>
          </div>
          {/* <div className={styles.footer}>
          <Footer />
        </div> */}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
