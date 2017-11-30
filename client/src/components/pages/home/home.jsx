import React, { Component } from 'react';
import {Image} from "react-bootstrap";
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
                <featured>
                    <Image
                        className="feat-user"
                        src={testImages[0].imgUrl}
                        alt={testImages[0].alttext}
                        circle
                    />
                    <Image
                        className="feat-user"
                        src={testImages[1].imgUrl}
                        alt={testImages[1].alttext}
                        circle
                         />
                    <Image
                        className="feat-user"
                        src={testImages[2].imgUrl}
                        alt={testImages[2].alttext}
                        circle
                         />
                </featured>
            </div>
        );
    }



}