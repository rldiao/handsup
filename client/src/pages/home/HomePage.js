import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HomePage extends Component {
  state = {
    message: 'Loading...'
  }

  componentDidMount() {
    //GET message from server using fetch api
    fetch('/api/secret')
      .then(res => res.text())
      .then(res => this.setState({message: res}));
  }

  render() {
    return (
      <div>
         Home <br/>
         {this.state.message} <br/>
         <button><Link to="/login">Login</Link></button>
      </div>
    )
  }
}
