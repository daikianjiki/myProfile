import React from 'react';
import { Link } from 'react-router-dom'
import SubRoutes from './SubRoutes';

export default function Projects() {
  return (
    <div>
      <p>These are my projects.</p>
      <div className="sub-link">
        <Link to="projects/project1">Project 1</Link>
        <Link to="project2">Project 2</Link>
        <Link to="project3">Project 3</Link>
        <SubRoutes />
      </div>
    </div>
  );
}
