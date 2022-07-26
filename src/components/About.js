import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">To-Be a Full Stack Developer</p>
      <hr />
      <img className="profile" src={process.env.PUBLIC_URL + '/img/profile.jpeg'} alt="Jason Chun"/>
      <p className="content is-italic mt-4">
        Hi, I'm Jason, striving to become a Full-Stack Developer by taking a Full-Stack Bootcamp Course with Georgia Tech!
      </p>
      <p className="content">
        I've always been fascinated by the coding industry as it runs virtually everything we do in a day to day lifestyle. I plan to join that industry to make the world a better and more convenient place!
      </p>
    </div>
  );
}

export default About;