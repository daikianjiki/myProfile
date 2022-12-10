import React from "react";
import NavLinks from "./components/NavLinks";
import { BrowserRouter } from "react-router-dom";
import RouterRoutes from "./components/RouterRoutes";
import SubRoutes from "./components/SubRoutes";

export default function App() {
  return (
    <div className="body">
      <header>
        <p>This is the header.</p>
      </header>
      <BrowserRouter>
        <nav>
          <p>This is the nav.</p>
          <NavLinks />
        </nav>
        <main>
          <p>This is the main.</p>
          <RouterRoutes />
          <SubRoutes />
        </main>
      </BrowserRouter>
      <footer>
        <p>This is the footer.</p>
      </footer>
    </div>
  );
}