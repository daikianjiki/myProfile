import React from 'react';
import { Link } from 'react-router-dom'

export default function NavLinks() {
  return (
    <>
      <div className='links'>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="projects">Projects</Link>
      </div>
    </>

  );
}
