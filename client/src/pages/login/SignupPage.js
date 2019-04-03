import React, { Component } from 'react'

import SignUpForm from '../../components/auth/SignUpForm'
import styles from './formPage.module.css'

export default class LoginPage extends Component {

  render() {
    return (
      <div className={styles.container}>
          <div className={styles.formContainer}>
            <SignUpForm/>
          </div>
      </div>
    )
  }
}
