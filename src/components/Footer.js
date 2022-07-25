import React from "react";

function Footer() {
  return (
    <footer className="text-center text-white" >
      <div className="container pt-4">
        <section class="mb-4">
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.linkedin.com/in/jason-chun-49523021b/"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://github.com/jasonchun7"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>
      </div>

      <div
        className="text-center text-dark p-3"
        
      >
        © 2020 Copyright:
        <a className="text-dark" href="https://github.com/jasonchun7">
          Jason J. Chun
        </a>
      </div>
    </footer>
  );
}

export default Footer;
