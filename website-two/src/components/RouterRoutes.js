import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from "./Home"
import About from "./About";
import Projects from "./Projects"
import Project1 from "./Project1"
import Create from './Projects/CrudApp/Create';
import Read from './Projects/CrudApp/Read';
import Update from './Projects/CrudApp/Update';


export default function RouterRoutes() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />}>
                    <Route path="project1" element={<Create />}>
                        <Route path="read" element={<Read />} />
                        <Route path="update" element={<Update />} />
                    </Route>
                    <Route path="project2" element={<Project1 />} />
                    <Route path="project3" element={<Project1 />} />
                </Route>
            </Routes>
        </>

    );
}
