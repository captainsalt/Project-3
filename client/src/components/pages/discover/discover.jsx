import React, { Component } from 'react';
import { Image, Row, Col, Panel } from "react-bootstrap";
import "./discover.css";
import { List, ListItem } from "../../List";
import API from "../../../utils/API";
// import { ListGroupItem } from '../../../../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-bootstrap';
import testImages from "../testimages.json";

export default class Discover extends Component {
    state = {
        users: [],
    };

    //handle click event
    handleClick(event) {
        var req_params_id = event.target.name;
        var value = event.target.value;
        this.setState({ [req_params_id]: value });
    }

    componentDidMount() {
        this.loadUsers();
    }

  loadUsers = () => {
    API.getCategory()
      .then(res => {
        this.setState({ users: res.data})
        console.log("In load users: "+this.state);
      })
      .catch(err => console.log(err));
  };    

    render() {
        return (
            <div>
                <Row>
                    <Col xs={12} md={4}>
                        <h1>Discover New Artists</h1>
                        <br />
                    </Col>
                </Row>
                <Row id="main-container">
                    <Col xs={12} md={3}>
                        <Panel className="art-categories" req_params_id="paint" onClick={this.handleClick}>Paintings</Panel>
                        <Panel className="art-categories">Sculptures</Panel>
                        <Panel className="art-categories">Digital Graphics</Panel>
                        <Panel className="art-categories">Urban Art</Panel>
                        <Panel className="art-categories">Comics</Panel>
                        <Panel className="art-categories">Glass Media</Panel>
                    </Col>
                    <Col xs={12} md={9}>




                        {this.state.users.length ? (
                            <div>
                                {this.state.users.map(user => (
                                    <Panel className="cat-user">
                                        <Col xs={12} md={3}>
                                            <Image
                                                className="feat-user"
                                                src={user.pictureUrl}
                                                alt={testImages[0].alttext}
                                                circle
                                            />
                                        </Col>
                                        <Col xs={12} md={9}>
                                            <Row className="user-pane">
                                                <h3>{user.username}</h3>
                                                <p>{user.description}</p>
                                            </Row>
                                            <Row className="disp-work">
                                                <Image className="samp-work" src={user.pictureUrl} circle />

                                            </Row>
                                        </Col>
                                    </Panel>
                                ))}
                            </div>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}


                    </Col>
                </Row>
            </div>
        );
    }
}