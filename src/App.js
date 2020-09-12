import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import projects from "./contexts/projects";
import "../src/style/sass/main.scss";

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

function App(props){
    return (
        <div>
          <Header />
          <Jumbotron />
          <div className="container" >
            {projects.map(createCard)}
          </div>
          <Footer />
        </div>
      );  
}

export default App;