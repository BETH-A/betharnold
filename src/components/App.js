import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

function createCard(project) {
  return (
    <Card
      key={project.id}
      avatarIcon={project.avatarIcon}
      name={project.name}
      img={project.image}
      imgAlt={project.imageAlt}
      link={project.link}
      description={project.description}
      role={project.role}
      icons={project.icons}
    />
  );
}

function App(){

    return (
        <div>
          <Header />
          <Jumbotron />
          <Card />
          <Footer />
        </div>
      );  
}

export default App;