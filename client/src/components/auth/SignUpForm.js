import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SignUpForm extends Component {
    state = {
        email: '',
        password: '',
        name: '',
        hasAgreed: false
    };

    handleChange = e => {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    onSignUpAPI = async e => {
        e.preventDefault()
        // Checkbox else error
        fetch('/signup',{
            method: 'POST',
            body: JSON.stringify({
              email: this.state.email,
              password: this.state.password,
              name: this.state.name
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
            <div className="FormHeader">Log In</div>
            <div className="Form">
                <form 
                    className="FormFields" 
                    method="post"
                    onSubmit={this.onSignUpAPI}
                >
                    <div className="FormField">
                    <label className="FormFieldLabel">Full Name</label>
                    <input 
                        className="FormFieldInput" 
                        id="name" 
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                    />
                    </div>
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
                    <label className="FormFieldCheckboxLabel">
                        <input className="FormFieldCheckbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                    </label>
                    </div>
                    <div className="FormField">
                        <button className="FormFieldButton">Sign Up</button> 
                        <Link to="/login" className="FormFieldLink">I'm already member</Link>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}
