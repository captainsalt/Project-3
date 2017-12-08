import React, { Component } from "react";
import "./market.css";
import { Row, Col, Panel, Image } from "react-bootstrap";
import testImages from "../testimages.json";

export default class Market extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={12} md={2}>
                    </Col>
                    {/* Seller info panel is centralized with bootstrap columns */}
                    <Col xs={12} md={8}>
                        <Panel className="cat-user">
                            <Col xs={12} md={3}>
                            </Col>
                            <Col xs={12} md={3}>
                                <Image
                                    className="feat-user"
                                    src={testImages[0].imgUrl}
                                    alt={testImages[0].alttext}
                                    circle
                                />
                            </Col>
                            <Col xs={12} md={4}>
                                <Row className="user-pane">
                                    <h3>{testImages[0].name}</h3>
                                    <h4>{testImages[0].autobio}</h4>
                                </Row>
                                <Row className="user-pane">
                                    <Row>
                                        <h5>Last updated store: 12/01/2017</h5>
                                    </Row>
                                    <Row>
                                        <h5>Patrons: 7</h5>
                                    </Row>
                                    <Row>
                                        <h5>Contact: erin.schaefer@artemistic.com</h5>
                                    </Row>
                                </Row>
                            </Col>
                            <Col xs={12} md={2}>
                            </Col>
                        </Panel>
                    </Col>
                    <Col xs={12} md={2}>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={2}>
                    </Col>
                    <Col xs={12} md={8}>
                        <Panel id="store-panel">
                            {testImages[0].market.map(function(element,i){
                               return(<Col md={4} className="item-img-container">
                                <Image className="item-img" src={element} key={i} circle responsive/>
                               </Col>);  
                            })}
                        </Panel>
                    </Col>
                    <Col xs={12} md={2}>
                    </Col>
                </Row>
            </div>
        )
    }
}