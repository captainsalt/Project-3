import React, { Component } from "react";
import "./market.css";
import { Row, Col, Panel, Image } from "react-bootstrap";
import testImages from "../testimages.json";
import API from "../../../utils/API";
// import testImages from "../../testimages.json"


export default class Market extends Component {

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
    this.loadMarket()
    }

    loadUsers = () => {
        API.getUser(this.props.match.params.id)
        .then(res => {
            this.setState({ username: res.data.username,
                            email: res.data.email,
                            bio: res.data.description,
                            patrons: res.data.patrons,
                            pictureUrl: res.data.pictureUrl,
                            date: res.data.date})
            console.log("In load users: " + this.state.username);
        })
        .catch(err => console.log(err));
    };

    loadMarket = () => {
        API.getItems(this.props.match.params.id)
        .then(res => {
            // this.setState({ username: res.data.username,
            //                 email: res.data.email,
            //                 bio: res.data.description,
            //                 patrons: res.data.patrons,
            //                 pictureUrl: res.data.pictureUrl})
            console.log("In load market: " + res.data);
        })
        .catch(err => console.log(err));
    }


    render() {
        // if (this.state.users.length > 0) {
        //     console.log(this.state.users[0].user.username)
        // }
        return (
            <div>
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
                                    src={this.state.pictureUrl}
                                    alt={this.state.username}
                                    circle
                                />
                            </Col>
                            <Col xs={12} md={4}>
                                <Row className="user-pane">
                                    <h3>{this.state.username}</h3>
                                    <h4>{this.state.bio}</h4>
                                    
                                </Row>
                                <Row className="user-pane">
                                    <Row>
                                        <h5>Last updated store: {this.state.date}</h5>
                                    </Row>
                                    <Row>
                                        <h5>{this.state.patrons}</h5>
                                    </Row>
                                    <Row>
                                        <h5>{this.state.email}</h5>
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
                            {/* {testImages[0].market.map(function(element,i){
                               return(<Col md={4} className="item-img-container">
                                <Image className="item-img" src={element.pictureUrl} key={i} circle responsive/>
                               <Row><p>{element.item}</p></Row>
                               </Col>);  
                            })} */}
                            {
                                
                            }
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