import React from "react";
import WebIcon from '@material-ui/icons/Web';
import WebAssetIcon from '@material-ui/icons/WebAsset';
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



const projects = [
    {
        id: 1,
        avatarIcon: <WebIcon/>,
        name: "Secrets",
        subtitle: "Web Application",
        image: secretImg,
        imageAlt: "Top Secret Image",
        link: "https://github.com/BETH-A/Secrets",
        app: "https://secrets-beth.herokuapp.com/",
        description: "Secrets allows users to anonymously share secrets. This app was developed as a way to practice Authentication & Security practices.",
        role: "This app went through many revisions while enhancing security on each commit to GitHub. I started with encryping the password using Mongoose-Encryption then upgraded to Hashing. I then upgraded to Salting & Hashing passwords using bcrypt. Passport.js was used next to strenghten the security. I finally convert the app ths use OAuth, giving the user the ability to login via their Google or Facebook accounts.",
        deployed: "This web app has been deployed on Heroku.",
        packages: "EJS, MongoDB, Heroku, OAuth",
        icons: SecretsIcons
    },
    {
      id: 2,
      avatarIcon: <WebIcon/>,
      name: "Keeper",
      subtitle: "Web Application",
      image: keeperImg,
      imageAlt: "Keeper Image",
      link: "https://github.com/BETH-A/Keeper",
     app: "",
      description: "Note/Post-it type web application created with React.",
      role: "User has can create and delete notes. Currently only the Front End is available.  Linking to MongoDB Atlas and deploying to Heroku is in process.",
      deployed: "Under construction",
      packages: "React, MongoDB, Heroku",
      icons: KeeperIcons
  },
  {
    id: 3,
    avatarIcon: <WebIcon/>,
    name: "Student Connect",
    subtitle: "Web Application",
    image: connectImg,
    imageAlt: "Student Connect Image",
    link: "https://beth-a.github.io/connect/",
   app: "",
    description: "Web app created with a classmate to assist Students to connect with fellow classmates and utilizes a realtime chat feature.",
    role: "My role was setting up the Laravel framework, polishing frontend, and setting up the databases & the routes.",
    deployed: "",
    packages: "Laravel, PHP, Vue.js, MySQL",
    icons: KeeperIcons
},
{
  id: 4,
  avatarIcon: <WebIcon/>,
  name: "Movie Night",
  subtitle: "Web Application",
  image: movieImg,
  imageAlt: "Movie Night Image",
  link: "https://beth-a.github.io/Project-1/",
  app: "",
  description: "Web App created to show current movies showing & data about each movie while providing local theater locations based on zip code.",
  role: "The app uses an API to pull movie info including movie poster.  Four person team, I was responsible for the Front End Development.",
  deployed: "The app was deployed on Google Firebase Console.",
  packages: "HTML5, CSS3, JavaScript, Firebase",
  icons: <SecretsIcons />
},
{
  id: 5,
  avatarIcon: <WebIcon/>,
  name: "Memory Game",
  subtitle: "Web Application",
  image: memoryImg,
  imageAlt: "Memory Game Image",
  link: "https://github.com/BETH-A/Memory-Game",
  app: "https://beth-a.github.io/clickgame/",
  description: "Test your memory with this Tropical web application. Don't click on the same image twice in order to win the game.",
  role: "App was created to demonstrate basic logic and state management.",
  deployed: "The app was deployed on Heroku.",
  packages: "React, Node.js, Heroku",
  icons: <SecretsIcons />
},
{
  id: 6,
  avatarIcon: <WebIcon/>,
  name: "GifTastic",
  subtitle: "Web Application",
  image: giphyImg,
  imageAlt: "GifTastic Image",
  link: "https://beth-a.github.io/GifTastic/",
  app: "http://78.media.tumblr.com/e3e059dec30337f593abc3b554162eb9/tumblr_nb4z62cjaL1ry46hlo1_500.gif",
  description: "Render gifs from giphy.com for any topic you list.",
  role: "The app was created as a fun project to practice APIs. I created this web app early on in my code practice.",
  deployed: "The app was deployed using GitHub Pages.",
  packages: "Bootstrap, HTML, CSS, JavaScript, and jQuery",
  icons: <SecretsIcons />
},
{
  id: 7,
  avatarIcon: <WebIcon/>,
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
  icons: <SecretsIcons />
},
{
  id: 8,
  avatarIcon: <WebAssetIcon/>,
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
  icons: ""
},
{
  id: 9,
  avatarIcon: <WebAssetIcon/>,
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
  icons: ""
// },
// {
//   id: 10,
//   avatarIcon: <WebIcon/>,
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
}
]



                          
                          
                            
{/*                           
<div class="card projectCard">
  <a class="img-link" href="https://nytreact-ba.herokuapp.com/" target="_blank">
    <img class="card-img-top" alt="NY Times React Scrapper" src="assets/images/nyt.jpg">
    <div class="card-body">
      <h5 class="card-title">NY Times React</h5>
  </a>
  <p class="card-text">Retrieve New York Times news stories via API.
    This React Web App is deployed on Heroku and uses Express.js & MongoDB.</p>
    </div>
  <div class="card-footer iconRow">
    <img src="assets/images/icons/icon-expressjs.png" alt="Express.js">
    <img src="assets/images/icons/icons8-mongodb-50.png" alt="MongoDB">
    <img src="assets/images/icons/icons8-react-native-50.png" alt="React">
    <img src="assets/images/icons/icons8-heroku-50.png" alt="Heroku">
                         

                        */}

export default projects;