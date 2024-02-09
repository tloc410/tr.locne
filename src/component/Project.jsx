import React, { Component } from 'react';
import '../css/project.css';
import prj1 from '../asset/img/project/prj1.png';
import prj2 from '../asset/img/project/prj2.png';
import prj3 from "../asset/img/project/prj3.jpg";
import prj4 from "../asset/img/project/prj4.png"
import prj5 from "../asset/img/project/prj5.png"

class Project extends Component {
  render() {
    const ProjectItem = ({ image, title, par, link }) => (
      <div className="row">
        <div className="col">
          <div className="img_prj">
            <img
              src={image}
              className="img-fluid"
              alt={title}
            />
          </div>
        </div>
        <div className="col p-5">
          <h1 className="tt_project">{title}</h1>
          <p className="d_project">{par}</p>
          <p className="lead">
            <a className="" href={link} role="button">Learn more</a>
          </p>
        </div>
      </div>
    );

    return (
      <div className="container project">
        <ProjectItem
          image={prj1}
          title="Web Portfolio"
          par="Đây là sản phẩm đầu tiên được tôi làm khi học ngôn ngữ lập trình. Trang web sử dụng các kiến thức cơ bản về HTML, CSS và trong đó có thêm JavaScripts."
          link="https://github.com/tloc410/tranloc_portfolio"
        />

        <ProjectItem
          image={prj2}
          title="Digital Lock using Verilog HDL"
          par="Đây là bài tập lớp Môn Thiết kế luận lý với VHDL HK222 của trường ĐH Bách Khoa - Thành phố Hồ Chí Minh. Ngôn ngữ được sử dụng trong bài báo cáo này là lập trình theo verilog trên mạch Arty Z7. Mạch có chức năng đóng mở cửa theo mật khẩu và mật khẩu dự phòng nếu bạn nhập sai quá nhiều lần. Nội dung chi tiết có thể xem thêm trong bài báo cáo."
          link="https://github.com/tloc410/Digital-Lock/tree/main"
        />

        <ProjectItem
          image={prj3}
          title="PCB Digital Lock"
          par="Đây là bài tập lớn Môn Mạch điện điện tử - HK231 của trường ĐH Bách Khoa - TP.HCM. Bài báo cáo này tạo ra các board mạch đơn giản thiết kế PCB sử dụng phầm mềm Alutium."
          link="https://github.com/tloc410/BTL_CO2037#"
        />

        <ProjectItem
          image={prj4}
          title="Graphic Processing Unit"
          par="Đây là bài tập lớn Môn Xác suất thống kê - HK231 của trường ĐH Bách Khoa - TP.HCM. Bài tập lớn này nhằm mục đích phân tích dữ liệu của GPU bằng ngôn ngữ R. Sau khi lọc bỏ dữ liệu xem xét các yếu tố đưa ra kết luận các yếu tố đặt ra có được thõa mãn hay không."
          link="https://github.com/tloc410/MT2013_Asg/tree/main"
        />

        <ProjectItem
          image={prj5}
          title="Subgraph Isomorphism"
          par="Đây là bài tập lớn Môn Cấu trúc rời rạc - HK231 của trường ĐH Bách Khoa - TP.HCM. Bài tập lớn này nhằm mục đích giúp hiểu rỡ hơn lý thuyết đồ thị và đi sâu vào đồ thị đẳng cấu.Từ tập dataset về một mạng dữ liệu lớn chúng ta áp dụng để đưa ra thuật toán tối ưu nhất trong việc xử lý dữ liệu. Và đặt ra các usecase để có thể biết được ứng dụng của đồ thị con đẳng cấu trong đời sống."
          link="https://github.com/tloc410/BTL_CO1007"
        />
      </div>
    );
  }
}

export default Project;