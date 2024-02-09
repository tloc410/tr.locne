import React, {Component} from 'react';
import "../css/footer.css"
import Feedback from "./feedback";
class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textareaHeight: "20px",
        };
    }

    handleChange = (event) => {
        const element = event.target;
        element.style.height = "20px";
        element.style.height = `${element.scrollHeight}px`;
        this.setState({ textareaHeight: `${element.scrollHeight}px` });
    };


    render() {
        return (
            <div className="footer">
                <div className="row footer_list">
                    <div className="col-3 col1">
                        <dt> © 2024</dt>
                        <p> Made in Trần Lộc</p>
                        <div className="col1_footer_logo">
                            <a href="https://github.com/tloc410"><i className="fa-brands fa-github"></i></a>
                            <a href="https://www.instagram.com/tr.locne/"><i className="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
    
                    <div className="col-3 col2">
                        <dt>Contract me</dt>
                        <dl className="row">
                            <p className="col-sm-3">Phone:</p>
                            <p className="col-sm-9"><a className="href_footer" href="tel:0862138133">0862138133</a></p>
                            <p className="col-sm-3">Email:</p>
                            <p className="col-sm-9"> <a className="href_footer" href="mailto:tr.locne404@gmail.com">tr.locne404@gmail.com</a></p>
                        </dl>
                        <dt>Location</dt>
                        <p>Thôn Hòa Thuận, Xã Iaphang, Huyện Chưpưh, Tỉnh Gia Lai. </p>
                    </div>
                    <div className="col-2 col3">
                        <dt>Website</dt>
                        <ul className="footer_list_web">
                            <li><a href="/about">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/project">Project</a></li>
                            <li><a href="/about">Contract</a></li>
                            <li><a href="/timeline">Time Line</a></li>
                        </ul>
                    </div>
                    <div className="col-4 col4">
                        <dt>Feedback</dt>
                        <Feedback id=""/>
                    </div>
                </div>
                {alert("chúc trung nam và duy phương năm mới vui vẻ, bớt báo lại. Trang web làm chưa xong....")}
                <p className="text-center foot"> Made in Trần Lộc © 2024</p>
            </div>
        );
    }
}

export default Footer;