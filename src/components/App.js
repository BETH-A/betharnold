import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import projects from "../projects";
import "../style.css";

function createCard(project) {
  return (
    <Card
      key={project.id}
      avatarIcon={project.avatarIcon}
      name={project.name}
      subtitle={project.subtitle}
      image={project.image}
      imgAlt={project.imageAlt}
      link={project.link}
      app={project.app}
      description={project.description}
      role={project.role}
      deployed={project.deployed}
      packages={project.packages}
      icons={project.icons}
    />
  );
}

function App(){

    return (
        <div>
          <Header />
          <Jumbotron />
          <div className="container">
            {projects.map(createCard)}
          </div>
          <Footer />
        </div>
      );  
}

export default App;