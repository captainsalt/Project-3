import React, { Component } from "react";
import "./market.css";
import { Row, Col, Panel, Image } from "react-bootstrap";
import testImages from "../testimages.json";
import API from "../../../utils/API";
// import testImages from "../../testimages.json"


export default class Market extends Component {

    state = {
        users: []
    }

  componentDidMount() {
    this.loadUsers();
    }

    loadUsers = () => {
        API.getUser(this.props.match.params.id)
        .then(res => {
            this.setState({ users: res.data,  })
            console.log("In load users: " + this.state.users[0]);
        })
        .catch(err => console.log(err));
    };


    render() {
        // if (this.state.users.length > 0) {
        //     console.log(this.state.users[0].user.username)
        // }
        return (
            <div>
                {this.state.userdata.map(function(user){
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
                                    src={this.state.users[2]}
                                    alt={testImages[0].alttext}
                                    circle
                                />
                            </Col>
                            <Col xs={12} md={4}>
                                <Row className="user-pane">
                                    <h3>{this.state.users[0]}</h3>
                                    <h4>{user.description}</h4>
                                </Row>
                                <Row className="user-pane">
                                    <Row>
                                        <h5>Last updated store: {user.date}</h5>
                                    </Row>
                                    <Row>
                                        <h5>Patrons: {user.patrons}}</h5>
                                    </Row>
                                    <Row>
                                        <h5>Contact: {user.email}</h5>
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
                            {user.market.map(function(element,i){
                               return(<Col md={4} className="item-img-container">
                                <Image className="item-img" src={element.pictureUrl} key={i} circle responsive/>
                               <Row><p>{element.item}</p></Row>
                               </Col>);  
                            })}
                        </Panel>
                    </Col>
                    <Col xs={12} md={2}>
                    </Col>
                </Row>
                </div>
                })}
            </div>
        )
    }
}