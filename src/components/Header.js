//Needs to include Name and pull in Navigation component
import React, { useState } from 'react';
import NavBar from './NavBar';
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Projects";
import Resume from "./Resume";

function Header() {
  const [currentPage, handlePageChange] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;

      default:
        return <About />;
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <a
            className="navbar-item"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/jasonchun7"
          >
            <span className="content is-large">Jason Chun</span>
          </a>
        </div>
      </nav>
      <NavBar
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
    </div>
  );
}

export default Header;