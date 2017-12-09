import React, { Component } from 'react';
import { Image, Row, Col, Panel, Button } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import testImages from "../testimages.json";
import "../dashboard/dashboard.css";
import "./demologin.css";
import API from "../../../utils/API";


export default class DemoLogin extends Component {
    // set up shop to load mongo, incomplete because cannot get id
    state = {
        username: [],
        email: [],
        bio: [],
        pictureUrl: [],
        patrons: [],
        marketItems: [],
        date: []
    }

    componentDidMount() {
        this.loadUsers();
    }

    loadUsers = () => {
        API.getUser(this.props.match.params.id)
            .then(res => {
                this.setState({
                    username: res.data.username,
                    email: res.data.email,
                    bio: res.data.description,
                    patrons: res.data.patrons,
                    pictureUrl: res.data.pictureUrl,
                    date: res.data.date,
                    marketItems: res.data.market
                })
                // console.log("In load users: " + this.state.marketItems.length);
            })
            .catch(err => console.log(err));
    };


    render() {

        return (
            <div>
                {/* Logo row*/}
                {/* <Row>
                    <Col md={12}>
                        Logo
                    </Col>
                </Row> */}

                {/* Portrait row*/}
                <Row className="user-dash-panel">
                    {/* Portrait */}
                    <Col md={6}>
                        <Row>
                            <Col md={3} />
                            <Col md={6}>
                                <Image
                                    id="placeholder"
                                    src="http://www.uew.edu.gh/sites/default/files/pictures/default_profile_pic.jpg"
                                    alt="Upload an image!"
                                    circle
                                />
                            </Col>
                            <Col md={3} />
                        </Row>
                        <Row>
                            <Col md={1} />
                            <Col md={10}>
                                <div className="btm-row">
                                    <h2>My Patrons</h2>
                                    <Panel className="dash-cluster">
                                        <Row>
                                            <Col md={12}>
                                                <h1>Haven't found me yet!</h1>
                                            </Col>
                                        </Row>
                                    </Panel>
                                </div>
                            </Col>
                            <Col md={1} />
                        </Row>
                    </Col>
                    {/* information*/}
                    <Col md={6}>
                        <h2>Hello, Grant Chan</h2>
                        <h3>Patrons: 0</h3>
                        <h3>Pieces on sale: 0</h3>
                        <Row>
                            <Col md={1} />
                            <Col md={10}>
                                <Row>
                                    <Link to={"/"}>
                                        <Button id="log-out-btn">
                                            <h2>Log Out</h2>
                                        </Button>
                                    </Link>
                                </Row>
                                {/* Start of recommendations */}
                                <h2>I'm Following</h2>
                                <Panel className="dash-cluster">
                                    <Row>
                                        <Col md={12}>
                                            <h1>No one!</h1>
                                        </Col>
                                    </Row>
                                </Panel>
                                {/* Start of store */}
                                <div className="btm-row">
                                    <h2>My Store</h2>
                                    <Panel className="dash-cluster">
                                        <Col md={12}>
                                            <h1>Has nothing in it!</h1>
                                        </Col>
                                    </Panel>
                                </div>
                            </Col>
                            <Col md={2} />
                        </Row>
                    </Col>
                    <Col md={1}>
                    </Col>
                </Row>
                {/* <Row>
                    <nav id="links">
                        <Link to="/dashboard/patrons">Patrons</Link>
                        <Link to="/dashboard/etsy">Etsy</Link>
                    </nav>
                </Row> */}

                {/* Patron & Etsy Row */}
                <Row>
                    <Col md={1}>
                    </Col>
                    <Col md={3}>
                        <Row>
                            {/* <Col md={12}>
                                <h4>View More</h4>
                            </Col> */}
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}