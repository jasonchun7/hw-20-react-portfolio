import React from "react";

function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <p className="content is-medium">Résumé</p>
        <hr />

        <a
          className="button is-primary"
          href={process.env.PUBLIC_URL + "/img/Jason-Chun-Resume.pdf"}
          target="_blank"
          rel=" noopener noreferrer"
        >
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Download My Resume</span>
        </a>
      </div>
    </div>
  );
}

export default Resume;
