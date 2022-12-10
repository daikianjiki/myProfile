import React from 'react';
import Project1 from "./Project1"
import { Route, Routes } from "react-router-dom"

export default function SubRoutes() {
    return (
        <div>
            <Routes>
                <Route path="projects/project1" element={<Project1 />} />
                <Route path="projects/project2" element={<Project1 />} />
                <Route path="projects/project3" element={<Project1 />} />
            </Routes>
        </div>
    );
}
