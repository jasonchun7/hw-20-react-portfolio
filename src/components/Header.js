import React, { useState } from 'react';
import NavBar from './NavBar';
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
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
      <nav className="navbar text-center" bg="dark" variant="dark">
        <div className="navbar-brand text-center">
          <a
            className="navbar-item text-center"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/jasonchun7"
            variant="dark"
          >
            <span className="content is-large text-center" variant="dark">Jason Chun</span>
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