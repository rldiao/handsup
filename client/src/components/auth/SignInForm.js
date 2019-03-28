import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import AuthService from './AuthService';

export default class SignInForm extends Component {
    constructor() {
        super()
        this.Auth = new AuthService();
        this.state = {
            email: '',
            password: '',
            error: '',
            redirect: false,
        };
    }

    componentWillMount = () => {
        if(this.Auth.loggedIn()) {
            this.setState({redirect: true})
        }
    }

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
        let that = this;
        this.Auth.login(this.state.email, this.state.password)
        .then(res => {
            that.setState({redirect: true})
        }).catch(function(error) {
            console.log('There has been a problem with your fetch operation: ', 
            error.message);
        });
    }

    render() {
        if(this.state.redirect === true) {
            return <Redirect to='/'/>
        }

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