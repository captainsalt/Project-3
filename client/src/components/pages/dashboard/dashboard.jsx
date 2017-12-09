import React, { Component } from 'react';
import { Image, Row, Col, Panel, Button } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import testImages from "../testimages.json";
import "./dashboard.css";
import API from "../../../utils/API";


export default class Dashboard extends Component {
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
                console.log("In load users: " + this.state.marketItems.length);
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
                    <Col md={3}/>
                    <Col md={6}>
                        <Image
                            id="portrait"
                            src={testImages[0].imgUrl}
                            alt={testImages[0].alttext}
                            circle
                        />
                    </Col>
                    <Col md={3}/>
                    </Row>
                    <Row>
                    <Col md={1}/>
                    <Col md={10}>
                                <div className="btm-row">
                                <h2>My Patrons</h2>
                                <Panel className="dash-cluster">
                                    <Row>
                                        <Col md={4}>
                                            <Image className="dash-circle" src={testImages[3].imgUrl} circle />
                                            <h5>P. Hernandez</h5>
                                        </Col>
                                        <Col md={4}>
                                            <Image className="dash-circle" src={testImages[4].imgUrl} circle />
                                            <h5>J. Robinson</h5>
                                        </Col>
                                        <Col md={4}>
                                            <Image className="dash-circle" src={testImages[5].imgUrl} circle />
                                            <h5>O. Cortez</h5>
                                        </Col>
                                    </Row>
                                </Panel>
                                </div>
                    </Col>
                    <Col md={1}/>
                    </Row>
                    </Col>
                    {/* information*/}
                    <Col md={6}>
                        <h2>Hello, {testImages[0].name}</h2>
                        <h3>Patrons: {testImages[0].patrons}</h3>
                        <h3>Pieces on sale: {testImages[0].market.length}</h3>
                        <Row>
                            <Col md={1}/>
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
                                    <Col md={4}>
                                        <Image className="dash-circle" src={testImages[6].imgUrl} circle />
                                        <h5>G. Swansen</h5>
                                    </Col>
                                    <Col md={4}>
                                        <Image className="dash-circle" src={testImages[7].imgUrl} circle />
                                        <h5>A. Gallagher</h5>
                                    </Col>
                                    <Col md={4}>
                                        <Image className="dash-circle" src={testImages[8].imgUrl} circle />
                                        <h5>K. Wu</h5>
                                    </Col>
                                </Row>
                            </Panel>
                            {/* Start of store */}
                                <div className="btm-row">
                                <h2>My Store</h2>
                                <Panel className="dash-cluster">
                                    <Col md={4}>
                                        <Image className="dash-circle" src={testImages[0].market[0]} circle/>
                                        <h5>Unravel</h5>
                                    </Col>
                                    <Col md={4}>
                                        <Image className="dash-circle" src={testImages[0].market[1]} circle/>
                                        <h5>Pride</h5>
                                    </Col>
                                    <Col md={4}>
                                        <Image className="dash-circle" src={testImages[0].market[2]} circle/>
                                        <h5>Floral Sandals, Leather</h5>
                                    </Col>
                                </Panel>
                                </div>
                            </Col>
                            <Col md={2}/>
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