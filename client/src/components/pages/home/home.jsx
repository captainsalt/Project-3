import React, { Component } from 'react';
import { Image, Row, PageHeader, Col, Thumbnail, Panel } from "react-bootstrap";
import CarouselBS from "../../carousel";
import "./home.css";
import testImages from "../testimages.json";

export default class Home extends Component {

    render() {
        return (
            <div>
                <CarouselBS />
                <br />
                <br />
                <Row>
                    <PageHeader><p>Meet Our Creators</p></PageHeader>
                </Row>
                <Row>
                    <Col xs={6} md={4}>
                        <Thumbnail>
                            <Image
                                className="feat-user"
                                src={testImages[0].imgUrl}
                                alt={testImages[0].alttext}
                                circle
                            />
                            <h3>Erin Shaefer</h3>
                            <p>Graffiti Artist. I also handcraft shoes.</p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                        <Thumbnail>
                            <Image
                                className="feat-user"
                                src={testImages[1].imgUrl}
                                alt={testImages[1].alttext}
                                circle
                            />
                            <h3>Melissa Brooks</h3>
                            <p>Wine lover, cheese maker, and 24/7 graphic designer.</p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                        <Thumbnail>
                            <Image
                                className="feat-user"
                                src={testImages[2].imgUrl}
                                alt={testImages[2].alttext}
                                circle
                            />
                            <h3>David Wright</h3>
                            <p>Comic book nerd. I love drawing comics from scratch.</p>
                        </Thumbnail>
                    </Col>
                </Row>
                <Row>
                    <PageHeader>
                        How It Works
                        </PageHeader>
                    <Col xs={6} md={4}>
                        <h3>Lorem Ipsum</h3>
                    </Col>
                    <Col xs={12} md={12}>
                        <p>It is a long established fact that a reader will be distracted by the readable contentof a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            It is a long established fact that a reader will be distracted by the readable contentof a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            It is a long established fact that a reader will be distracted by the readable contentof a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            It is a long established fact that a reader will be distracted by the readable contentof a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            It is a long established fact that a reader will be distracted by the readable contentof a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            It is a long established fact that a reader will be distracted by the readable contentof a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            It is a long established fact that a reader will be distracted by the readable contentof a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                    </Col>
                </Row>
                <Row>
                    <PageHeader>
                        Business Model
                        </PageHeader>
                    <Col xs={6} md={4}>
                        <h3>Lorem Ipsum</h3>
                    </Col>
                    <Col xs={12} md={12}>
                        <p>It is a long established fact that a reader will be distracted by the readable contentof a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            It is a long established fact that a reader will be distracted by the readable contentof a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            It is a long established fact that a reader will be distracted by the readable contentof a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            It is a long established fact that a reader will be distracted by the readable contentof a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            It is a long established fact that a reader will be distracted by the readable contentof a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            It is a long established fact that a reader will be distracted by the readable contentof a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            It is a long established fact that a reader will be distracted by the readable contentof a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                    </Col>
                </Row>
                <Panel>
                    <Col xs={12} md={12}>
                        <br/>
                        <h4>&copy; Team ArtFair 2017</h4>
                    </Col>
                </Panel>
            </div>
        );
    }



}