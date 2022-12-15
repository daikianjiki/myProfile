import React from "react";
import NavLinks from "./components/NavLinks";
import { BrowserRouter } from "react-router-dom";
import RouterRoutes from "./components/RouterRoutes";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="body">
      <header>
        <Header />
      </header>
      <BrowserRouter>
        <nav>
          <p>This is the nav.</p>
          <NavLinks />
        </nav>
        <main>
          <p>This is the main.</p>
          <RouterRoutes />
        </main>
      </BrowserRouter>
      <footer>
        <p>This is the footer.</p>
      </footer>
    </div>
  );
}