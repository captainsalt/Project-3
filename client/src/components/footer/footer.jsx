import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap';
import "./footer.css";

export default class Footer extends Component {
    render() {
        return (
            <Row id="footer">
                <Col xs={12} md={12}>
                    <br />
                    <h4>&copy; Team Artemistic 2017</h4>
                </Col>
            </Row>
        );
    }

}