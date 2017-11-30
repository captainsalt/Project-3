import React, {Component} from "react";
import { Carousel } from "react-bootstrap";
import "./carousel.css";
export default class CarouselBS extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img width={700} height={400} alt="700x400" src="https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/2:1/w_1260%2Ch_630/the-ultimate-hamburger.jpg" className="csl"/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={700} height={400} alt="700x400" src="https://www.kingsford.com/wp-content/uploads/2014/11/kfd-howtohamburger-Burgers_5_0391-1024x621.jpg" className="csl"/>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="/assets/carousel.png" className="csl" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>
        )
    }
}
