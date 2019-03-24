import React, { Component } from 'react'

import SignUpForm from '../../components/auth/SignUpForm'

import './loginPage.css'

export default class LoginPage extends Component {

  render() {
    return (
      <div className="Container">
          <div className="FormContainer">
            <SignUpForm/>
          </div>
      </div>
    )
  }
}
