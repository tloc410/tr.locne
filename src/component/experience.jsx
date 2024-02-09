import React, { useRef } from 'react';
import '../css/experience.css';
import { motion, useScroll, useSpring } from "framer-motion";

const Detail = ({ time, detail }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className="item_detail">
            <motion.div
               initial={{y:200}}
               whileInView={{y:0}}
               transition={{duration: 0.75, type: "tween"}}
            >
            <div className="ditem">
                <h3>
                    {time}
                </h3>
                <p>{detail}</p>
            </div>
            </motion.div>
        </li>);
};

export default function Experience() {
    const ref = useRef(null);
    const { scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

    return (
        <div className="box_exper">
            <h1 className="text-center">Timeline</h1>
            <div ref={ref} className="detail">
                <motion.div
                    style={{scaleY: scrollYProgress}}
                    className="line_motion"
                ></motion.div>
                <ul className="list_detail">
                    <Detail
                        time="2010-2015"
                        detail="Học tại trường tiểu học Đinh Tiên Hoàng."
                    />

                    <Detail
                        time="2015-2019"
                        detail="Học tại trường THCS Lý Thường Kiệt."
                    />

                    <Detail
                        time="2019-2022"
                        detail="Học tại trường THPT Nguyễn Thái Học."
                    />

                    <Detail
                        time="2022-Present"
                        detail="Học tại Trường đại học Bách Khoa - Đại học quốc gia TP. Hồ Chí Minh. Chuyên ngành Kỹ thuật Máy tính."
                    />

                    <Detail
                        time="2022"
                        detail="Giải Nhì cuộc thi CAR MAZE OF OZ"
                    />
                    {/* Add more Detail components for other work experiences */}
                </ul>

            </div>
        </div>
    );
}
