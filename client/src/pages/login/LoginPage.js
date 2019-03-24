import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import SignUpForm from '../../components/auth/SignUpForm'
import SignInForm from '../../components/auth/SignInForm'

import './loginPage.css'

export default class LoginPage extends Component {

  render() {
    return (
      <div className="Container">
          <div className="FormContainer">
            <SignInForm/>
          </div>
      </div>
    )
  }
}
