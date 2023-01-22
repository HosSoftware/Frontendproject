import React from 'react';
import "../css/style.css"
import travelBackground from "./pictures/about-img.png"
import {Link} from "react-router-dom";


export default function About() {

    return (
        <div>
            <div className="about_section layout_padding">
                <div className="l-container vh70">
                    <div className="row h100">
                        <div className="col-70 pd-2">
                            <h1 className="about-title">About Us</h1>
                            <p className="justified">There are many variations of passages of Lorem Ipsum
                                available, but the majority have suffered alteration in some form, by injected
                                humour, or randomised words which don't look even slightly believable. If you are
                                going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                                embarrassing hidden in the middle of text. All </p>
                            <div className="center h100">
                                <Link to="/destinationsBySeason" className="btn-fancy"><span>Check destinations</span></Link>
                            </div>
                        </div>
                        <div className="col-50 h100">
                            <img height="100%" src={travelBackground} alt="Travel" className="about_img"/>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}
