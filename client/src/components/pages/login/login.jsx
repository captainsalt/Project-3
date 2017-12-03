import React, { Component } from 'react';
import {Image} from "react-bootstrap";
// import "./login.css";

export default class Login extends Component {
    // Setting the component's initial state
    state = {
        email: "",
        password: ""
    };

    handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
        let pwCheck = !this.state.password
        if (pwCheck) {
            alert(`Please enter your password`);
        }
        else if (!pwCheck && !this.state.email) {
            alert(`Please enter your password`);
        }
        else {
            // clear `this.state.password` and `this.state.email`
            alert(`Welcome!`);
            this.setState({
                password: "",
                email: ""
            });
        };
    };

    render() {
        return (
            <div>
                <br />
                <Image circle/>
                <br/>
                <br />
                <form className="form">
                    <input
                        value={this.state.email}
                        name="email"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="E-mail"
                    />
                    <br />
                    <br />
                    <input
                        value={
                            this.state.password.substring(0, 14)
                        }
                        name="password"
                        onChange={
                            this.handleInputChange
                        }
                        type="password"
                        placeholder="Password" />
                    <br />
                    <br />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}