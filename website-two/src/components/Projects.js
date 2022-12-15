import React from 'react';
import { Link, Outlet } from 'react-router-dom'

export default function Projects() {
  return (
    <div>
      <p>These are my projects.</p>
      <div className="sub-link">
        <Link to="project1">Project 1</Link>
        <Link to="project2">Project 2</Link>
        <Link to="project3">Project 3</Link>
      </div>
      <Outlet />
    </div>
  );
}
