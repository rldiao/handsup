import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'; 

import HomePage from './pages/home/HomePage'
import ErrorPage from './pages/error/ErrorPage'
import LoginPage from './pages/login/LoginPage'
import SignupPage from './pages/login/SignupPage'

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  }

  render() {
    return (
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/signup" component={SignupPage}/>
        <Route component={ErrorPage}/>
      </Switch>
    );
  }
}

export default App;