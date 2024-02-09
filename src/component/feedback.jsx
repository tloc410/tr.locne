import React, {Component} from 'react';
import "../css/feedback.css"

class Feedback extends Component {
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
            <div>
                <form className = {`form-style-4${this.props.id}`} action="" method="post">
                    <label htmlFor="field1">
                        <span>Hi, I'am </span><input type="text" name="field1" required="true"/>
                    </label>
                    <label htmlFor="field2">
                        <span>Your email address </span><input type="email" name="field2" required="true"/>
                    </label>
                    <label htmlFor="field4">
                        <span>Message </span><textarea style={{height: this.state.textareaHeight}}
                                                       onChange={this.handleChange}
                                                       name="field4" required="true"></textarea>
                    </label>

                    <div className= {`fb_sm1${this.props.id}`}>
                        <label className={`fb_submit1${this.props.id}`}>
                            <input type="submit" value="Submit" className={`sub_1${this.props.id}`}/>
                            <i className={`fa-solid icon_fb${this.props.id}  fa-arrow-right`}></i>
                        </label>
                    </div>
                </form>
            </div>
        );
    }
}

export default Feedback;