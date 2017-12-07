import React, { Component } from 'react';
import { Image, Row, Col, Panel } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import testImages from "../testimages.json";
import "./dashboard.css"

export default class Dashboard extends Component {
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
                    <Col md={1}>
                    </Col>
                    <Col md={3}>
                        <Image
                            id="portrait"
                            src={testImages[0].imgUrl}
                            alt={testImages[0].alttext}
                            circle responsive
                        />
                    </Col>
                    <Col md={1}>
                    </Col>
                    {/* information*/}
                    <Col md={6}>
                        <h2>Hello, {testImages[0].name}</h2>
                        <h3>Patrons: {testImages[0].patrons}</h3>
                        <h3>Pieces on sale: {testImages[0].market.length}</h3>
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
                        <h2>My Patrons</h2>
                        <Panel className="dash-cluster">
                            <Row>
                                <Col md={4}>
                                    <Image className="dash-circle" src={testImages[3].imgUrl} circle responsive />
                                    <h5>P. Hernandez</h5>
                                </Col>
                                <Col md={4}>
                                    <Image className="dash-circle" src={testImages[4].imgUrl} circle responsive />
                                    <h5>J. Robinson</h5>
                                </Col>
                                <Col md={4}>
                                    <Image className="dash-circle" src={testImages[5].imgUrl} circle responsive />
                                    <h5>O. Cortez</h5>
                                </Col>
                            </Row>
                        </Panel>
                        {/* View More Patrons */}
                        <Row>
                            <Col md={12}>
                                <h4>View More</h4>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={1}>
                    </Col>
                    <Col md={6}>
                        <h2>My Store</h2>
                        <Panel className="dash-cluster">
                            <Col md={4}>
                                <Image className="dash-circle" src={testImages[0].market[0]} circle responsive />
                                <h5>Unravel</h5>
                            </Col>
                            <Col md={4}>
                                <Image className="dash-circle" src={testImages[0].market[1]} circle responsive />
                                <h5>Pride</h5>
                            </Col>
                            <Col md={4}>
                                <Image className="dash-circle" src={testImages[0].market[2]} circle responsive />
                                <h5>Floral Sandals, Leather</h5>
                            </Col>
                        </Panel>
                    </Col>
                    <Col md={1}>
                    </Col>
                </Row>
            </div>
        )
    }
}