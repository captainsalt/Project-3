import React, { Component } from 'react';
import { Image, Row, Col, Panel, ListGroup, ListGroupItem } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import testImages from "../testimages.json";
import "./dashboard.css"

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                {/* Logo row*/}
                <Row>
                    <Col md={12}>
                        Logo
                    </Col>
                </Row>

                {/* Portrait row*/}
                <Row>
                    {/* Portrait */}
                    <Col md={5}>
                        <Image 
                            id="portrait"    
                            src={testImages[0].imgUrl}
                            alt={testImages[0].alttext}
                            responsive
                        />
                    </Col>

                    {/* informarion*/}
                    <Col md={7}>
                        <h2>Title</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor ante ut dui egestas egestas. Ut erat sem, dapibus in leo vitae, rhoncus accumsan massa. Nam quis sem sagittis, condimentum nibh vel, tempus magna. Sed interdum, purus vel venenatis molestie, nibh massa aliquet libero, vitae finibus leo nisl sit amet nunc. Quisque varius elementum neque, vitae faucibus nibh suscipit non. Sed arcu velit, rhoncus eu viverra id, condimentum eu mi. Nunc porta, urna vitae accumsan semper, ex ex auctor nulla, et tincidunt dolor ante quis magna. Vestibulum at ligula non orci laoreet condimentum. Fusce sed tempus ante. Morbi sollicitudin erat non nisl lobortis, id molestie justo vulputate. Praesent nec scelerisque quam, non tristique nunc. Morbi rhoncus, mi eu rhoncus commodo, ligula odio consequat ante, ut tempus nunc quam nec lectus. Nunc porttitor, arcu quis interdum gravida, augue felis laoreet sapien, vitae consequat dui ex sit amet nibh. Mauris vehicula, est et eleifend vehicula, turpis ligula ullamcorper risus, non iaculis odio velit sed odio. Integer vitae lobortis est. Vivamus varius eu libero eget tincidunt.
                        </p>
                    </Col>
                </Row>

                <Row>
                    <nav id="links">
                        <li>Patrons</li>
                        <li>Etsy</li>
                    </nav>
                </Row>

                <Row>
                    <Router>
                        <div>
                            <Route path="dashboard/1" />
                            <Route path="dashboard/2" />
                        </div>
                    </Router>
                </Row>
            </div>
        )
    }
}