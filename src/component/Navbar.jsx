import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
        <div>
            <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                <a class="navbar-brand text-dark" href="/about">@tr.locne</a>
                </div>
                <div class="nav navbar-nav">
                    <a href="https://www.facebook.com/tr.locne"><i class="fa-brands fa-facebook text-dark size_icon"></i></a>
                    <a href="https://www.instagram.com/tr.locne/"><i class="fa-brands fa-instagram text-dark size_icon"></i></a>
                    <a href="https://github.com/tloc410"><i class="fa-brands fa-github text-dark size_icon"></i></a>
                </div>
            </div>
            </nav>
        </div>
        );
    }
}

export default Navbar;
