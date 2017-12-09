import React, { Component } from 'react';
import { Image, Row, PageHeader, Col, Thumbnail, Panel, Jumbotron } from "react-bootstrap";
import CarouselBS from "../../carousel";
import "./home.css";
import testImages from "../testimages.json";
import Footer from './../../footer';


export default class Home extends Component {

    render() {
        return (
            <div>
                <Row className="home-content-div">
                    <CarouselBS />
                </Row>
                <PageHeader>Meet Our Creators</PageHeader>
                <Row className="home-content-div">
                    <Col xs={12} md={4}>
                        <Thumbnail>
                            <Image
                                className="feat-user"
                                src={testImages[0].imgUrl}
                                alt={testImages[0].alttext}
                                circle
                            />
                            <h3 className="artist-head">Erin Shaefer</h3>
                            <p className="artist-des">Graffiti Artist. I also handcraft shoes.</p>
                        </Thumbnail>
                    </Col>
                    <Col xs={12} md={4}>
                        <Thumbnail>
                            <Image
                                className="feat-user"
                                src={testImages[1].imgUrl}
                                alt={testImages[1].alttext}
                                circle 
                            />
                            <h3 className="artist-head">Melissa Brooks</h3>
                            <p className="artist-des">Wine lover, cheese maker, and 24/7 graphic designer.</p>
                        </Thumbnail>
                    </Col>
                    <Col xs={12} md={4}>
                        <Thumbnail>
                            <Image
                                className="feat-user"
                                src={testImages[2].imgUrl}
                                alt={testImages[2].alttext}
                                circle 
                            />
                            <h3 className="artist-head">David Wright</h3>
                            <p className="artist-des">Comic book nerd. I love drawing comics from scratch.</p>
                        </Thumbnail>
                    </Col>
                </Row>
                <Row>
                    <PageHeader>
                        How It Works
                        </PageHeader>
                    <Row className="home-content-div">
                        {/* All in one place */}
                        <Row className="works-writeup">
                            <Row>
                                <Col md={1} />
                                <Col xs={12} md={4}>
                                    <h3>Gallery, Store, Patronage: All in one place.</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={1} />
                                <Col xs={12} md={4}>
                                    <h4>ArtFair streamlines the process for artists to demonstrate and trade their creations, while also connecting buyers to the art they enjoy. Even better, ArtFair allows buyers to directly support artists throughout the creative process!</h4>
                                </Col>
                                <Col md={2} />
                                <Col xs={12} md={4}>
                                    <Image
                                        src="https://image.flaticon.com/icons/svg/341/341273.svg"
                                        className="svg-icons"
                                        
                                    />
                                </Col>
                                <Col md={1} />
                            </Row>
                        </Row>
                        {/* Browse and buy here */}
                        <Row className="works-writeup">
                            <Row>
                                <Col md={1} />
                                <Col xs={12} md={4}>
                                    <h3>Browse and buy here. No more switching sites.</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={1} />
                                <Col xs={12} md={4}>
                                    <h4>Browsing artworks on Instagram and paying for them on Paypal? We are making that history by making ArtFair a one-stop shop for browsing and purchasing artworks.</h4>
                                </Col>
                                <Col md={2} />
                                <Col xs={12} md={4}>
                                    <Image
                                        src="https://image.flaticon.com/icons/svg/636/636595.svg"
                                        className="svg-icons"
                                        
                                    />    
                                </Col>
                                <Col md={1} />
                            </Row>
                        </Row>
                        {/* You and your art, not ads */}
                        <Row className="works-writeup">
                            <Row>
                                <Col md={1} />
                                <Col xs={12} md={4}>
                                    <h3>The focus is on you and your art; not ads.</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={1} />
                                <Col xs={12} md={4}>
                                    <h4>ArtFair is set up with the artists in mind, not ads. We do not put ads on our pages. We don't share your browsing behavior with third-party dealers, ever.</h4>
                                </Col>
                                <Col md={2} />
                                <Col xs={12} md={4}>
                                    <Image
                                        src="https://image.flaticon.com/icons/svg/263/263078.svg"
                                        className="svg-icons"
                                        
                                    />    
                                </Col>
                                <Col md={1} />
                            </Row>
                        </Row>
                        {/* Artists earn */}
                        <Row className="works-writeup">
                            <Row>
                                <Col md={1} />
                                <Col xs={12} md={4}>
                                    <h3>Artists earn, even when nothing is sold.</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={1} />
                                <Col xs={12} md={4}>
                                    <h4>ArtFair allows buyers to support their favorite artists with periodic donations, so that artists can pay their bills while they work on something new.</h4>
                                </Col>
                                <Col md={2} />
                                <Col xs={12} md={4}>
                                    <Image
                                        src="https://image.flaticon.com/icons/svg/639/639416.svg"
                                        className="svg-icons"
                                        
                                    />    
                                </Col>
                                <Col md={1} />
                            </Row>
                        </Row>
                        {/* Generosity */}
                        <Row className="works-writeup">
                            <Row>
                                <Col md={1} />
                                <Col xs={12} md={4}>
                                    <h3>Generosity begets generosity.</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={1} />
                                <Col xs={12} md={4}>
                                    <h4>Artists in ArtFair can reward their patrons with powerful tier-structured perks. Generous support from the buyers is rewarded with generous gifts from the artists!</h4>
                                </Col>
                                <Col md={2} />
                                <Col xs={12} md={4}>
                                    <Image
                                        src="https://image.flaticon.com/icons/svg/639/639388.svg"
                                        className="svg-icons"
                                        
                                    />    
                                </Col>
                                <Col md={1} />
                            </Row>
                        </Row>
                    </Row>
                </Row>
                <PageHeader>
                    Business Model
                        </PageHeader>
                <Row id="bus-model" className="home-content-div">
                    <Col xs={12} md={3} />
                    <Col xs={12} md={2}>
                        <Jumbotron id="cust-share"><h1>92%</h1></Jumbotron>
                        <h3>Goes to you.</h3>
                    </Col>
                    <Col xs={12} md={2}>
                        <Jumbotron id="trans-share"><h1>5%</h1></Jumbotron>
                        <h3>Goes to transaction handling.</h3>
                    </Col>
                    <Col xs={12} md={2}>
                        <Jumbotron id="our-share"><h1>3%</h1></Jumbotron>
                        <h3>Gets us electricity and cheap coffee.</h3>
                    </Col>
                </Row>
                <Footer />
            </div>
        );
    }



}