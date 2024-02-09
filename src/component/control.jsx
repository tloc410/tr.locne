import React, { Component } from 'react';
import '../css/control.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

class Control extends Component {

  constructor(props) {
    super(props);
    this.state = {
      prope: window.location.pathname.slice(1),
    };
  }

  handleClick = (pathname) => {
    this.setState({ prope: pathname.slice(1) });
  };

  render() {
    return (
      <div className="container-xl bg-gradient">
  
        <div className="img_1"></div>
        <Navbar />
        <div className="title_control">
          <div className="text-black pt-5 pb-5">
            Hello! I’m @tr.locne. <br />
            Chào mừng khám phá thế giới của tôi.
          </div>
        </div>

        <div className="box">
          <Link to="/project" className="">
            <button
              type="button"
              onClick={() => this.handleClick('/project')}
              className={`btn b1-${this.state.prope}`}
            >
              Project
            </button>
          </Link>
          <Link to="/timeline" className="">
            <button
              type="button"
              onClick={() => this.handleClick('/timeline')}
              className={`btn b2-${this.state.prope}`}
            >
              Time Line
            </button>
          </Link>
          <Link to="/about" className="">
            <button
              type="button"
              onClick={() => this.handleClick('/about')}
              className={`btn b3-${this.state.prope}`}
            >
              About
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Control;