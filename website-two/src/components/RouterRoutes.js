import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from "./Home"
import About from "./About";
import Projects from "./Projects"
import Project1 from "./Project1"


export default function RouterRoutes() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />}>
                    <Route path="project1" element={<Project1 />} />
                    <Route path="project2" element={<Project1 />} />
                    <Route path="project3" element={<Project1 />} />
                </Route>
            </Routes>
        </>

    );
}
