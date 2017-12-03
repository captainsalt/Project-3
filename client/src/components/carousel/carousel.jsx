import React, {Component} from "react";
import { Carousel } from "react-bootstrap";
import "./carousel.css";
export default class CarouselBS extends Component {
    render() {
        return (
            <Carousel>
                {/* <div id="csl"> */}
                <Carousel.Item>
                    <img width={500} height={400} className="csl" alt="500x400" src="https://www.reviewjournal.com/wp-content/uploads/2017/10/9051518_web1_art-in-the-park_100817-_gb_016.jpg"/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={400} className="csl" alt="500x400" src="https://i.pinimg.com/originals/f7/81/f8/f781f84a37411064e0421cd74c5781c4.jpg"/>
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
                {/* </div> */}
            </Carousel>
        )
    }
}
