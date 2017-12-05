import React, {Component} from "react";
import { Carousel } from "react-bootstrap";
import "./carousel.css";
export default class CarouselBS extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item className="ad1">
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="ad2">
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
