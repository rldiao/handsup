import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import HomePage from "./page/HomePage/HomePage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.connecToServer();
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

  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   {/*  Render the newly fetched data inside of this.state.data  */}
      //   <p className="App-intro">{this.state.data}</p>
      // </div>
      <HomePage />
    );
  }
}

export default App;
