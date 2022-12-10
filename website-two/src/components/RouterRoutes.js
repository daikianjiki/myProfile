import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from "./Home"
import About from "./About";
import Projects from "./Projects"


export default function RouterRoutes() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />} />
            </Routes>
        </>

    );
}
