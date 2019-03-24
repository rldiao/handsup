import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HomePage extends Component {
  render() {
    return (
      <div>
         Home
         <button><Link to="/login">Login</Link></button>
      </div>
    )
  }
}
