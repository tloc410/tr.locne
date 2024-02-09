import React, { Component } from 'react';
import img404 from "../asset/img/404/dribbble_1.gif";
import "../css/NotFound.css";
import {Link} from "react-router-dom";
class NotFound extends Component {
    render() {
        return (
            <div>
                <section class="container">
                    <div class="pg404">
                        <div class="four_zero_four_bg">
                            <img src={img404} alt="404" srcset="" />
                        </div>
                        
                        <div class="contant_box_404 text-center">
                            <h3 class="h2"> Look like you're lost</h3>
                            <p className="text-center">the page you are looking for not avaible!</p>
                            <Link to="/" class="link_404">Go to Home</Link>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default NotFound;
