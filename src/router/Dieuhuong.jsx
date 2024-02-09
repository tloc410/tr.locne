import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

import NotFound from '../component/NotFound';
import Project from '../component/Project';
import About from "../component/About";
import Timeline from "../component/timeline";

function DieuHuongURL() {
    return (
        <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path="/project" element={<Project />} />
            <Route path="/about" element={<About/>} />
            <Route path="/" element={<About />} />
            <Route path="/timeline" element={<Timeline />} />
        </Routes>
    );
}

export default DieuHuongURL;
