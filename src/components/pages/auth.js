import React, { Component } from 'react';

import Navbar from "../navbar"
import Footer from "../footer"


export default class Auth extends Component {
    constructor() {
        super()

        this.state = {
            usernameInput: "",
            passwordInput: ""
            
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        fetch("https://qotd-dhs.herokuapp.com/user/login", {
           method: "POST",
           headers: { "content-type": "application/json" },
           body: JSON.stringify({
               username: this.state.usernameInput,
               password: this.state.passwordInput
           })
       })

       .then(response => response.json())
       .then(data => console.log(data))
       .catch(error => console.log("Error logging in", error))

    }

    render() {
        return (
        <div className="page-wrapper">
            <Navbar />

            <div className="content-wrapper">
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text"
                    name="usernameInput"
                    value={this.state.usernameInput}
                    onChange={this.handleChange}  
                    placeholder="Username"                  
                    />

                    <input 
                    type="password" 
                    name="passwordInput"
                    value={this.state.passwordInput}
                    onChange={this.handleChange}
                    placeholder="Password"
                    />
                    <button type="submit">Submit</button>
                </form>
                
            </div>


            <Footer />
        </div>
        );
    }
}
