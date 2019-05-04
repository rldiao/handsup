import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import decode from "jwt-decode";

import styles from "./App.module.css";
<<<<<<< HEAD
import NavBar from "./components/navigation/NavBar";
import UserSettingPage from "./pages/userProfileSettings/UserSettingsPage";
=======
import NavBarTutorial from "./components/navigation/NavBarTutorial";
import SideDrawer from "./components/navigation/SideDrawer/SideDrawer";
import Backdrop from "./components/navigation/Backdrop/Backdrop";
>>>>>>> page/admin

import HomePage from "./pages/home/HomePage";
import ErrorPage from "./pages/error/ErrorPage";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/login/SignupPage";
<<<<<<< HEAD

// TEST - START
=======
import DiscoverPage from "./pages/discover/DiscoverPage";
import UserProfilePage from "./pages/userProfile/userProfilePage";
import UserSettingsPage from "./pages/userProfileSettings/userSettingsPage";
import AdminPage from "./pages/admin/AdminPage";

>>>>>>> page/admin
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
<<<<<<< HEAD
// TEST - END
=======
>>>>>>> page/admin

class App extends Component {
  state = {
    data: null,
<<<<<<< HEAD
    isAuth: false
=======
    sideDrawerOpen: false
>>>>>>> page/admin
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
<<<<<<< HEAD
      // .then(res => this.setState({ isAuth: res.isAuth}))
=======
>>>>>>> page/admin
      .catch(err => console.log(err));
  }

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

<<<<<<< HEAD
  render() {
    return (
      <div>
        <NavBar />
        <div className={styles.content}>
          <Switch>
            {/* <PrivateRoute path="/" exact component={HomePage} /> */}
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
            {/* <Route component={ErrorPage} /> */}
            <Route path="/" component={UserSettingPage} />
          </Switch>
        </div>
      </div>
      // <div>
      //   <UserSettingPage />
      // </div>
=======
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
            <Route path="/signup" component={SignupPage} />
            <Route path="/admin" component={AdminPage} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
        {/* <div className={styles.footer}>
          <Footer />
        </div> */}
      </div>
>>>>>>> page/admin
    );
  }
}

export default App;
