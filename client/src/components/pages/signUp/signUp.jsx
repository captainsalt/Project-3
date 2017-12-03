import React, {Component} from 'react';
// import "./signUp.css";
import API from "./../../../utils/API";


export default class SignUp extends Component {
    // Setting the component's initial state
    state = {
        username: "",
        // firstName: "",
        // lastName: "",
        email: "",
        password: ""
};

handleInputChange = (e)=>{
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
        let nameCheck = !this.state.username;
        if(nameCheck){
            alert(`Please enter your Username`);
        }
        // else if (!nameCheck || !this.state.firstName || !this.state.lastName) {
        //     alert(`Please enter your first and last name`);
        // }
        else if (!nameCheck && this.state.password.length < 8) {
            alert(`Password length cannot be shorter than 8 characters`);
        }
        else if (!nameCheck && !this.state.email) {
            alert(`Email cannot be blank`);
        }
        else {
            // Alert the user finish signing up, clear all this.state inputs
            alert(`Sign up complete!`);
            API.saveUser({
                username: this.state.username,
                // firstName: "",
                // lastName: "",
                password: this.state.password,
                email: this.state.email
            });
        };
    };

    render() {
        return (
            <div>
                <form className="form">
                    <input
                        value={this.state.username}
                        name="username"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Username"
                    />
                <br/>
                {/* <form className="form">
                    <input
                        value={this.state.firstName}
                        name="firstName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="First Name"
                    />
                    <br/>
                    <br/>
                    <input
                        value={this.state.lastName}
                        name="lastName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Last Name"
                    /> */}
                    <br/>
                    <br/>
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
                    <br/>
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}