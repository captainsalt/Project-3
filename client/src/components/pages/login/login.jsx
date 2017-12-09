import React, { Component } from 'react';
import {Image,Col} from "react-bootstrap";
import "./login.css";
import { Link } from "react-router-dom";

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
            alert(`Please enter your email`);
        }
        else {
            // clear `this.state.password` and `this.state.email`
            // alert(`Welcome!`);
            this.setState({
                password: "",
                email: ""
            });
            window.location = "/dashboard/eschaefer";
        };
    };

    render() {
        return (
            <div>
                <br />
                {/* <Image circle/> */}
                <br/>
                <br />
                <Col xs={2} md={4} />
                <Col xs={8} md={4}>
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
                    <Link to="/dashboard/eschaefer">
                    <button>Submit</button>
                    </Link>
                </form>
                </Col>
                <Col xs={2} md={4} />
            </div>
        );
    }
}