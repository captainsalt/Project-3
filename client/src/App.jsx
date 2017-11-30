import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import NavbarBS from "./components/navbar";
import Home from "./components/pages/home";
import SignUp from "./components/pages/signUp";
import Login from "./components/pages/login";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <NavbarBS />
          <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/login" component={Login} />
      </div>
      </Router>
    );
  }
}

export default App;
