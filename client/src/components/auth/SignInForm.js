import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SignInForm extends Component {
    state = {
        email: '',
        password: '',
    };

    handleChange = e => {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    onLogin = e => {
        e.preventDefault()

        fetch('/login',{
            method: 'POST',
            body: JSON.stringify({
              email: this.state.email,
              password: this.state.password,
            }),
            headers: {"Content-Type": "application/json"}
          })
          .then(function(response){
            return response.json()
          }).then(function(body){
            console.log(body);
          });
    }

    render() {
    return (
        <div className="Container">
            <div className="FormHeader">Login</div>
            <div className="Form">
                <form 
                    className="FormFields"
                    onSubmit={this.onLogin}
                >
                    <div className="FormField">
                    <label className="FormFieldLabel">Email</label>
                    <input 
                        className="FormFieldInput" 
                        id="email" 
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                    />
                    </div>
                    <div className="FormField">
                    <label className="FormFieldLabel">Password</label>
                    <input 
                        className="FormFieldInput" 
                        id="password" 
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                    />
                    </div>
                    <div className="FormField">
                        <button className="FormFieldButton">Sign In</button> 
                        <Link to="/signup" className="FormFieldLink">Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}
