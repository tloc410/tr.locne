import React, {Component} from 'react';
import "../css/about.css"

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textareaHeight: "54px",
        };
    }

    render() {
        return (
            <div className="container">
                <div className="about">
                    <h1> About </h1>
                    <p>Xin chào mọi người. Lời đầu tiên tôi xin cảm ơn đã đọc chiếc "web" này. Tôi là Trần Văn Lộc. Sinh ra và lớn lên tại mảnh đất Gia Lai đầy nắng và gió với việc làm nông hái tiêu và cà phê là chủ yếu.</p>
                    <p>Trang web này của tôi đóng vai trò như một nơi giúp tôi có thể giới thiệu các dự án của mình và chia sẻ nó với mọi người. Trang web này trình bày các dự án, kỹ năng và thành tích của tôi . Tôi tin rằng việc chia sẻ trang web này của mình cho phép tôi kết nối với những cá nhân có cùng chí hướng hoặc có thể hiểu biết thêm một vài điều về tôi. </p>
                    <p>Bằng cách làm cho làm trang web này, tôi hy vọng có thể nhận được những lời feedback của mọi người để tôi có thể một phần nào đó học hỏi và hoàn thiện hơn.</p>
                </div>

                <div className="contract">
                    <h1>Contract </h1>
                    <ul>
                        <li><a href="mailto:tr.locne404@gmail.com">Email <i className="fa-solid fa-arrow-right"></i></a></li>
                        <li><a href="https://www.instagram.com/tr.locne/">Instagram <i className="fa-solid fa-arrow-right"></i> </a></li>
                        <li><a href="https://www.facebook.com/tr.locne">Facebook <i className="fa-solid fa-arrow-right"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/trlocne/">Linkedin <i className="fa-solid fa-arrow-right"></i></a></li>
                        <li><a href="https://locket.camera/links/ifaezJM7k3tXPevm7">Locket <i className="fa-solid fa-arrow-right"></i></a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default About;