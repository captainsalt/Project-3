import React, {Component} from "react";
import { Carousel } from "react-bootstrap";
import "./carousel.css";
export default class CarouselBS extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item className="ad1">
                    <Carousel.Caption>
                        <h2 className="cap-title">Share your craft with the world.</h2>
                        <h4 className="cap-text">Still a bedroom artist? ArtFair brings your works out of the bedroom and into the global art community!</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="ad2">
                    <Carousel.Caption>
                        <h2 className="cap-title">Uncover hidden gems.</h2>
                        <h4 className="cap-text">Don't know what you like? ArtFair supports artists ranging from sculptors to shoemakers. Start discovering what you like now!</h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
