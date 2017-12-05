import React, { Component } from 'react';
import { Image, Row, Col, Panel} from "react-bootstrap";
import "./discover.css";
// import { ListGroupItem } from '../../../../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-bootstrap';
import testImages from "../testimages.json";

export default class Discover extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={12} md={4}>
                    <h1>Discover New Artists</h1>
                    <br/>
                    </Col>
                    </Row>
                <Row id="main-container">
                    <Col xs={12} md={3}>
                        <Panel className="art-categories">Paintings</Panel>
                        <Panel className="art-categories">Sculptures</Panel>
                        <Panel className="art-categories">Computer Graphics</Panel>
                        <Panel className="art-categories">Urban Art</Panel>
                        <Panel className="art-categories">Comics</Panel>
                        <Panel className="art-categories">Glass Media</Panel>
                    </Col>
                    <Col xs={12} md={9}>
                        <Panel className="cat-user">
                            <Col xs={12} md={3}>
                                <Image
                                    className="feat-user"
                                    src={testImages[0].imgUrl}
                                    alt={testImages[0].alttext}
                                    circle
                                />
                            </Col>
                            <Col xs={12} md={9}>
                            <Row className="user-pane">
                                <h3>Annie May</h3>
                                <p>Graffiti Artist. I also craft shoes.</p>
                            </Row>
                            <Row className="disp-work">
                                <Image className="samp-work" src={testImages[0].works[0]} circle/>
                                    <Image className="samp-work" src={testImages[0].works[1]} circle />
                                    <Image className="samp-work" src={testImages[0].works[2]} circle />
                            </Row>
                            </Col>
                        </Panel>
                        <Panel className="cat-user">
                            <Col xs={3} md={3}>
                                <Image
                                    className="feat-user"
                                    src={testImages[0].imgUrl}
                                    alt={testImages[0].alttext}
                                    circle
                                />
                            </Col>
                            <Col xs={9} md={9}>
                                <h3>Annie May</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor ante ut dui egestas egestas. Ut erat sem, dapibus in leo vitae, rhoncus accumsan massa. Nam quis sem sagittis, condimentum nibh vel, tempus magna. Sed interdum, purus vel venenatis molestie, nibh massa aliquet libero, vitae finibus leo nisl sit amet nunc. Quisque varius elementum neque, vitae faucibus nibh suscipit non. Sed arcu velit, rhoncus eu viverra id, condimentum eu mi. Nunc porta, urna vitae accumsan semper, ex ex auctor nulla, et tincidunt dolor ante quis magna. Vestibulum at ligula non orci laoreet condimentum. Fusce sed tempus ante. Morbi sollicitudin erat non nisl lobortis, id molestie justo vulputate. Praesent nec scelerisque quam, non tristique nunc. Morbi rhoncus, mi eu rhoncus commodo, ligula odio consequat ante, ut tempus nunc quam nec lectus. Nunc porttitor, arcu quis interdum gravida, augue felis laoreet sapien, vitae consequat dui ex sit amet nibh. Mauris vehicula, est et eleifend vehicula, turpis ligula ullamcorper risus, non iaculis odio velit sed odio. Integer vitae lobortis est. Vivamus varius eu libero eget tincidunt.</p>
                            </Col>
                        </Panel>
                        <Panel className="cat-user">
                            <Col xs={3} md={3}>
                                <Image
                                    className="feat-user"
                                    src={testImages[0].imgUrl}
                                    alt={testImages[0].alttext}
                                    circle
                                />
                            </Col>
                            <Col xs={9} md={9}>
                                <h3>Annie May</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor ante ut dui egestas egestas. Ut erat sem, dapibus in leo vitae, rhoncus accumsan massa. Nam quis sem sagittis, condimentum nibh vel, tempus magna. Sed interdum, purus vel venenatis molestie, nibh massa aliquet libero, vitae finibus leo nisl sit amet nunc. Quisque varius elementum neque, vitae faucibus nibh suscipit non. Sed arcu velit, rhoncus eu viverra id, condimentum eu mi. Nunc porta, urna vitae accumsan semper, ex ex auctor nulla, et tincidunt dolor ante quis magna. Vestibulum at ligula non orci laoreet condimentum. Fusce sed tempus ante. Morbi sollicitudin erat non nisl lobortis, id molestie justo vulputate. Praesent nec scelerisque quam, non tristique nunc. Morbi rhoncus, mi eu rhoncus commodo, ligula odio consequat ante, ut tempus nunc quam nec lectus. Nunc porttitor, arcu quis interdum gravida, augue felis laoreet sapien, vitae consequat dui ex sit amet nibh. Mauris vehicula, est et eleifend vehicula, turpis ligula ullamcorper risus, non iaculis odio velit sed odio. Integer vitae lobortis est. Vivamus varius eu libero eget tincidunt.</p>
                            </Col>
                        </Panel>
                    </Col>
                </Row>
            </div>
        );
    }
}