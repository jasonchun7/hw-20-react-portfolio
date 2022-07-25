import React from "react";
import Project from "./Projects";

const projects = [
  {
    id: 0,
    title: "First Portfolio",
    image: "/img/portfolio1.png",
    repo: "https://github.com/jasonchun7/hw-2-portfoli",
    live: "https://jasonchun7.github.io/hw-2-portfolio/",
  },
  {
    id: 1,
    title: "Workday Scheduler",
    image: "/img/scheduler.png",
    repo: "https://github.com/jasonchun7/hw-5-workday-scheduler",
    live: "https://jasonchun7.github.io/hw-5-workday-scheduler/",
  },
  {
    id: 2,
    title: "GitCocktail",
    image: "/img/project1.png",
    live: "https://github.com/gretchesketch/project1_Cocktail-Recipe",
    repo: "https://gretchesketch.github.io/project1_Cocktail-Recipe/",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    image: "/img/weatherDash.png",
    live: "https://github.com/jasonchun7/hw-6-weather-dashboard",
    repo: "https://jasonchun7.github.io/hw-6-weather-dashboard/",
  },
  {
    id: 4,
    title: "Tech Blog",
    image: "/img/techBlog.png",
    repo: "https://github.com/jasonchun7/hw-14-tech-blog",
    live: "https://damp-wave-90994.herokuapp.com/",
  },
  {
    id: 5,
    title: "My Trash, Your Treasure",
    image: "/img/project2.png",
    repo: "https://github.com/jasonchun7/My-Trash-Your-Treasure",
    live: "#",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;
