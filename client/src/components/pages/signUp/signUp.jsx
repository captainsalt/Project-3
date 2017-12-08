import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';
import "./signUp.css";
import API from "./../../../utils/API";


export default class SignUp extends Component {
    // Setting the component's initial state
    state = {
        username: "",
        // firstName: "",
        // lastName: "",
        email: "",
        password: "",
        seller: false,
        occupation: "",
        comics:false,
        d_grap:false,
        glass:false,
        paint:false,
        sculp:false,
        urban:false,
        wood:false
};


handleInputChange = (e)=>{
    // Getting the value and name of the input which triggered the change
    const value = (e.target.type === 'checkbox') ? e.target.checked : e.target.value;
    const name = e.target.name;
    console.log(this.state.interests);
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
                <Col xs={2} md={4}/>
                <Col xs={8} md={4}>
                <label>Please fill in the following: </label>
                <br/>
                <br/>
                <form className="form">
                    <input
                        value={this.state.username}
                        name="username"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Username"
                    />
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
                        <label>
                            *This account is used for:
                    </label>
                        <select name="seller" onChange={this.handleInputChange} value={this.state.seller}>
                            <option value={false}>Buying Art</option>
                            <option value={true}>Selling Art</option>
                            </select>
                    <br/>  
                    <label>
                        What best describes your occupation?
                    </label>
                        <select value={this.state.occupation} onChange={this.handleInputChange}>
                            <option value="profartist">Professional Artist</option>
                            <option value="student">Student</option>
                            <option value="recartist">Recreational Artist</option>
                            <option value="arted">Art Educator</option>
                            <option value="others">Others</option>
                        </select>
                    <br />
                    <label>Please select the art media that you will be selling in: </label>
                    <label>Comics
                        <input
                            className="input-art"
                            name="comics"
                            type="checkbox"
                            value={this.state.comics}
                            onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Digital Graphics
                        <input
                            className="input-art"
                            name="d_grap"
                            type="checkbox"
                                value={this.state.d_grap}
                            onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Glass Media
                        <input
                            className="input-art"
                            name="glass"
                            type="checkbox"
                                value={this.state.glass}
                            onChange={this.handleInputChange} />
                            </label>
                    <label>Painting (any media)
                        <input
                            className="input-art"
                            name="paint"
                            type="checkbox"
                            value={this.state.paint}
                            onChange={this.handleInputChange} />
                            </label>
                        <label>
                         Sculptures   
                        <input
                            className="input-art"
                            name="sculp"
                            type="checkbox"
                            value={this.state.sculp}
                            onChange={this.handleInputChange} />
                        </label>
                        <label>
                            Urban Art (Graffiti)
                        <input
                            className="input-art"
                            name="urban"
                            type="checkbox"
                            value={this.state.urban}
                            onChange={this.handleInputChange} />
                            </label>
                            <label> Woodworking
                        <input
                            className="input-art"
                            name="wood"
                            type="checkbox"
                            value={this.state.wood}
                            onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
                </Col>
                <Col xs={2} md={4} />
            </div>
        );
    }
}

