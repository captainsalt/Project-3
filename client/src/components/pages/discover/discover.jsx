import React, { Component } from 'react';
import { Image, Row, Col, Panel } from "react-bootstrap";
import "./discover.css";
import { List, ListItem } from "../../List";
import API from "../../../utils/API";
// import { ListGroupItem } from '../../../../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-bootstrap';
import testImages from "../testimages.json";
import { Link } from "react-router-dom";

export default class Discover extends Component {
    state = {
        users: [],
    };

    //handle click event
    handleClick = (event) => {
        // console.log(event)
        // var req_params_id = event.target.name;
        // var value = event.target.value;
        //this.setState({ [req_params_id]: value });
        API.getCategory(event).then(res => {
            this.setState({users: res.data})
        }).catch(err => console.log(err));
    };

    componentDidMount() {
        this.loadUsers();
    }

    loadUsers = () => {
        API.getCategory()
            .then(res => {
                this.setState({ users: res.data })
                // console.log("In load users: " + this.state);
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
                        <Panel className="art-categories" value="c/paint" onClick={() => this.handleClick("c/paint")}>Paintings</Panel>
                        <Panel className="art-categories" value="c/sculp" onClick={() => this.handleClick("c/sculp")}>Sculptures</Panel>
                        <Panel className="art-categories" value= "c/d_grap" onClick={() => this.handleClick("c/d_grap")}>Digital Graphics</Panel>
                        <Panel className="art-categories" value="c/urban" onClick={() => this.handleClick("c/urban")}>Urban Art</Panel>
                        <Panel className="art-categories" value="c/comics" onClick={() => this.handleClick("c/comics")}>Comics</Panel>
                        <Panel className="art-categories" value="c/glass" onClick={() => this.handleClick("c/glass")}>Glass Media</Panel>
                    </Col>
                    
                    <Col xs={12} md={9}>




                        {this.state.users.length ? (
                            <div>
                                {this.state.users.map(user => (
                                    <Panel className="cat-user">
                                        <Col xs={12} md={3}>
                                        <Link to={"/users/" + user._id}>
                                            <Image
                                                className="feat-user"
                                                src={user.pictureUrl}
                                                alt={user.username}
                                                circle
                                            />
                                         </Link>
                                        </Col>
                                        <Col xs={12} md={9}>
                                            <Row className="user-pane">
                                                <h3>{user.username}</h3>
                                                <p>{user.description}</p>
                                            </Row>
                                            <Row className="disp-work">
                                                <Image className="samp-work" src={user.market[0].pictureUrl} circle />
                                                <Image className="samp-work" src={user.market[1].pictureUrl} circle />
                                                <Image className="samp-work" src={user.market[2].pictureUrl} circle />
                                            </Row>
                                        </Col>
                                    </Panel>
                                ))}
                            </div>
                        ) : (
                                <h3>What are you waiting for? Look around!</h3>
                            )}


                    </Col>
                   
                </Row>
            </div>
        );
    }
}