import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import NavbarBS from "./components/navbar";
import Home from "./components/pages/home";
import SignUp from "./components/pages/signUp";
import Login from "./components/pages/login";
import Discover from "./components/pages/discover";
import Dashboard from "./components/pages/dashboard";
import Market from "./components/pages/market";


import Patrons from "./components/patrons";
import Etsy from "./components/etsy";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <NavbarBS />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/market" component={Market} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/discover" component={Discover} />
                    <Route exact path="/users/:id" component={Market} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route path="/dashboard/patrons" component={Patrons} />
                    <Route path="/dashboard/etsy" component={Etsy} />
                </div>
            </Router>
        );
    }
}

export default App;
