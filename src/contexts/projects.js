import React from "react";
import WebIcon from '@material-ui/icons/Web';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import MobileIcon from '@material-ui/icons/PhoneIphone';
import secretImg from "../assets/images2/topSecretStamp.jpg";
import SecretsIcons, { KeeperIcons } from "../components/images";
import connectImg from "../assets/images2/students1.jpg";
import keeperImg from "../assets/images2/postItNotes.jpeg";
import movieImg from "../assets/images2/movie.jpg";
import memoryImg from "../assets/images2/Tropical-Background-1.jpg";
import giphyImg from "../assets/images2/giphy.gif";
import hpImg from "../assets/images2/HPbackground2.jpg";
import pewImg from "../assets/images2/pew.png";
import drDImg from "../assets/images2/drD.png";
import nyReactImg from "../assets/images2/nyt.jpg";
import bCardImg from "../assets/images2/bCard.png";
import magicPaperImg from "../assets/images2/magicPaper.jpg";
import natoursImg from "../assets/images2/natours.png";
import nexterImg from "../assets/images2/nexter.jpeg";

const projects = [
    {
        id: 1,
        avatarIcon: <WebIcon style={{fontSize: 30}}/>,
        name: "Secrets",
        subtitle: "Web Application",
        image: secretImg,
        imageAlt: "Top Secret Image",
        component: "img",
        link: "https://github.com/BETH-A/Secrets",
        app: "https://secrets-beth.herokuapp.com/",
        description: "Secrets allows users to anonymously share secrets. Developed as a way to practice Authentication & Security practices.",
        role: "This app went through many revisions while enhancing security on each commit to GitHub. I started with encryping the password using Mongoose-Encryption then upgraded to Hashing. I then upgraded to Salting & Hashing passwords using bcrypt. Passport.js was used next to strenghten the security. I finally convert the app ths use OAuth, giving the user the ability to login via their Google or Facebook accounts.",
        deployed: "This web app has been deployed on Heroku.",
        packages: "EJS, MongoDB, Heroku, OAuth",
        // icons: SecretsIcons
    },
    {
      id: 2,
      avatarIcon: <MobileIcon style={{fontSize: 30}}/>,
      name: "BethCard",
      subtitle: "iOS Application",
      image: bCardImg,
      imageAlt: "BethCard Video",
      component: "video",
      link: "https://github.com/BETH-A/BethCard",
      app: "",
      description: "Personal business card iOS App. Created as a way of learning and exploring SwiftUI.",
      role: "The concept for this app was from a course I was taking to show us how to setup a basic iOS app using SwiftUI.  I expanded this project to discover more about SwiftUI. I added a second page, make the buttons active to external links, taped into CallKit and MessageUI so I could be contacted.",
      deployed: "Not launched on the Apple App Store - code can be forked from repo & ran in XCode",
      packages: "SwiftUI",
      // icons: KeeperIcons
  },
  {
    id: 3,
    avatarIcon: <MobileIcon style={{fontSize: 30}}/>,
    name: "MagicPaper",
    subtitle: "iOS Application",
    image: magicPaperImg,
    imageAlt: "MagicPaper Video",
    link: "https://github.com/BETH-A/MagicPaper",
   app: "",
    description: "Harry Potter inspired Magic News Paper app. Created as a way to learn the basics of AR Kit.",
    role: "This app was created as part of a course I was taking as an introduction to AR Kit.",
    deployed: "Not launched on the Apple App Store - code can be forked from repo & ran in XCode",
    packages: "SwiftUI",
    // icons: KeeperIcons
},
    {
      id: 4,
      avatarIcon: <WebIcon style={{fontSize: 30}}/>,
      name: "Keeper",
      subtitle: "Web Application",
      image: keeperImg,
      imageAlt: "Keeper Image",
      link: "https://github.com/BETH-A/Keeper",
     app: "",
      description: "Note/Post-it type web application created with React. User has can create and delete notes. Currently only the Front End.",
      role: "Created this application as part a way to practice React. Still need to link to MongoDB Atlas and deploying.",
      deployed: "Under construction",
      packages: "React, MongoDB, Heroku",
      // icons: KeeperIcons
  },
//   {
//     id: 5,
//     avatarIcon: <WebIcon style={{fontSize: 30}}/>,
//     name: "Student Connect",
//     subtitle: "Web Application",
//     image: connectImg,
//     imageAlt: "Student Connect Image",
//     link: "https://beth-a.github.io/connect/",
//    app: "",
//     description: "Web app created with a classmate to assist Students to connect with fellow classmates and utilizes a realtime chat feature.",
//     role: "My role was setting up the Laravel framework, polishing frontend, and setting up the databases & the routes.",
//     deployed: "",
//     packages: "Laravel, PHP, Vue.js, MySQL",
//     icons: KeeperIcons
// },
{
  id: 6,
  avatarIcon: <WebIcon style={{fontSize: 30}}/>,
  name: "Movie Night",
  subtitle: "Web Application",
  image: movieImg,
  imageAlt: "Movie Night Image",
  link: "https://beth-a.github.io/Project-1/",
  app: "",
  description: "Web App which shows current movies showing & data about each movie while providing local theater locations based on zip code.",
  role: "The app uses an API to pull movie info including movie poster.  Four person team, I was responsible for the Front End Development.",
  deployed: "The app was deployed on Google Firebase Console.",
  packages: "HTML5, CSS3, JavaScript, Firebase",
  // icons: <SecretsIcons />
},
// {
//   id: 7,
//   avatarIcon: <WebIcon style={{fontSize: 30}}/>,
//   name: "Memory Game",
//   subtitle: "Web Application",
//   image: memoryImg,
//   imageAlt: "Memory Game Image",
//   link: "https://github.com/BETH-A/Memory-Game",
//   app: "https://beth-a.github.io/clickgame/",
//   description: "Test your memory with this Tropical web application. Don't click on the same image twice in order to win the game.",
//   role: "App was created to demonstrate basic logic and state management.",
//   deployed: "The app was deployed on Heroku.",
//   packages: "React, Node.js, Heroku",
//   icons: <SecretsIcons />
// },
{
  id: 8,
  avatarIcon: <WebIcon style={{fontSize: 30}}/>,
  name: "GifTastic",
  subtitle: "Web Application",
  image: giphyImg,
  imageAlt: "GifTastic Image",
  link: "https://beth-a.github.io/GifTastic/",
  app: "http://78.media.tumblr.com/e3e059dec30337f593abc3b554162eb9/tumblr_nb4z62cjaL1ry46hlo1_500.gif",
  description: "One of the 1st projects I created that used an API to render gifs from giphy.com for any topic you list.",
  role: "The app was created as a fun project to practice APIs. I created this web app early on in my code practice.",
  deployed: "The app was deployed using GitHub Pages.",
  packages: "Bootstrap, HTML, CSS, JavaScript, and jQuery",
  // icons: <SecretsIcons />
},
{
  id: 9,
  avatarIcon: <WebIcon style={{fontSize: 30}}/>,
  name: "Harry Potter Trivia",
  subtitle: "Web Application",
  image: hpImg,
  imageAlt: "Harry Potter Trivia Image",
  link: "https://beth-a.github.io/TriviaGame/",
  app: "https://beth-a.github.io/clickgame/",
  description: "Test your knowledge of the world of Harry Potter with a simple Trivia Game. See how well you know the movies.",
  role: "I created this app very early on as a way to practice basic JavaScript and jQuery.  The short, multiple choice trivia game uses basic logic, time management, and scoring capabilities.",
  deployed: "The app was deployed on GitHub Pages.",
  packages: "HTML, CSS, JavaScript, and jQuery.",
  // icons: <SecretsIcons />
},
{
  id: 10,
  avatarIcon: <WebAssetIcon style={{fontSize: 30}}/>,
  name: "Pure Energy Wellness",
  subtitle: "Client Web Site",
  image: pewImg,
  imageAlt: "PUW Image",
  link: "",
  app: "https://www.pureenergywellness.com/",
  description: "Pure Energy Wellness is a private wellness center/gym in Winter Park, FL.",
  role: "Client web site designed to their specifications.  Client already has the domain and plateform, but I was tasked with designing the site.",
  deployed: "The website was created on SquareSpaces.com.",
  packages: "None required",
  // icons: ""
},
{
  id: 11,
  avatarIcon: <WebAssetIcon style={{fontSize: 30}}/>,
  name: "Dr D Acupuncture",
  subtitle: "Client Web Site",
  image: drDImg,
  imageAlt: "DrD Image",
  link: "",
  app: "https://www.drdacupuncture.com/",
  description: "Dr Denise is a board certified & Licensed Acupuncture Physician in Winter Park, FL. ",
  role: "Client web site designed to their specifications.  Client already has the domain and plateform, but I was tasked with designing the site.",
  deployed: "The website was created on SquareSpaces.com.",
  packages: "None required",
  // icons: ""
},
{
  id: 12,
  avatarIcon: <WebIcon style={{fontSize: 30}}/>,
  name: "NY Times React Scrapper",
  subtitle: "Web Application",
  image: nyReactImg,
  imageAlt: "NYReact Image",
  link: "https://github.com/BETH-A/Memory-Game",
  app: "https://nytreact-ba.herokuapp.com/",
  description: "Retrieve news stories from the New York Times archives for a specific keyword and time frame using an API.",
  role: "App was created to practice REST APIs.",
  deployed: "The app was deployed on Heroku.",
  packages: "React, Express.js, MongoDB",
  // icons: <SecretsIcons />
},
{
  id: 13,
  avatarIcon: <WebAssetIcon style={{fontSize: 30}}/>,
  name: "Natours",
  subtitle: "Website SASS Application",
  image: natoursImg,
  imageAlt: "Natours Image",
  link: "https://github.com/BETH-A/Natours",
  app: "https://beth-a.github.io/Natours/",
  description: "Nature Tour inspired website was created this website as a way to practice 7-1 SASS Architecture and a Media Queries Manager.",
  role: "Created as part of an online course ADVANCED CSS & SASS on Udemy.com. Using HTML, CSS, and SASS this site was created as a playground to learn advanced styling techniques.",
  deployed: "The app was deployed on GitHub Pages.",
  packages: "HTML5, SASS, Node",
  // icons: <SecretsIcons />
},
{
  id: 14,
  avatarIcon: <WebAssetIcon style={{fontSize: 30}}/>,
  name: "Nexter",
  subtitle: "Website SASS Application",
  image: nexterImg,
  imageAlt: "Nexter Image",
  link: "https://github.com/BETH-A/Nexter",
  app: "https://beth-a.github.io/Nexter/",
  description: "Real Estate inspired website was used to learn to use the power of SASS and CSS Grids.",
  role: "Created as part of an online course ADVANCED CSS & SASS on Udemy.com. Using HTML, CSS, and SASS this site was created as a playground to learn advanced styling techniques.",
  deployed: "The app was deployed on GitHub Pages.",
  packages: "HTML5, SASS, Node, CSS Grids",
  // icons: <SecretsIcons />
},
{
  id: 15,
  avatarIcon: <WebIcon style={{fontSize: 30}}/>,
  name: "NY Times React Scrapper",
  subtitle: "Web Application",
  image: nyReactImg,
  imageAlt: "NYReact Image",
  link: "https://github.com/BETH-A/Memory-Game",
  app: "https://nytreact-ba.herokuapp.com/",
  description: "Retrieve New York Times news stories via API.",
  role: "App was created to practice REST APIs.",
  deployed: "The app was deployed on Heroku.",
  packages: "React, Express.js, MongoDB",
  // icons: <SecretsIcons />
},
{
  id: 16,
  avatarIcon: <WebIcon style={{fontSize: 30}}/>,
  name: "NY Times React Scrapper",
  subtitle: "Web Application",
  image: nyReactImg,
  imageAlt: "NYReact Image",
  link: "https://github.com/BETH-A/Memory-Game",
  app: "https://nytreact-ba.herokuapp.com/",
  description: "Retrieve New York Times news stories via API.",
  role: "App was created to practice REST APIs.",
  deployed: "The app was deployed on Heroku.",
  packages: "React, Express.js, MongoDB",
  // icons: <SecretsIcons />
},
{
  id: 17,
  avatarIcon: <WebIcon style={{fontSize: 30}}/>,
  name: "NY Times React Scrapper",
  subtitle: "Web Application",
  image: nyReactImg,
  imageAlt: "NYReact Image",
  link: "https://github.com/BETH-A/Memory-Game",
  app: "https://nytreact-ba.herokuapp.com/",
  description: "Retrieve New York Times news stories via API.",
  role: "App was created to practice REST APIs.",
  deployed: "The app was deployed on Heroku.",
  packages: "React, Express.js, MongoDB",
  // icons: <SecretsIcons />
}
//  PROJECT TEMPLATE
// {
//   id: ,
//   avatarIcon: <WebIcon style={{fontSize: 30}}/>,
//   name: "",
//   subtitle: "",
//   image: ,
//   imageAlt: "",
//   link: "https://github.com/BETH-A/",
//   app: "",
//   description: "",
//   role: "",
//   deployed: "The app was deployed on.",
//   packages: "",
//   icons: <SecretsIcons />
// }
]


export default projects;