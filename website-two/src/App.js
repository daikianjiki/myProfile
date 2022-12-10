import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About";
import Projects from "./components/Projects"

export default function App() {
  return (
    <div className="body">
      <header>
        <p>This is the header.</p>
      </header>
      <BrowserRouter>
        <nav>
          <p>This is the nav.</p>
          <Nav />
        </nav>
        <main>
          <p>This is the main.</p>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
          </Routes>
        </main>
      </BrowserRouter>
      <footer>
        <p>This is the footer.</p>
      </footer>
    </div>
  );
}