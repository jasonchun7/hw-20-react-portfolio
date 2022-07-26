(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),c=a.n(l),i=(a(12),a(3));var o=function(e){return r.a.createElement("div",{className:"tabs is-centered"},r.a.createElement("ul",{className:"nav nav-tabs"},["About","Portfolio","Contact","Resume"].map(function(t){return r.a.createElement("li",{className:e.currentPage===t?"nav-item is-active":"nav-item",key:t},r.a.createElement("a",{href:"#"+t.toLowerCase(),onClick:function(){return e.handlePageChange(t)},className:e.currentPage===t?"nav-link active":"nav-link"},t))})))};var m=function(){return r.a.createElement("div",null,r.a.createElement("p",{className:"content is-medium"},"To-Be a Full Stack Developer"),r.a.createElement("hr",null),r.a.createElement("img",{className:"profile",src:"/hw-20-react-portfolio/img/profile.jpeg",alt:"Jason Chun"}),r.a.createElement("p",{className:"content is-italic mt-4"},"Hi, I'm Jason, striving to become a Full-Stack Developer by taking a Full-Stack Bootcamp Course with Georgia Tech!"),r.a.createElement("p",{className:"content"},"I've always been fascinated by the coding industry as it runs virtually everything we do in a day to day lifestyle. I plan to join that industry to make the world a better and more convenient place!"))};var s=function(){return r.a.createElement("div",{className:"w-50 mx-auto"},r.a.createElement("h1",{className:"pb-4 pt-2"},"Contact Page"),r.a.createElement("p",null,"Contact me via email by the link below:",r.a.createElement("br",null),r.a.createElement("a",{href:"mailto:jchun711@gmail.com"},"Email")))};var u=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"column is-desktop is-justify-content-center is-flex-wrap-wrap is-flex-direction-row"},e.projects.map(function(e){return r.a.createElement("div",{className:"column is-half"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image is-4by3"},r.a.createElement("a",{href:e.live,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"/hw-20-react-portfolio"+e.image,alt:"projects"})))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"}),r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title is-4",key:e.id},e.title))),r.a.createElement("div",{className:"content has-text-left"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"card"},r.a.createElement("footer",{className:"card-footer"},r.a.createElement("a",{href:e.repo,className:"card-footer-item",target:"_blank",rel:"noopener noreferrer"},"See the Repo!"),r.a.createElement("br",null),r.a.createElement("a",{href:e.live,className:"card-footer-item",target:"_blank",rel:"noopener noreferrer"},"See the Live Site!")))))))})))},h=[{id:0,title:"First Portfolio",image:"/img/portfolio1.png",repo:"https://github.com/jasonchun7/hw-2-portfoli",live:"https://jasonchun7.github.io/hw-2-portfolio/"},{id:1,title:"Workday Scheduler",image:"/img/scheduler.png",repo:"https://github.com/jasonchun7/hw-5-workday-scheduler",live:"https://jasonchun7.github.io/hw-5-workday-scheduler/"},{id:2,title:"GitCocktail",image:"/img/project1.png",live:"https://github.com/gretchesketch/project1_Cocktail-Recipe",repo:"https://gretchesketch.github.io/project1_Cocktail-Recipe/"},{id:3,title:"Weather Dashboard",image:"/img/weatherDash.png",live:"https://github.com/jasonchun7/hw-6-weather-dashboard",repo:"https://jasonchun7.github.io/hw-6-weather-dashboard/"},{id:4,title:"Tech Blog",image:"/img/techBlog.png",repo:"https://github.com/jasonchun7/hw-14-tech-blog",live:"https://damp-wave-90994.herokuapp.com/"},{id:5,title:"My Trash, Your Treasure",image:"/img/project2.png",repo:"https://github.com/jasonchun7/My-Trash-Your-Treasure",live:"#"}];var d=function(){return r.a.createElement("div",null,r.a.createElement("p",{className:"content is-medium"},"Portfolio"),r.a.createElement("hr",null),r.a.createElement(u,{projects:h}))};var p=function(){return r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("p",{className:"content is-medium"},"R\xe9sum\xe9"),r.a.createElement("hr",null),r.a.createElement("a",{className:"button is-primary",href:"/hw-20-react-portfolio/img/Jason-Chun-Resume.pdf",target:"_blank",rel:" noopener noreferrer"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fas fa-download"})),r.a.createElement("span",null,"Download My Resume"))))};var g=function(){var e=Object(n.useState)("About"),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar text-center",bg:"dark",variant:"dark"},r.a.createElement("div",{className:"navbar-brand text-center"},r.a.createElement("a",{className:"navbar-item text-center",rel:"noopener noreferrer",target:"_blank",href:"https://github.com/jasonchun7",variant:"dark"},r.a.createElement("span",{className:"content is-large text-center",variant:"dark"},"Jason Chun")))),r.a.createElement(o,{currentPage:a,handlePageChange:l}),r.a.createElement("main",null,r.a.createElement("div",null,function(){switch(a){case"About":return r.a.createElement(m,null);case"Portfolio":return r.a.createElement(d,null);case"Contact":return r.a.createElement(s,null);case"Resume":return r.a.createElement(p,null);default:return r.a.createElement(m,null)}}())))};var E=function(){return r.a.createElement("footer",{className:"text-center text-white"},r.a.createElement("div",{className:"container pt-4"},r.a.createElement("section",{class:"mb-4"},r.a.createElement("a",{className:"btn btn-link btn-floating btn-lg text-dark m-1",href:"https://www.linkedin.com/in/jason-chun-49523021b/",role:"button","data-mdb-ripple-color":"dark"},r.a.createElement("i",{className:"fab fa-linkedin"})),r.a.createElement("a",{className:"btn btn-link btn-floating btn-lg text-dark m-1",href:"https://github.com/jasonchun7",role:"button","data-mdb-ripple-color":"dark"},r.a.createElement("i",{className:"fab fa-github"})))),r.a.createElement("div",{className:"text-center text-dark p-3"},"\xa9 2020 Copyright:",r.a.createElement("a",{className:"text-dark",href:"https://github.com/jasonchun7"},"Jason J. Chun")))};a(13);var f=function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(E,null))},b=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),l(e),c(e)})};a(14);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),b()},4:function(e,t,a){e.exports=a(15)}},[[4,1,2]]]);
//# sourceMappingURL=main.63882519.chunk.js.map